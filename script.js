// create empty array to hold task items

const taskList = [];

// Create variables and assign to DOM elements for input, button, and list
const taskInput = document.getElementById("add-task-input");
const taskCategory = document.getElementById("category");
const taskDeadline = document.getElementById("deadline");
const taskStatus = document.getElementById("status");
const addTaskButton = document.getElementById("add-task-button");
const taskListItem = document.getElementById("task-list-item");

// Hook up button to event listener
addTaskButton.addEventListener("click", addTask);

// Create function addTask 1. grabs user input and pushes into taskList using .push method, 2. grabs selections (category, deadline, due date) and puts everything in an object 3. clears input field

function addTask() {
  const id = Date.now();
  const input = taskInput.value;
  const category = taskCategory.value;
  const deadline = taskDeadline.value;
  const status = taskStatus.value;

  const taskObject = {
    id,
    input,
    category,
    deadline,
    status,
  };

  taskList.push(taskObject);
  taskInput.value = "";
  console.log(taskObject);
  renderList();
}

// Create function to render and update task list, use loop  and appendchild?

function renderList() {
  // Loop through tasklist and render li for each task object
  for (let i = 0; i < taskList.length; i++) {
    // Slice off last element of list to avoid duplicate lis
    let slicedList = taskList.slice(-1);
    let task = slicedList[i];

    // Render name, category, deadline
    const li = document.createElement("li");
    li.textContent = `${task.input} - ${task.category} - ${task.deadline} - ${task.status} - `;

    // Render selector for status
    const selectStatus = taskStatus.cloneNode(true);
    li.appendChild(selectStatus);
    taskListItem.appendChild(li);

    // Update task status on object?
  }
}

// Save to localStorage so tasks can be restored on refresh
function saveToStorage() {
  localStorage.setItem("todo.tasks", JSON.stringify(taskList));
}

// Filter by status or category
// If date is in the past, render date in red and overdue
// Update displayed task list on status changes
// Persisting Task Data with Local Storage
