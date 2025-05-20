const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  category: { type: String },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

const taskModel = mongoose.model("Task", taskSchema);
module.exports = { taskModel };
