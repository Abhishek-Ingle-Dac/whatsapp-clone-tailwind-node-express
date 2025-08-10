# 📱 WhatsApp Clone – Tailwind + Node.js + Express + MongoDB

A full-stack WhatsApp-style chat application built with **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**.  
Responsive UI for both desktop and mobile devices, with a backend API for chats and messages.

---

## 🚀 Features
- **Real-time** chat interface design (UI-ready for WebSocket integration)
- **Mobile-friendly** responsive layout with Tailwind CSS
- **Backend API** for chats and messages
- Modular **MVC structure** for maintainability
- **CORS enabled** for cross-origin requests
- Environment variable configuration

---

## 📂 Project Structure
```
whatsapp-clone-tailwind-node-express/
│
├── backend/
│   ├── server.js           # Express app entry point
│   ├── config/             # DB config
│   ├── controllers/        # Chat controllers
│   ├── routes/             # API routes
│   ├── services/           # Business logic services
│   └── package.json
│
├── frontend/
│   ├── public/             # Static files
│   ├── src/                # Frontend code
│   ├── tailwind.config.js  # Tailwind config
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json
```

---

## 🛠️ Tech Stack
### **Frontend**
- Tailwind CSS
- HTML / Vanilla JS (can be extended to React)
  
### **Backend**
- Node.js + Express
- MongoDB + Mongoose
- dotenv
- morgan
- cors

---

## 📦 Installation & Setup
### 1️⃣ Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/whatsapp-clone-tailwind-node-express.git
cd whatsapp-clone-tailwind-node-express
```

### 2️⃣ Install dependencies  
**Backend**
```bash
cd backend
npm install
```
**Frontend**
```bash
cd ../frontend
npm install
```

### 3️⃣ Set up environment variables  
Create `.env` in `backend/`:
```
PORT=2000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Start the development servers
**Backend**
```bash
cd backend
npm start
```
**Frontend**
```bash
cd ../frontend
npm run dev
```

---

## 🌍 Deployment
- **Backend** → Deploy to **Heroku**
- **Frontend** → Deploy to **Heroku**
- Make sure `node_modules` is ignored in `.gitignore`

---

## 📜 License
MIT License © 2025 [Your Name]
