
# 📚 StudyFlow – Intelligent Self-Study Platform

An intelligent self-learning platform built using the MERN stack, designed to streamline personal study workflows with the power of AI. Users can manage subjects, take rich text notes, track study progress, and soon integrate Pomodoro timers, GPT-powered quiz generation, voice-to-text, and more.



---

## 🚀 Features Completed (Up to Day 5)

### ✅ Authentication

* Register and login pages (React + Zustand)
* Auth token handling via JWT
* Protected routes using `ProtectedRoute` and Zustand-based auth store
* Auth state persists using `zustand/middleware` + localStorage

### ✅ Dashboard

* After login, users are redirected to a dashboard
* Clean layout with a responsive sidebar (Dashboard, Notes, Pomodoro, Quiz, etc.)
* Dashboard components:

  * 📌 `DashboardHeader`
  * 📌 `DashboardCards`
  * 📌 `SubjectForm` – add new subjects
  * 📌 `SubjectGrid` – shows all created subjects
  * 📌 `RecentlyEdited` – static placeholder for now

### ✅ Subjects

* User can create subjects via `SubjectForm`
* Subjects are shown in a grid layout
* Each subject is clickable → navigates to `/subject/:id`
* Dynamic routing and note filtering per subject works
* State managed via Zustand

### ✅ Notes System

* Rich text notes via `NoteForm`
* Notes shown in `NoteGrid`
* Notes stored per subject (`/api/notes/:subjectId`)
* API: Create, Read, Delete notes linked to subjects
* **Day 5 Update**:

  * Linked `NoteForm` & `NoteGrid` to pass `subjectId` props
  * `noteStore` updated with `fetchNotesBySubject`, `createNoteForSubject`, and `deleteNote` methods
  * `SubjectPage` now fetches & displays only that subject’s notes

### ✅ Pomodoro + Task Scheduling (Day 5)

* New `/pomodoro` route added and linked from sidebar
* Components:

  * ⏳ `PomodoroTimer` – work/break timer with Zustand-managed state
  * 📝 `TaskInput` – add tasks
  * 📋 `TaskList` – view and manage tasks
* Timer State in Zustand:

  * Session mode (`work` or `break`)
  * Countdown time left
  * Start/stop functionality
* Task State in Zustand:

  * Add and delete tasks
  * Tasks stored in memory (will connect to backend later)

---

### ⚙️ Folder Structure (Frontend)

```
frontend/
├── components/
│   ├── dashboard/
│   ├── notes/
│   ├── pomodoro/
│   ├── ui/
│   ├── Sidebar.jsx
│   ├── ProtectedRoute.jsx
│   └── Layout.jsx
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── SubjectPage.jsx
│   └── PomodoroPage.jsx
├── store/
│   ├── authStore.js
│   ├── subjectStore.js
│   ├── noteStore.js
│   └── pomodoroStore.js
├── App.jsx
└── main.jsx
```

---



---

## 📦 Tech Stack

| Layer       | Technology                              |
|-------------|------------------------------------------|
| Frontend    | React 19, Vite, TailwindCSS, Shadcn UI   |
| State       | Zustand (with `persist`)                 |
| Backend     | Node.js, Express.js, MongoDB, Mongoose   |
| Auth        | JWT, Zustand, Protected Routes           |
| Notes       | React + Zustand + REST API               |
| Styling     | TailwindCSS + Shadcn UI                  |
| Routing     | React Router v6                          |

---

## 🔐 API Routes (Backend)

| Route                     | Method | Description               |
|---------------------------|--------|---------------------------|
| `/api/auth/register`      | POST   | Register a new user       |
| `/api/auth/login`         | POST   | Login and receive token   |
| `/api/subjects/`          | POST   | Create subject            |
| `/api/subjects/`          | GET    | Get all user subjects     |
| `/api/notes/:subjectId`   | POST   | Create note for subject   |
| `/api/notes/:subjectId`   | GET    | Get notes for subject     |

---

## 🧠 Coming Up ( Day 6+)

| Day  | Feature                                | Description                             |
|------|----------------------------------------|-----------------------------------------|
| 6    | Dashboard Charts + Overview            | Recharts for study progress             |
| 7    | GPT Quiz Generation                    | Generate quiz from notes via GPT        |
| 8    | Quiz Answering + Evaluation            | Evaluate quiz answers using AI          |
| 9    | Study Guide Generator + AI Suggestions | Personalized study plans via GPT        |
| 10   | Voice-to-Text (Whisper API)            | Record audio and transcribe to notes    |
| 11   | RAG with LangChain + Pinecone          | Vector-based AI assistant               |
| 12   | Smart Reminders                        | Cron jobs for reminders                 |
| 13   | Review Tracker + Weekly Reports        | Track past learning, upcoming tasks     |
| 14   | UI Polish (Dark Mode + Animation)      | Framer Motion + Dark Mode toggle        |
| 15   | Testing + Deployment (Vercel + Render) | CI/CD + Final testing                   |

---

## 📸 Screenshots

Coming soon — when visual polish is added on Day 14.

---

## 🛠️ Local Development

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/studyflow-intelligent-platform.git
cd studyflow-intelligent-platform
````

### 2. Install dependencies

```bash
# frontend
cd frontend
npm install

# backend
cd ../backend
npm install
```

### 3. Run frontend and backend

```bash
# backend
cd backend
npm run dev

# frontend
cd ../frontend
npm run dev
```

Make sure your MongoDB is running.

---

## 🌐 Deployment Plan

* Frontend → Vercel
* Backend → Render 
* CI/CD → GitHub Actions (Day 15)

---

## 👨‍💻 Author

**Prachi** – Junior Developer building a full-stack AI-powered self-learning system step-by-step with guidance and mentorship.

---

## 📄 License


