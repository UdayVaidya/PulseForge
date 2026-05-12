# PulseForge 🚀
**AI-Powered Incident Response & Status Management Platform**

PulseForge is a modern, scalable, and intelligent incident management platform designed to help organizations efficiently detect, manage, communicate, and resolve operational incidents in real-time. It combines real-time collaboration, public service transparency, and AI-assisted operational intelligence to serve as a centralized operational command center.

---

## ✨ Key Features

- **Real-Time Incident Management:** Centralized system for creating, updating, and resolving incidents with live timeline updates powered by WebSockets.
- **AI-Powered Intelligence:** Integrated with Gemini API to automatically generate incident summaries, suggest root causes, draft postmortem reports, and analyze logs.
- **Public Status Pages:** Out-of-the-box public-facing dashboards displaying service health, uptime percentages, active incidents, and maintenance schedules.
- **Monitoring & Analytics:** Enterprise-grade dashboards visualizing CPU/Memory usage, API latency, incident frequency, and MTTR (Mean Time To Resolve) metrics.
- **Role-Based Access Control (RBAC):** Secure authentication system supporting Admin, Engineer, and Viewer roles.
- **Omnichannel Notifications:** Alerts delivered via Email, Discord Webhooks, Slack, and real-time browser push notifications.

---

## 🛠️ Technology Stack

**Frontend**
- React.js & Vite
- Tailwind CSS & shadcn/ui
- Framer Motion (Animations)
- React Router & Axios

**Backend**
- Node.js & Express.js
- Socket.io (Real-time Communication)
- MongoDB & Mongoose ODM
- Gemini API (AI Integration)

---

## 🏗️ System Architecture

PulseForge follows a modular MERN architecture:
- **Frontend Layer:** Renders the UI, manages dashboards, and handles live WebSocket updates.
- **Backend Layer:** REST API handling, authentication, business logic, and database communication.
- **Real-Time Layer:** Synchronizes incident timelines, live updates, and notifications across clients.
- **AI Layer:** Analyzes logs and incidents to provide automated summaries, postmortems, and root-cause suggestions.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account (or local MongoDB instance)
- Gemini API Key

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/PulseForge.git
   cd PulseForge
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install client and server dependencies**
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

4. **Environment Variables**
   Create a `.env` file in the `server` directory and add the necessary configuration:
   ```env
   PORT=3000
   NODE_ENV=development
   MONGO_URI=your_mongodb_connection_string
   CLIENT_URL=http://localhost:5173
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=7d
   GEMINI_API_KEY=your_gemini_api_key
   ```

5. **Run the application**
   From the root directory, run both the frontend and backend concurrently:
   ```bash
   npm run dev
   ```
   - Client will be available at `http://localhost:5173`
   - Server will be available at `http://localhost:3000`

---

## 🛡️ Security & Reliability
- Secure password hashing with bcrypt
- Stateless authentication using JWT
- Rate limiting to prevent brute-force attacks
- Input sanitization against XSS and NoSQL injections
- Designed for high availability and scalable cloud deployments

---

## 📄 Documentation Reference
The architecture, features, and requirements of PulseForge are based on the accompanying **Product Requirements Document (PRD)** and **Software Requirements Specification (SRS)** PDFs located in the `documents/` folder.
