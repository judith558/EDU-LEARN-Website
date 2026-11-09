# EduLearn

EduLearn is a static GitHub Pages learning platform with a Supabase backend. Visitors can browse the catalogue and course previews. Authentication is handled by Supabase Auth; full course content, quizzes, the learner dashboard and admin console are protected client-side and with Supabase row-level security.

## Deploying with Supabase

1. Create a Supabase project.
2. Open the Supabase SQL Editor and run `supabase/schema.sql`.
3. Copy `js/supabase-config.example.js` to `js/supabase-config.js` and replace the project URL and public anon key. Never place a service-role key in this repository.
4. In Supabase Auth → URL Configuration, add your GitHub Pages URL and the reset URL, for example `https://YOUR-ORG.github.io/YOUR-REPO/reset.html`.
5. Register a user, then promote that user to admin in SQL with `update public.profiles set role = 'admin' where username = 'your_username';`.
6. Upload the folder to GitHub Pages. No build step is required.

## Included product areas

- Public home page and searchable catalogue with 37 course pathways across Web Development, Programming, Database Management, Computer Science and Digital Skills.
- Supabase registration, login by email or username, password visibility, validation, persistent sessions, logout and password recovery.
- Protected course detail, enrolment, tutorial, quiz, dashboard and profile pages.
- Admin dashboard shell with role-protected course sync, enrolment and student counts.
- `localStorage` remains only for the original demo lesson/quiz progress engine; authentication and enrolments use Supabase.
