// create empty array to hold task items

const taskList = [];

// create variables and assign to DOM elements for input, button, and list
const taskInput = document.getElementById("add-task-input");
const taskCategory = document.getElementById("category");
const taskDeadline = document.getElementById("deadline");
const taskStatus = document.getElementById("status");
const addTaskButton = document.getElementById("add-task-button");

// create function addTask 1. grabs user input and pushes into taskList using .push method, 2. grabs selections (category, deadline, due date) and puts everything in an object 3. clears input field
function addTask() {
  let value = taskInput.value;
  taskList.push(value);
  console.log(taskList);
}

// create function to render and update task list, use appendchild?
// hook up addTask button to functions
addTaskButton.addEventListener("click", addTask);
