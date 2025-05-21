

---

```md
# MERN Stack Task Manager

A full-stack **Task Manager Application** built using the **MERN stack (MongoDB, Express.js, React, Node.js)**. It features **JWT-based authentication**, **role-based access control (User/Admin)**, and centralized state management with **Redux Toolkit**. Users can create and manage their personal tasks, while admins have access to manage all users' tasks.

---

## 🌐 Live Demo

> 🚀 **Deployed link coming soon...**

---

## 🛠 Tech Stack

### 🔹 Frontend
- **React.js** – UI development using functional components and hooks  
- **Redux Toolkit** – State management  
- **React Router DOM** – Client-side routing  
- **Axios** – HTTP requests  
- **Material UI** – UI components and design system  

### 🔹 Backend
- **Node.js** + **Express.js** – REST API and server  
- **MongoDB** – NoSQL database  
- **Mongoose** – Object Data Modeling (ODM)  
- **JWT** – Secure token-based authentication  
- **bcrypt.js** – Password encryption  
- **CORS** – Cross-origin request handling  
- **dotenv** – Environment variable management  

---

## ✨ Features

### 👤 User Authentication
- Register and login with secure credentials  
- JWT-based authentication with persistent login  
- Passwords hashed using bcrypt

### 📝 Task Management
- Create, edit, and delete tasks  
- Tasks include title, description, due date, category, and completion status  
- Regular users see only their own tasks

### 🛡 Admin Features
- View all users' tasks  
- Filter tasks by category or due date  
- Mark any task as complete/incomplete  
- Delete any user's task

### 🔒 Role-Based Access Control
- **Users** can manage only their own tasks  
- **Admins** can view and control all tasks but **cannot** create new ones

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
│   ├── features/         # Redux slices
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── README.md

````

---

## ⚙️ Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MSaifKhan01/Task-Manger-Assignment.git
cd Task-Manger-Assignment
````

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

> Backend runs at `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

> Frontend runs at `http://localhost:3000`

---

## 🔐 Default Roles

* **User** – Can register, login, and manage their own tasks
* **Admin** – Can view and manage all tasks, but cannot create tasks

---

## 📌 Usage Guide

1. Register a user or login with valid credentials
2. Regular users can create, update, and delete their tasks
3. Admin users can view and manage all users’ tasks

---

## 📝 License

This project is licensed under the **MIT License**.

```


