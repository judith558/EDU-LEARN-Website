/* EduLearn authentication. Uses Supabase Auth; no passwords are stored in the browser. */
(function () {
  const restricted = ["tutorial.html", "quiz.html", "dashboard.html", "profile.html", "admin.html"];
  const page = location.pathname.split("/").pop() || "index.html";
  const isConfigured = () => window.supabase && window.EDULEARN_SUPABASE_URL && window.EDULEARN_SUPABASE_ANON_KEY && !window.EDULEARN_SUPABASE_URL.includes("YOUR-") && !window.EDULEARN_SUPABASE_ANON_KEY.includes("YOUR-");
  let client = null;
  if (isConfigured()) client = window.supabase.createClient(window.EDULEARN_SUPABASE_URL, window.EDULEARN_SUPABASE_ANON_KEY);
  window.EduAuth = { client, isConfigured, user: null, profile: null };

  function nextUrl() { return new URLSearchParams(location.search).get("next") || "dashboard.html"; }
  function rememberDestination() { sessionStorage.setItem("edulearnNext", location.href); }
  function setupNotice() {
    if (client) return;
    document.querySelectorAll("[data-auth-setup]").forEach(el => {
      el.innerHTML = "<strong>Supabase setup required.</strong><br>Copy <code>js/supabase-config.example.js</code> to <code>js/supabase-config.js</code>, add your project URL and public anon key, then run <code>supabase/schema.sql</code> in the Supabase SQL Editor.";
      el.classList.add("notice", "notice-warning");
    });
  }
  function showMessage(message, type) {
    const el = document.querySelector("[data-auth-message]");
    if (el) { el.textContent = message; el.className = "form-message " + (type || ""); }
  }
  async function getSession() {
    if (!client) return null;
    const { data } = await client.auth.getSession();
    EduAuth.user = data.session?.user || null;
    if (EduAuth.user) {
      const result = await client.from("profiles").select("*").eq("id", EduAuth.user.id).maybeSingle();
      EduAuth.profile = result.data || null;
    }
    return EduAuth.user;
  }
  function renderNav() {
    const nav = document.querySelector(".nav-links");
    if (!nav) return;
    let item = nav.querySelector(".auth-nav-item");
    if (!item) { item = document.createElement("li"); item.className = "auth-nav-item"; nav.appendChild(item); }
    item.innerHTML = EduAuth.user ? `<a href="dashboard.html" class="nav-account">${(EduAuth.profile?.full_name || EduAuth.user.email || "Account").split(" ")[0]}</a><button class="nav-logout" type="button">Log out</button>` : `<a href="login.html" class="nav-account">Log in</a>`;
    item.querySelector(".nav-logout")?.addEventListener("click", async () => { await client.auth.signOut(); location.href = "index.html"; });
  }
  async function guard() {
    const user = await getSession();
    renderNav();
    if (restricted.includes(page) && !user) { rememberDestination(); location.replace("login.html?next=" + encodeURIComponent(location.href)); return false; }
    if (page === "admin.html" && EduAuth.profile?.role !== "admin") { location.replace("dashboard.html"); return false; }
    return true;
  }
  function bindPasswordToggles() { document.querySelectorAll("[data-password-toggle]").forEach(btn => btn.addEventListener("click", () => { const input = document.getElementById(btn.dataset.passwordToggle); input.type = input.type === "password" ? "text" : "password"; btn.textContent = input.type === "password" ? "Show" : "Hide"; })); }

  document.addEventListener("DOMContentLoaded", async () => {
    setupNotice(); bindPasswordToggles();
    const allowed = await guard(); if (!allowed) return;
    document.dispatchEvent(new CustomEvent("edulearn:auth-ready"));
    const form = document.querySelector("[data-auth-form]");
    if (form && !client) return;
    if (form?.dataset.authForm === "signup") form.addEventListener("submit", async e => {
      e.preventDefault(); const data = Object.fromEntries(new FormData(form));
      if (data.password.length < 8) return showMessage("Use at least 8 characters for your password.", "error");
      if (data.password !== data.confirmPassword) return showMessage("Passwords do not match.", "error");
      const { error } = await client.auth.signUp({ email: data.email, password: data.password, options: { data: { full_name: data.fullName, username: data.username.toLowerCase() } } });
      if (error) return showMessage(error.message, "error"); showMessage("Account created. Check your email to confirm your account, then log in.", "success"); form.reset();
    });
    if (form?.dataset.authForm === "login") form.addEventListener("submit", async e => {
      e.preventDefault(); const data = Object.fromEntries(new FormData(form));
      let email = data.identifier;
      if (!email.includes("@")) { const { data: resolved, error: lookupError } = await client.rpc("login_email_for_username", { requested_username: email }); if (lookupError || !resolved) return showMessage("We couldn't find that email or username.", "error"); email = resolved; }
      const { error } = await client.auth.signInWithPassword({ email, password: data.password });
      if (error) return showMessage("Login failed. Use your account email and password.", "error"); location.href = sessionStorage.getItem("edulearnNext") || nextUrl(); sessionStorage.removeItem("edulearnNext");
    });
    if (form?.dataset.authForm === "forgot") form.addEventListener("submit", async e => { e.preventDefault(); const { email } = Object.fromEntries(new FormData(form)); const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.href.replace("forgot.html", "reset.html") }); if (error) return showMessage(error.message, "error"); showMessage("If an account exists for that email, a reset link is on its way.", "success"); });
    if (form?.dataset.authForm === "reset") form.addEventListener("submit", async e => { e.preventDefault(); const data = Object.fromEntries(new FormData(form)); if (data.password.length < 8 || data.password !== data.confirmPassword) return showMessage("Use matching passwords with at least 8 characters.", "error"); const { error } = await client.auth.updateUser({ password: data.password }); if (error) return showMessage(error.message, "error"); showMessage("Password updated. You can now continue learning.", "success"); setTimeout(() => location.href = "dashboard.html", 900); });
    document.querySelector("[data-logout]")?.addEventListener("click", async () => { await client.auth.signOut(); location.href = "index.html"; });
    document.querySelector("[data-profile-form]")?.addEventListener("submit", async e => { e.preventDefault(); const data = Object.fromEntries(new FormData(e.currentTarget)); const { error } = await client.from("profiles").update({ full_name: data.fullName, username: data.username }).eq("id", EduAuth.user.id); if (error) return showMessage(error.message, "error"); showMessage("Profile updated.", "success"); });
    document.querySelectorAll("[data-user-name]").forEach(el => el.textContent = EduAuth.profile?.full_name || "Learner");
    document.querySelectorAll("[data-user-email]").forEach(el => el.textContent = EduAuth.user?.email || "");
    document.querySelectorAll("[data-profile-value='full_name']").forEach(el => el.value = EduAuth.profile?.full_name || "");
    document.querySelectorAll("[data-profile-value='username']").forEach(el => el.value = EduAuth.profile?.username || "");
  });
})();
