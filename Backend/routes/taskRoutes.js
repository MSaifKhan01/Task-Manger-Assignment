const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  filterTasks,
  getAllTasksAdmin,
  deleteTaskAdmin
} = require("../controllers/taskController");

const { Auth } = require("../middlewares/auth");
const RoleBase = require("../middlewares/roleBase");


const taskRouter = express.Router();

// Users Task Routes
taskRouter.post("/", Auth, createTask);
taskRouter.get("/", Auth, getTasks);
taskRouter.get("/filter", Auth, filterTasks);
taskRouter.get("/:id", Auth, getTaskById);
taskRouter.patch("/:id", Auth, updateTask);
taskRouter.delete("/:id", Auth, deleteTask);

// Admins Task Routes
taskRouter.get("/admin/all", Auth, RoleBase(["admin"]), getAllTasksAdmin);
taskRouter.delete("/admin/:id", Auth, RoleBase(["admin"]), deleteTaskAdmin);

module.exports = taskRouter;
