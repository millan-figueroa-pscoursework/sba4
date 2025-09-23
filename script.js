// create empty array to hold task items

const taskList = [];

// Create variables and assign to DOM elements for input, button, and list
const taskInput = document.getElementById("add-task-input");
const taskCategory = document.getElementById("category");
const taskDeadline = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task-button");
const taskListItem = document.getElementById("task-list-item");

// Hook up button to event listener
addTaskButton.addEventListener("click", addTask);

// Create function addTask 1. grabs user input and pushes into taskList, puts everything in an object, clears input field

function addTask() {
  const id = Date.now();
  const input = taskInput.value;
  const category = taskCategory.value;
  const deadline = taskDeadline.value;
  const status = "in proggress"; // default status makes more sense

  const taskObject = {
    id,
    input,
    category,
    deadline,
    status,
  };

  taskList.push(taskObject);

  // Saves new task data to local storage
  saveToStorage();

  taskInput.value = "";
  console.log(taskObject);

  loadFromStorage();
  renderList();
}

// Create function to render and update task list, use loop  and appendchild?

function renderList() {
  // Loop through tasklist and render li for each task object
  for (let i = 0; i < taskList.length; i++) {
    // Slice off last element of list to avoid duplicate lis
    let slicedList = taskList.slice(-1);
    let task = slicedList[i];

    // Render name, category, deadline, and separate selector for status
    const selectStatus = document.createElement("select");
    // ["in-progress", "complete"]; ??

    const li = document.createElement("li");
    li.textContent = `${task.input} - ${task.category} - ${task.deadline} - `;

    // Render selector for status
    li.appendChild(selectStatus);
    taskListItem.appendChild(li);
  }
}

// Save to and load from localStorage so tasks can be restored on refresh
function saveToStorage() {
  localStorage.setItem("todo.tasks", JSON.stringify(taskList));
}

function loadFromStorage() {
  const storedTasks = localStorage.getItem("todo.tasks");

  // clears current array and repopulates with saved data
  if (storedTasks) {
    taskList.length = 0;
    taskList.push(...JSON.parse(storedTasks));
  }
}
// TODO:
// Filter by status or category
// If date is in the past, render date in red and overdue
// Update displayed task list on status changes
// Persisting Task Data with Local Storage
