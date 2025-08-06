const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

const TASKS_FILE = path.join(__dirname, "task.json");

// Helper functions
function readTasks() {
  const data = fs.readFileSync(TASKS_FILE, "utf-8");
  return JSON.parse(data).tasks;
}

function writeTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify({ tasks }, null, 2));
}

// GET /tasks
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET /tasks/:id
app.get("/tasks/:id", (req, res) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.sendStatus(404);
  res.json(task);
});

// POST /tasks
app.post("/tasks", (req, res) => {
  const { title, description, completed } = req.body;
  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof description !== "string" ||
    !description.trim() ||
    typeof completed !== "boolean"
  ) {
    return res.sendStatus(400);
  }
  const tasks = readTasks();
  const newId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const newTask = { id: newId, title, description, completed };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT /tasks/:id
app.put("/tasks/:id", (req, res) => {
  const { title, description, completed } = req.body;
  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof description !== "string" ||
    !description.trim() ||
    typeof completed !== "boolean"
  ) {
    return res.sendStatus(400);
  }
  const tasks = readTasks();
  const idx = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (idx === -1) return res.sendStatus(404);
  tasks[idx] = { ...tasks[idx], title, description, completed };
  writeTasks(tasks);
  res.json(tasks[idx]);
});

// DELETE /tasks/:id
app.delete("/tasks/:id", (req, res) => {
  const tasks = readTasks();
  const idx = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (idx === -1) return res.sendStatus(404);
  tasks.splice(idx, 1);
  writeTasks(tasks);
  res.sendStatus(200);
});

module.exports = app;