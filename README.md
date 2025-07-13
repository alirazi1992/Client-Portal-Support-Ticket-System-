# 📂 Client Portal (Support Ticket System)

A multilangual support management system built with **Nestjs**, featuring role-based dashboards for users and engineers. This checkpoint includes working routing, ticket deatil views, notiifcations, 
and responsive layouts. 

---

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
  ### 🔐 Login Page:

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

----

## 🚀 Features Implemented (Checkpoint 2)

- ✅ **Next.js App Router structer** with clean foldering
- ✅ **Engineering Dashboard** with dynamic routing (`/engineer/[name]`)
- ✅ **Ticket Detail Page**: `/engineer/[name]/ticket/[ticketId]`
  - View ticket title. status, clinet message
  - Download atatchment (static/dummy)
  - CHnage ticket status
  - Submit engineer response
- ✅ **Reusable Layout** with Sidebar + Header
- ✅ **Toast notifications** using `react-toastify`
- ✅ **User dropdown and notification icon** (with UI interactions)
- ✅ Fully **responsive design**
- ✅ Default **RTL (Farsi)**  layout
- ✅ Improve styling via **Tailwind CSS**
- ✅ Development preview overlay disabled on build

----  

## 📁 Folder Structer Highlights 

```
/src
  /app
    /engineer/[name]/page.tsx       --> Engineer dashboard
    /engineer/[name]/ticket/[ticketId]/page.tsx  --> Ticket detail
  /components
    Header.tsx, Sidebar.tsx, ...
  /context
    AuthProvider.tsx
  /styles
    globals.css
```

---

## 🛠️ Tech Stack 

- **Framwork**: [Next.js 14+](https://nexts.org)
- **Styling**: Tailwind CSS
- **Rouiting**: App Router (`app/`)
- **Icon**: react-icons
- **Authentican Context**: Simple AuthProvider (mockup)

---

## 📦 Getting Started 

```bash
# 1.Clone the repo
git clone https://github.com/alirazi1992/clienyt-protal-next.git

# 2. Install dependecies
npm install

# 3. Run in development
npm run dev

# 4. Build for production
npm run build && npm start
```

### 🌓  Optioal Features to Add Next 

- 💾 Save engineer responses to backend
- 📁 Upload/ down;oad real attachments
- 🌗 Light/Dark mode toggle
- 🌍 English-Farsi multilangual toggle
- 🔄 Rael-time ticket updates (via WebSocket)

----

## 📌 Notes 

- This peoject is in **checkpoint phase**_backend integration and real authentication are panding.
- `TurboPack Dev Tools (bottom-left overaly) only appears in development and won't show in production.
- Designed with ** Farsi (RTL)** layout as the primary language. English support coming in next phase.  
  
