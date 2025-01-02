const fs = require("fs");
const path = require("path");

const tasksFilePath = path.join(__dirname, "../models/tasks.json");

// Helper to read tasks
const readTasks = () => {
  const data = fs.readFileSync(tasksFilePath, "utf8");
  return JSON.parse(data);
};

// Helper to write tasks
const writeTasks = (tasks) => {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
};

// Create a new task
exports.createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required." });
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status: "pending",
  };

  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
};

// Fetch all tasks
exports.getAllTasks = (req, res) => {
  const tasks = readTasks();
  res.status(200).json(tasks);
};

// Fetch a task by ID
exports.getTaskById = (req, res) => {
  const { id } = req.params;
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }

  res.status(200).json(task);
};

// Update task status
exports.updateTaskStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["pending", "in-progress", "completed"].includes(status)) {
    return res.status(400).json({ error: "Invalid status value." });
  }

  const tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found." });
  }

  tasks[taskIndex].status = status;
  writeTasks(tasks);
  res.status(200).json(tasks[taskIndex]);
};

// Delete a task by ID
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const tasks = readTasks();
  const updatedTasks = tasks.filter((t) => t.id !== parseInt(id));

  if (tasks.length === updatedTasks.length) {
    return res.status(404).json({ error: "Task not found." });
  }

  writeTasks(updatedTasks);
  res.status(200).json({ message: "Task deleted successfully." });
};
