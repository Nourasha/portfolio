# Nour.dev — Portfolio

A modern, responsive portfolio website showcasing my projects, technical skills, and professional background as a full-stack developer and cybersecurity master's student based in Norway.

**Live site:** [nourab.netlify.app](https://nourab.netlify.app/)

## Tech stack

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/) — UI and client-side routing
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Sanity](https://www.sanity.io/) — headless CMS for bio, skills, and project content
- [Create React App](https://create-react-app.dev/) — build tooling

## Features

- Responsive design
- Dynamic project content powered by Sanity CMS
- Project filtering and detailed project pages
- Contact information and social links
- Modern UI built with React and Tailwind CSS

## Getting started

```bash
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Environment variables

> **Note**
>
> This project uses Sanity as a headless CMS. You'll need your own Sanity project and dataset to manage content.

Create a `.env.local` file in the project root with:

```
REACT_APP_SANITY_PROJECT_ID=<your-sanity-project-id>
```

### Available scripts

- `npm start` — run the dev server
- `npm run build` — build for production
- `npm test` — run tests

## Project structure

```
src/
├── components/   Reusable UI components
├── pages/        Application pages
├── routes/       Router configuration
├── lib/          Sanity client
├── data/         Static data
└── assets/       Images and icons
studio1/          Sanity Studio
```

## Deployment

The site is deployed on [Netlify](https://www.netlify.com/), with `public/_redirects` configured to serve `index.html` for all routes (client-side routing).

## License

This project is for portfolio purposes. Please do not copy the content or branding without permission.
