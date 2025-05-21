


# 📋 MERN Stack Task Manager



A full-featured Task Management application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring JWT authentication, role-based access control, and Redux Toolkit for state management.

## ✨ Key Features

### 🔐 Authentication
- Secure user registration and login
- JWT token-based authentication
- Password hashing with bcrypt.js
- Persistent login session

### 📝 Task Management
- Create, read, update, and delete tasks
- Task attributes:
  - Title & description
  - Due date with reminders
  - Priority levels
  - Completion status
- Personalized task dashboard

### 👥 Role-Based Access
- **User Role:**
  - Manage own tasks
  - View personal task statistics
- **Admin Role:**
  - View all users' tasks
  - Filter and search across all tasks
  - Manage task statuses

### 🚀 Technical Highlights
- Redux Toolkit for efficient state management
- Responsive UI with Material-UI components
- RESTful API design
- MongoDB Atlas for cloud database
- Secure API endpoints with middleware

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React.js 18 | Frontend framework |
| Redux Toolkit | State management |
| React Router v6 | Navigation |
| Axios | HTTP client |
| Material-UI | UI components |
| Date-fns | Date handling |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JWT | Authentication |
| Bcrypt.js | Password hashing |
| CORS | Cross-origin support |
| Dotenv | Environment variables |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MSaifKhan01/Task-Manger-Assignment.git
   cd Task-Manger-Assignment
   ```

2. **Set up backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env with your credentials
   npm run dev
   ```

3. **Set up frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

## 📂 Project Structure

```
task-manager/
├── backend/
│   ├── config/         # Database and auth config
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Authentication middleware
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── server.js       # Express server
│
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── api/        # API service layer
│   │   ├── app/        # Redux store setup
│   │   ├── components/ # Reusable components
│   │   ├── features/   # Redux slices
│   │   ├── pages/      # Application pages
│   │   ├── styles/     # Global styles
│   │   ├── App.jsx     # Main component
│   │   └── main.jsx    # Entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🌟 Usage Guide

1. **Registration**
   - Navigate to `/register`
   - Fill in user details
   - Submit to create account

2. **Login**
   - Access `/login`
   - Enter credentials
   - You'll be redirected to dashboard

3. **Task Management**
   - Click "Add Task" to create new
   - Edit existing tasks with pencil icon
   - Mark complete with checkbox
   - Delete with trash icon

4. **Admin Features**
   - View all tasks in admin dashboard
   - Filter by user or status
   - Manage any task

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
