
# 🚀 MERN Stack Task Manager



A production-ready task management application built with the MERN stack featuring secure authentication, role-based access control, and efficient state management.

## 🌟 Key Features

### 🔒 Authentication System
- Secure JWT-based authentication
- Password encryption with bcrypt.js
- Persistent login sessions
- Protected API routes

### 📋 Task Management
- Create, read, update, delete tasks
- Task properties:
  - Title 
  - Due dates 
  - Completion status
- Personalized task dashboard

### 👨‍💻 Admin Privileges
- View all users' tasks
- Advanced filtering (by category, daDue date)
- Bulk operations
- System analytics dashboard

## 🛠 Technology Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 18+ |
| Redux Toolkit | State Management | 1.9+ |
| React Router | Navigation | 6+ |
| Axios | HTTP Client | 1.3+ |
| Material UI | UI Components | 5+ |
| Date-fns | Date Handling | 2+ |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| Node.js | Runtime | 16+ |
| Express | Web Framework | 4+ |
| MongoDB | Database | 6+ |
| Mongoose | ODM | 7+ |
| JWT | Authentication | 8+ |
| Bcrypt | Password Hashing | 5+ |

## 🚀 Installation Guide

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (Atlas or local)
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/MSaifKhan01/Task-Manger-Assignment.git
   cd Task-Manger-Assignment
   ```

2. **Configure Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your credentials
   npm run dev
   ```

3. **Configure Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Access the Application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000`

## 📂 Project Structure

```
MERN-Task-Manager/
├── backend/
│   ├── config/         # Configuration Db
│   ├── controllers/    # Business logic
│   ├── middleware/     # middleware
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API endpoints
│   └── index.js       # Express server
│
├── frontend/
│   ├── public/         # Static assets
│   └── src/
│       ├── app/        # Redux store
│       ├── components/ # Reusable UI
│       ├── features/   # Redux slices
│       ├── pages/      # Application views
│       ├── utils/ 
│       ├── App.js     # Root component
│       └── index.js   # Entry point
│
├── .env.example        # Environment template
└── README.md           # Project documentation
```

## 📝 Usage Instructions

## 👨‍💻 User Journey

### 🏠 Home Page
- Landing page with two options:
  - **Login** (for existing users)
  - **Sign Up** (for new users)

### 🔐 Authentication Flow
1. **New Users**:
   - Click "Sign Up" on home page
   - Fill registration form (name, email, password)
   - Redirected to Login

2. **Existing Users**:
   - Click "Login" on home page
   - Enter credentials (email & password)
   - Redirected to appropriate dashboard based on role:
     - User Dashboard (for regular users)
     - Admin Dashboard (for admin users)

### 📋 User Dashboard (Regular Users)
- View all personal tasks
- **Task Actions**:
  - ➕ Add new tasks
  - ✅ Mark tasks complete (checkbox)
  - 🗑️ Delete tasks (trash icon)
  -    Logout option
- Filter tasks by:
  - category 
  - Due date
 


### 👔 Admin Dashboard
- View all tasks from all users
- **Administrative Actions**:
  - 🔍 Filter tasks by:
  
    - Category
    -  Due date
  - ⚙️ Manage any task:
    - Mark complete/incomplete
    - Delete tasks
- **System Tools**:
  - Logout option

### 🔄 Common Features
- Both roles can:
  - filter tasks by different criteria
  - Securely logout from system

## 🔒 Security Features
- Role-based access control
- Password hashing with salt
- JWT token expiration
- Protected API endpoints
- Secure HTTP headers

## 📜 License
MIT License - See [LICENSE](LICENSE) for details.

