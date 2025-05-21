Here's a complete `README.md` for your **MERN Stack Task Manager** project, covering:

* Overview
* Tech Stack
* Features
* Setup Instructions
* Usage Guide
* Folder Structure
* License (optional)

You can copy-paste this into your project root:

---

```md
# MERN Stack Task Manager

A full-stack **Task Manager App** built using the **MERN stack (MongoDB, Express.js, React, Node.js)** with **JWT Authentication**, **Role-Based Access (User/Admin)**, and **Redux Toolkit**. Users can create, update, and manage their tasks, while admins can view and control all tasks.

---

## 🌐 Live Demo

> 🚀 _Deployed link coming soon..._

---

## 🛠 Tech Stack

### 🔹 Frontend
- **React.js** (with Hooks)
- **Redux Toolkit** (State Management)
- **React Router DOM** (Routing)
- **Axios** (API calls)
- **Material UI** (UI components & theming)

### 🔹 Backend
- **Node.js** + **Express.js**
- **MongoDB** (NoSQL database)
- **Mongoose** (ODM for MongoDB)
- **JWT (JSON Web Tokens)** – Authentication
- **bcrypt.js** – Password hashing
- **CORS** – Cross-origin support
- **dotenv** – Environment config

---

## ✨ Features

### 👤 User Authentication
- Signup & Login with JWT
- Passwords are securely hashed
- Persistent login via tokens

### 📝 Task Management
- Add, update, delete, and view tasks
- Tasks include title, description, due date, category, and completion status
- Users see only their tasks

### 🛡 Admin Features
- View all users' tasks
- Filter tasks by category or due date
- Mark any task complete/incomplete
- Delete any task

### 🔒 Role-Based Access
- Only users can create/edit their tasks
- Admins can only view/manage, not create

---

## 📁 Folder Structure

```

├── backend
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend
│   ├── components/
│   ├── features/ (Redux slices)
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── README.md

````

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/MSaifKhan01/Task-Manger-Assignment.git
cd Task-Manger-Assignment
````

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Then run:

```bash
npm run dev
```

> Server runs at `http://localhost:5000`

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Then start:

```bash
npm run dev
```

> React app runs at `http://localhost:3000`

---

## 🔐 Default Roles

* **User** can create/manage their own tasks
* **Admin** can view/manage all tasks, but cannot create tasks

---

## 📌 Usage

1. Register a user via Signup
2. Login with credentials
3. Create and manage tasks
4. Admin can log in and view/manage all tasks



## 📝 License

This project is licensed under the MIT License.

---
