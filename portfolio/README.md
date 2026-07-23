# Balkrushna Naik — Data Analyst Portfolio

A professional, fully responsive Data Analyst portfolio built with React + Vite. Blue corporate
theme, no backend, ready to deploy on Vercel.

## Tech stack

- React 19 + Vite
- Framer Motion (animations)
- React Icons (skill/tool icons)
- React Scroll (in-page navigation + active-link highlighting)
- EmailJS (contact form — no backend needed)
- Plain CSS with a token-based design system (`src/index.css`)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Project structure

```
src/
  components/     One folder per section (Navbar, Hero, About, Skills, Projects,
                   Services, Achievements, Experience, Certifications, Education,
                   Contact, Footer) — each with its .jsx and .css
  data/           Content lives here: skills.js, projects.js, education.js, siteConfig.js
  index.css       Design tokens (colors, type, spacing) + shared utility classes
```

To update content — add a project, change a skill percentage, edit contact details —
edit the relevant file in `src/data/`. No need to touch component code.

## Adding your resume

Drop your resume PDF at `public/resume.pdf`. The "Download Resume" buttons already
point to `/resume.pdf`.

## Setting up the contact form (EmailJS)

The contact form is wired to EmailJS but needs your own credentials to actually send
email (this is expected — EmailJS accounts are free and personal to you):

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an email service (e.g. Gmail) and create a template with `user_name`,
   `user_email`, `subject` and `message` variables.
3. Copy `.env.example` to `.env` and fill in your Service ID, Template ID and Public Key:

```bash
cp .env.example .env
```

4. Restart the dev server after editing `.env`.

Until this is configured, the form will show a friendly message pointing visitors to
your email address instead of failing silently.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Framework preset: **Vite** (auto-detected — `vercel.json` is already included).
4. Add the three `VITE_EMAILJS_*` environment variables in the Vercel project settings.
5. Deploy.

## Customization notes

- Colors, fonts and spacing all live as CSS variables at the top of `src/index.css` —
  change them once and the whole site updates.
- Section order is controlled in `src/App.jsx`.
- Project GitHub/demo links in `src/data/projects.js` are placeholders — update them
  with your real repo and deployment URLs.
