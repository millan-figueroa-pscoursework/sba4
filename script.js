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
  const id = Date.now(); // id for updating task status later
  const input = taskInput.value;
  const category = taskCategory.value;
  const deadline = taskDeadline.value;
  const defaultStatus = "in progress"; // default in-progress status makes more sense

  const taskObject = {
    id,
    input,
    category,
    deadline,
    defaultStatus,
  };

  taskList.push(taskObject);

  // Saves new task data to local storage
  saveToStorage();

  taskInput.value = "";

  loadFromStorage();
  renderList();
  console.log(taskObject);
}

// Create function to loop thru taskList and render list items

function renderList() {
  // Clear list instead of slice to fix error and prevent duplicates
  taskListItem.innerHTML = "";

  // Change loop to for...of bc iterating items not indexes (cleaner)
  for (const task of taskList) {
    // Render name, category, deadline, and separate selector for status

    const li = document.createElement("li");
    li.textContent = `${task.input} - ${task.category} - ${task.deadline} - ${task.defaultStatus} `;

    // Render selector for status and create array with status options
    const selectStatus = document.createElement("select");
    const statuses = ["in-progress", "complete", "overdue!"];

    // loop through statuses array
    for (let i = 0; i < statuses.length; i++) {
      //loops thru statuses array and creates dropdown options
      const status = statuses[i];
      const option = document.createElement("option");
      // Gets input and assigns to option in storage
      option.value = status;
      // Renders to list item
      option.textContent = status;
      selectStatus.appendChild(option);
    }

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

console.log(localStorage.getItem("todo.tasks"));
// TODO:
// Filter by status or category
// If date is in the past, render date in red and overdue
// Update displayed task list on status changes
