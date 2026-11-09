-- EduLearn production schema for Supabase.
-- Run in Supabase SQL Editor, then promote an admin by updating profiles.role.
create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  username text unique not null,
  email text unique not null,
  avatar_url text,
  role text not null default 'student' check (role in ('student','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.courses (
  id text primary key,
  title text not null,
  slug text unique not null,
  category text not null,
  level text not null,
  description text not null,
  instructor text not null default 'EduLearn Academy',
  duration text not null default '4 weeks',
  thumbnail_url text,
  objectives jsonb not null default '[]'::jsonb,
  curriculum jsonb not null default '[]'::jsonb,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.enrollments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null references public.courses(id) on delete cascade,
  progress integer not null default 0 check (progress between 0 and 100),
  completed_lessons jsonb not null default '[]'::jsonb,
  saved_lessons jsonb not null default '[]'::jsonb,
  last_lesson text,
  enrolled_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, course_id)
);

create table if not exists public.quiz_results (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text references public.courses(id) on delete set null,
  topic text not null,
  score integer not null,
  total integer not null,
  percent integer not null,
  created_at timestamptz not null default now()
);

create table if not exists public.certificates (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id text not null references public.courses(id) on delete cascade,
  certificate_code text unique not null,
  issued_at timestamptz not null default now(),
  unique(user_id, course_id)
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, username, email)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name',''), lower(coalesce(new.raw_user_meta_data->>'username', split_part(new.email,'@',1))), new.email)
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

create or replace function public.login_email_for_username(requested_username text)
returns text language sql security definer set search_path = public as $$
  select email from public.profiles where username = lower(requested_username) limit 1;
$$;
grant execute on function public.login_email_for_username(text) to anon, authenticated;

alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;
alter table public.quiz_results enable row level security;
alter table public.certificates enable row level security;

create policy "published courses are public" on public.courses for select using (published = true or auth.uid() is not null);
create policy "users can read their profile" on public.profiles for select using (auth.uid() = id);
create policy "users can update their profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "users read own enrollments" on public.enrollments for select using (auth.uid() = user_id);
create policy "users create own enrollments" on public.enrollments for insert with check (auth.uid() = user_id);
create policy "users update own enrollments" on public.enrollments for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users read own quiz results" on public.quiz_results for select using (auth.uid() = user_id);
create policy "users create own quiz results" on public.quiz_results for insert with check (auth.uid() = user_id);
create policy "users read own certificates" on public.certificates for select using (auth.uid() = user_id);

-- Admin policies. Promote a trusted user with:
-- update public.profiles set role = 'admin' where username = 'your_username';
create policy "admins manage courses" on public.courses for all using (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')) with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));
create policy "admins read all profiles" on public.profiles for select using (auth.uid() = id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));
create policy "admins read all enrollments" on public.enrollments for select using (auth.uid() = user_id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));
create policy "admins read all quiz results" on public.quiz_results for select using (auth.uid() = user_id or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin'));
