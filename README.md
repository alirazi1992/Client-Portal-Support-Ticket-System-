# Client Portal (Support Ticket System)

#### 📌 Checkpoint 1
**🗓️ Date**: 2025-07-12
**🛠️ Phase**: Initial Setup + Core Pages + Clean Architecture (Next.js App Router)


----
### ✅ What Has Been Completed
**🔧 Project Setup**
  
  - Created a clean `Next.js` app using App Router

  - Added TypeScript, Tailwind CSS, and Toastify

  - Configured absolute imports with alias `@/*`

----
### 📁 File Structure (Clean Architecture)

src/

├─ app/

│  ├─ layout.tsx          # Main layout (Header + Sidebar)

│  ├─ page.tsx            # Dashboard (default)

│  ├─ login/page.tsx      # Login screen

│  ├─ tickets/page.tsx    # Submit new support ticket

├─ components/            # UI components (Sidebar, Header, etc.)

├─ context/               # AuthProvider and context logic

├─ hooks/                 # Custom hooks (e.g., useAuth)

├─ lib/                   # firebase.ts and helpers (soon)

├─ types/                 # TypeScript interfaces (coming soon)

----

## 🧱 Functional Pages Implemented
  ###🔐 Login Page:

    - Fully functional with form validation

    - Saves mock login info in localStorage for now

  ### 📨 Submit Ticket Page (`/tickets`):

    - Form for title, category, description, and file attachment

    - File input UI with preview of selected filename

    - `toast` notification on submission

    - Currently logs data to console — ready to be connected to Firestore

  ### 🧭 Layout & Routing:

    - Responsive layout using Tailwind

    - RTL + Persian-ready setup

    - Sidebar and header integrated globally in layout

    - AuthProvider wrapped around entire app

    ----

## 🔮 Next Steps

  🔄 Create `/status` page (ticket list by user or engineer)

  🔐 Implement full Firebase Auth

  ☁️ Connect to Firebase Firestore & Storage

  ✅ Add route protection (redirect unauthenticated users)

🚀 Deploy on Vercel or custom domain

-----

## 📦 Tech Stack

| Feature                        |	Technology              |
|--------------------------------|--------------------------|
| Framework                      |	Next.js (App Router)    |
| Styling                        |	Tailwind CSS            |
| State/Auth	                   | React Context API        |
| Notifications	                 | React Toastify           |
| Auth & Backend                 |	Firebase (planned)      |
| Language	                     | TypeScript + Farsi       |


## 🧠 Developer Note
This is a **Single Page Application (SPA)** feel, but architected cleanly in **Next.js** for future scalability, SEO, SSR, and SSR-to-CSR fallback transitions.

----

## 🔗 Status: ✅ In Progress
Next session, we continue from here.
