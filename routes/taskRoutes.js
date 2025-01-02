const express = require("express");
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTaskStatus);
router.delete("/:id", deleteTask);

module.exports = router;
