// pages/TasksWrapper.js
import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./TaskList";
import AdminTaskList from "./admin/AdminTaskList";

const TasksWrapper = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <div>Loading...</div>;

  return user.user.role === "admin" ? <AdminTaskList /> : <TaskList />;
};

export default TasksWrapper;

