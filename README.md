<p align="right">
  <b>🇺🇸 English</b> | <a href="./README.pt-BR.md">🇧🇷 Português</a>
</p>

# 🗺️ Board — Public Roadmap

> A study project built to deepen knowledge of **Next.js**, exploring its most modern features (App Router, React Server Components, Partial Pre-Rendering, Parallel/Intercepting Routes) together with a modern stack of tools from the React/TypeScript ecosystem.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-4-E36002?logo=hono&logoColor=white)
![Drizzle](https://img.shields.io/badge/Drizzle-ORM-C5F74F?logo=drizzle&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-in%20development-yellow)

---

## 📖 About the project

**Board** is a complete **public roadmap** application, where authenticated users can view, like, and comment on roadmap items organized by status (e.g. Backlog, To-do, In Progress, Done).

The project explores the most modern features of the **Next.js** App Router: social authentication, Server and Client Components working together, Partial Pre-Rendering combined with Suspense, optimistic interactions via React Query (likes and comments), Parallel Routes, Intercepting Routes for modals, and automatic Open Graph image generation.

> ⚠️ This is a **study project (non-commercial)**, built with the purpose of practicing and learning modern **Next.js** features and its surrounding ecosystem (Server Actions, Drizzle ORM, Hono, better-auth, React Query, and more) hands-on.

---

## 🖼️ Screenshots

**Roadmap board** — items organized by status columns (Backlog, To-do, In Progress, Done), each with likes and comment counts.

![Board view](./screenshots/board-view.png)

**Issue detail via Intercepting Route** — clicking a card opens the details in a modal on top of the board, preserving navigation context, with optimistic likes and a comment thread.

![Issue detail modal](./screenshots/issue-modal.png)

**Issue detail as a dedicated page** — navigating directly to an issue (e.g. via a shared link) renders the full page instead of the modal.

![Issue detail page](./screenshots/issue-page.png)

---

## ✨ Features

- 🔐 **Social authentication** via [better-auth](https://www.better-auth.com/)
- 🗂️ **Public roadmap** with items organized by status/column
- 👍 **Likes** on roadmap items with **optimistic UI** (React Query)
- 💬 **Comments** with optimistic UI updates
- 🪟 **Modals via Intercepting Routes** for item details without losing navigation context
- 🧩 **Parallel Routes** for composing independent layouts on the same screen
- ⚡ **Partial Pre-Rendering (PPR)** combined with **Suspense** for static and dynamic content on the same page
- 🖼️ **Automatic Open Graph image generation** for sharing
- 🔎 **URL-synced state** (filters, search) with nuqs
- 📄 **Interactive API documentation** with Scalar (based on OpenAPI)
- 🌱 **Fake data seeding** for local development

---

## 🛠️ Tech stack

### Core

- **[Next.js 16](https://nextjs.org/)** — React framework with App Router
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — static typing
- **[React Compiler](https://react.dev/learn/react-compiler)** — automatic render optimizations

### API / Backend

- **[Hono](https://hono.dev/)** — lightweight web framework for the API routes
- **[@hono/zod-openapi](https://github.com/honojs/middleware/tree/main/packages/zod-openapi)** — typed routes with Zod validation and OpenAPI spec
- **[@scalar/hono-api-reference](https://github.com/scalar/scalar)** — interactive API documentation
- **[better-auth](https://www.better-auth.com/)** — authentication (including social login)

### Database

- **[Drizzle ORM](https://orm.drizzle.team/)** — TypeScript-first ORM
- **[drizzle-kit](https://orm.drizzle.team/kit-docs/overview)** — migrations and schema management
- **[postgres](https://github.com/porsager/postgres)** — PostgreSQL driver
- **[@faker-js/faker](https://fakerjs.dev/)** — fake data generation for seeding

### Data and state

- **[TanStack Query (React Query)](https://tanstack.com/query)** — data caching and synchronization, with optimistic updates
- **[nuqs](https://nuqs.47ng.com/)** — URL-synced state

### UI / Styling

- **[Tailwind CSS 4](https://tailwindcss.com/)** — utility-first styling
- **[Radix UI](https://www.radix-ui.com/)** — accessible, unstyled components (Dialog)
- **[lucide-react](https://lucide.dev/)** — icons
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — CSS class composition
- **[tailwind-scrollbar](https://www.npmjs.com/package/tailwind-scrollbar)** — scrollbar styling

### Forms and validation

- **[React Hook Form](https://react-hook-form.com/)** — form state management
- **[Zod](https://zod.dev/)** — schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** — RHF + Zod integration

### Utilities

- **[date-fns](https://date-fns.org/)** — date manipulation
- **[server-only](https://www.npmjs.com/package/server-only)** — ensures sensitive modules only run on the server

### Code quality

- **ESLint** + **eslint-config-next** — code linting
- **tsx** — running TypeScript scripts (e.g. database seed)

---

## 🚀 Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [PostgreSQL](https://www.postgresql.org/) installed and running
- Your package manager of choice (`npm`, `yarn`, or `pnpm`)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/board.git
cd board

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# edit .env with your PostgreSQL connection string and social auth credentials

# 4. Generate and run database migrations
npm run db:generate
npm run db:migrate

# 5. (Optional) Seed the database with fake data
npm run db:seed

# 6. Start the development server
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script                | Description                                              |
| --------------------- | -------------------------------------------------------- |
| `npm run dev`         | Starts the development server                            |
| `npm run build`       | Creates the production build                             |
| `npm run start`       | Starts the production server                             |
| `npm run lint`        | Runs ESLint                                              |
| `npm run db:generate` | Generates migrations from the Drizzle schema             |
| `npm run db:migrate`  | Applies pending migrations to the database               |
| `npm run db:push`     | Syncs the schema directly to the database (no migration) |
| `npm run db:studio`   | Opens Drizzle Studio to view/edit the database           |
| `npm run db:seed`     | Seeds the database with fake data (via faker)            |

---

## 🎯 Learning goals

This project was built to consolidate hands-on knowledge of concepts such as:

- Next.js **App Router** structure and conventions
- **Social authentication** with better-auth
- **Server and Client Components** working together
- **Partial Pre-Rendering (PPR)** and the **Suspense API** for hybrid pages (static + dynamic)
- **React Query** for optimistic UI interactions (likes and comments)
- **Parallel Routes** for composing multiple independent sections
- **Intercepting Routes** for modals that preserve navigation context
- **Automatic Open Graph image generation**
- Building a typed API with **Hono** + **Zod** + **OpenAPI** documentation
- Database modeling and migrations with **Drizzle ORM**
- Using the **React Compiler** for automatic optimizations

---

## 📄 License

This project is licensed under [MIT](LICENSE) and is for educational purposes only.

---

<p align="center">Built for learning purposes</p>
