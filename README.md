# 📌 Task Manager API

This is a simple RESTful Task Manager API built using **Node.js** and **Express.js** with **in-memory storage**.

## 📦 Project Features

- Create, read, update, and delete (CRUD) tasks
- Input validation and error handling
- Filter tasks by completion status
- Sort tasks by creation time
- Add and fetch tasks by priority (low, medium, high)

---

## 🚀 How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/airtribe-projects/task-manager-api-TanishaSharma19.git

2. Navigate to the project folder:
    cd task-manager-api-TanishaSharma19
3. Install dependencies:
    npm install
4. Start the server:
    node app.js

## 📬 API Endpoints
1. Create a Task
POST /tasks
{
    "title": "Sample Task",
    "description": "This is a new task",
    "completed": false,
    "priority": "medium"
}

2. 📄 Get All Tasks
GET /tasks
/tasks?completed=true
/tasks?sortBy=createdAt

3. 📄 Get Task by ID
GET /tasks/:id

4. ✏️ Update Task
PUT /tasks/:id
{
  "title": "Updated Task",
  "description": "Updated description",
  "completed": true,
  "priority": "high"
}

5. ❌ Delete Task
DELETE /tasks/:id

6. 📌 Get Tasks by Priority
GET /tasks/priority/:level
Example:
/tasks/priority/high

## 🧪 Run Tests
To run automated test cases:
npm run test

## 🧠 Technologies Used:
Node.js
Express.js
Tap (for testing)

## 🙋‍♀️ Author
Tanisha Sharma

---

### ✅ 3. Save the File and Push to GitHub

Run the following commands in your terminal:

```bash
git add README.md
git commit -m "Added README.md with project documentation"
git push origin master
This will update your PR automatically.
