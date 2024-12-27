// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Array to hold tasks
let tasks = [];

// Add task function
function addTask(taskContent) {
  const task = {
    id: Date.now(),
    content: taskContent,
  };
  tasks.push(task);
  renderTasks();
}

// Delete task function
function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  renderTasks();
}

// Edit task function
function editTask(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  const newContent = prompt("Edit task:", task.content);
  if (newContent !== null && newContent.trim() !== "") {
    task.content = newContent;
    renderTasks();
  }
}

// Render tasks function
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${task.content}</span>
            <div>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
    taskList.appendChild(li);
  });
}

// Event listener for Add Task button
addTaskButton.addEventListener("click", () => {
  const taskContent = taskInput.value.trim();
  if (taskContent) {
    addTask(taskContent);
    taskInput.value = ""; // Clear input after adding
  }
});

// Event listener for Enter key to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});
