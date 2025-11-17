
# TaskFlow — Minimal Task Manager Built with Next.js + Redux

TaskFlow is a modern, minimal, full-stack task & project management app built to learn and demonstrate real-world patterns using **Next.js, Redux Toolkit, Prisma, NextAuth, PostgreSQL, shadcn/ui**, and **Drag & Drop**.

---

## 🚀 Features

### Core
- Create, edit, delete tasks
- Categories / tags
- Project-based organization (Projects → Tasks)
- Search + filters
- Offline support using **Redux Persist**

### Advanced Features
- Drag & drop using **@hello-pangea/dnd**
- Global state using **Redux Toolkit**
- Authentication using **NextAuth | Oauth**
- Database using **PostgreSQL + Prisma**
- Analytics dashboard (task stats, completion %, graphs)
- Fully responsive UI using **shadcn/ui**
- Auto-sync tasks to DB after login

---

## 🏗️ Tech Stack

### Frontend
- Next.js 16 (App Router)
- Redux Toolkit
- shadcn/ui
- TailwindCSS
- @hello-pangea/dnd

### Backend
- Next.js API Routes
- NextAuth
- Prisma ORM
- PostgreSQL (Neon / PlanetScale)

### Dev Experience
- TypeScript
- ESLint + Prettier

---
# 📂 Project Folder Structure

```text
.
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── analytics/
│   │   └── projects/
│   │       ├── [id]/
│   │       └── new/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── TaskInput/
│   │   └── index.tsx
│   ├── TaskList/
│   │   ├── index.tsx
│   │   └── TaskItem.tsx
│   ├── ProjectSidebar/
│   │   └── index.tsx
│   └── Layout/
│       ├── Header.tsx
│       └── Sidebar.tsx
│
├── store/
│   ├── slices/
│   │   ├── tasksSlice.ts
│   │   ├── projectsSlice.ts
│   │   └── authSlice.ts
│   ├── store.ts
│   └── persistConfig.ts
│
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── analytics.ts
│   └── helpers.ts
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── cover.png
│
├── .env
├── next.config.js
├── package.json
└── README.md

---

## 🔧 Environment Variables

Create a `.env` file:

```

DATABASE_URL=""
NEXTAUTH_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""


## 🗄️ Database Schema (Prisma)

```prisma
model User {
  id       String   @id @default(cuid())
  email    String   @unique
  projects Project[]
}

model Project {
  id       String  @id @default(cuid())
  name     String
  userId   String
  tasks    Task[]
}

model Task {
  id        String  @id @default(cuid())
  title     String
  category  String
  completed Boolean @default(false)
  projectId String
}
````

---

## 📊 Analytics Dashboard Includes

* Total tasks
* Completed tasks
* Completion percentage
* Tasks per category
* Tasks per project
* Graphs using Recharts

---

## 🛠️ Running Locally

Install dependencies:

```
npm install
```

Run Prisma setup:

```
npx prisma migrate dev
```

Run development server:

```
npm run dev
```

---
```
