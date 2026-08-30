# Nour.dev — Portfolio

A modern, responsive portfolio website showcasing my projects, technical skills, and professional background as a full-stack developer and cybersecurity master's student based in Norway.

**Live site:** [nourab.dev](https://nourab.dev/)

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) — server-rendered UI and routing
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Sanity](https://www.sanity.io/) — headless CMS for bio, skills, and project content

## Features

- Responsive design
- Dynamic project content powered by Sanity CMS
- Project filtering and detailed project pages
- Contact information and social links
- Modern UI built with React and Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Environment variables

> **Note**
>
> This project uses Sanity as a headless CMS. You'll need your own Sanity project and dataset to manage content.

Create a `.env.local` file in the project root with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-sanity-project-id>
```

### Available scripts

- `npm run dev` — run the dev server
- `npm run build` — build for production
- `npm start` — serve the production build
- `npm run lint` — run ESLint

## Project structure

```
src/
├── app/          App Router routes, layout and global styles
├── components/   Reusable UI components
├── lib/          Sanity client and shared constants
└── assets/       Images and icons
studio1/          Sanity Studio
```

## Deployment

The site is deployed on [Netlify](https://www.netlify.com/) using the official Next.js runtime (`@netlify/plugin-nextjs`). Pages are statically rendered and revalidated hourly, so CMS edits appear without a redeploy.

## License

This project is for portfolio purposes. Please do not copy the content or branding without permission.
