const { taskModel } = require("../models/Task");
const { userModel } = require("../models/user");

// Create Task (User)
exports.createTask = async (req, res) => {
  const { title, category, dueDate } = req.body;

  try {
    if (!title) {
        return res.status(400).send({ message: "Title is required" });
    }

    const duplicate = await taskModel.findOne({ title, userID: req.userID });
    if (duplicate) {
        return res.status(409).send({ message: "Duplicate task title not allowed" });
    }
    

    const task = new taskModel({ title, category, dueDate, userID: req.userID });
    await task.save();
    res.status(201).send({ message: "Task created", task });
  } catch (err) {
    res.status(500).send({ message: "Failed to create task", error: err.message });
  }
};

// Get All Tasks (User)
exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({ userID: req.userID });
    res.status(200).send(tasks);
  } catch {
    res.status(500).send({ message: "Error fetching tasks" });
  }
};

// Get Single Task by ID
exports.getTaskById = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await taskModel.findById(taskId);
    if (!task) {
        return res.status(404).send({ message: "Task not found" });
    }

    if (String(task.userID) !== req.userID && req.userRole !== "admin") {
      return res.status(403).send({ message: "Unauthorized access to task" });
    }

    res.status(200).send(task);
  } catch {
    res.status(500).send({ message: "Failed to fetch task" });
  }
};

//  Update Task(User)
exports.updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, category, dueDate, completed } = req.body;

  try {
    const task = await taskModel.findById(taskId);
    if (!task) {
        return res.status(404).send({ message: "Task not found" });
    }

 

if (title) {
      task.title = title;
    }

    if (category) {
      task.category = category;
    }

    if (dueDate) {
      task.dueDate = dueDate;
    }

    if (typeof completed === "boolean") {
      task.completed = completed;
    }

    await task.save();
    res.status(200).send({ message: "Task updated", task });
  } catch {
    res.status(500).send({ message: "Failed to update task" });
  }
};

// Delete Task(User)
exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await taskModel.findById(taskId);
    if (!task) {
        return res.status(404).send({ message: "Task not found" });
    }



    await taskModel.findByIdAndDelete(taskId);
    res.status(200).send({ message: "Task deleted" });
  } catch {
    res.status(500).send({ message: "Failed to delete task" });
  }
};

//Filter Tasks (User) by category and dueDate
exports.filterTasks = async (req, res) => {
  const { category, dueDate } = req.query;

  let filter = { userID: req.userID };
  if (category) {
    filter.category = category;
  }
  if (dueDate) {
    filter.dueDate = { $lte: new Date(dueDate) };
  }

  try {
    const tasks = await taskModel.find(filter);
    res.status(200).send(tasks);
  } catch {
    res.status(500).send({ message: "Error filtering tasks" });
  }
};



//  Admin: Get All Tasks
exports.getAllTasksAdmin = async (req, res) => {
  try {
    const tasks = await taskModel.find().populate("userID", "username email");
    res.status(200).send(tasks);
  } catch {
    res.status(500).send({ message: "Admin: Failed to fetch tasks" });
  }
};

// Admin: Delete Any Task
exports.deleteTaskAdmin = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await taskModel.findById(taskId);
    if (!task){
         return res.status(404).send({ message: "Task not found" });
    }

    await taskModel.findByIdAndDelete(taskId);
    res.status(200).send({ message: "Admin deleted the task" });
  } catch {
    res.status(500).send({ message: "Admin: Failed to delete task" });
  }
};
