

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import TaskForm from "./pages/TaskForm";
import TaskDetails from "./pages/TaskDetails";
import TasksWrapper from "./pages/TasksWrapper"; 
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/tasks" /> : <Home />} />

        {/* Auth routes */}
        <Route path="/login" element={user ? <Navigate to="/tasks" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/login" /> : <SignUp />} />

        {/* Tasks route (role-based view) */}
        <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <TasksWrapper />
            </PrivateRoute>
          }
        />

        {/* Only regular users can create tasks */}
        <Route
          path="/tasks/new"
          element={
            <PrivateRoute>
              {user && user.role === "admin"
 ? <Navigate to="/tasks" /> : <TaskForm />}
            </PrivateRoute>
          }
        />

        {/* Task details (available to both) */}
        <Route
          path="/tasks/:id"
          element={
            <PrivateRoute>
              <TaskDetails />
            </PrivateRoute>
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
