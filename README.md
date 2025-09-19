# Dynamic Task Management App

## Objective

You will create a dynamic task management app that lets users:

- Add new tasks with details such as the task name, category, deadline, and status.
- Update the status of tasks to reflect their progress (e.g., **In Progress**, **Completed**, **Overdue**).
- Automatically update task status based on the current date (tasks past their deadline will be marked as **Overdue**).
- Filter tasks by status or category.
- Persist task data using **local storage** so tasks are saved even after refreshing the page.

---

## Project Requirements

### 1. Adding New Tasks

- Create input fields for the task name, category, deadline, and an initial status (e.g., _In Progress_).
- Include an **Add Task** button that will add the task to the task list.
- Each task should be stored as an object with properties such as `taskName`, `category`, `deadline`, and `status`.
- Add the task object to an array that holds all tasks.

### 2. Displaying the Task List

- Create an HTML structure (such as an unordered list or table) to display the task list.
- For each task, display the task name, category, deadline, and status.
- Dynamically update the task list in the browser each time a new task is added or a status is updated.

### 3. Updating Task Status

- Allow users to update the status of tasks (e.g., _In Progress_, _Completed_) via a dropdown or button.
- Automatically check each task’s deadline and mark tasks as **Overdue** if the current date has passed the deadline.
- Update the displayed task list whenever a task’s status changes.

### 4. Filtering Tasks

- Add functionality to filter tasks by category or status (e.g., show only _Completed_ tasks or tasks under the _Work_ category).
- Provide a dropdown or set of buttons for users to choose a filter.
- When a filter is selected, only display the tasks that match the selected category or status.

### 5. Persisting Task Data with Local Storage

- Use **local storage** to save the current state of the task list so that tasks are restored when the page is refreshed.
- Ensure that task data (including name, category, deadline, and status) is stored and retrieved correctly.

---

## Project Instructions

### Create the HTML Structure

- Input fields for task name, category, deadline, and status.
- A button to add new tasks.
- A dropdown or buttons to filter tasks by status or category.
- A display area to show the list of tasks, including options to update task status.

### Write the JavaScript Code

- Use an array to store tasks, each represented as an object.
- Write functions to add tasks, update task status, check overdue tasks, and filter tasks.
- Use DOM manipulation to display the task list dynamically.
- Implement local storage to persist task data.

### Test Your Application

- Add multiple tasks and ensure they are displayed correctly.
- Test the **Update Status** functionality to ensure tasks can be marked as _Completed_ or _Overdue_.
- Filter tasks by status or category and ensure the correct tasks are displayed.
- Refresh the page and ensure the tasks are restored from local storage.

---

## Tips for Success

- **Break down the tasks:** Start with the core functionality (adding tasks and displaying them), then move to more complex features like filtering and local storage.
- **Test frequently:** Test each feature separately to ensure it works before moving on.
- **Keep your code modular:** Use functions to organize your logic and make your code more readable and maintainable.
- **Think about the user experience:** Ensure the task list is easy to read and users get clear feedback when updating or filtering tasks.

---

## Submission Guidelines

- **Code Submission:** Push your project to a GitHub repository, and commit frequently throughout development. Ensure your code is clean, well-organized, and commented.
- The repository should include:

  - `index.html`: The main HTML file.
  - `style.css`: CSS for styling the app.
  - `app.js`: The JavaScript file where your logic resides.
  - `README.md`: A brief explanation of how the app works and any additional features you implemented.

- **Reflection:** Write a short reflection (100–200 words) included in the repository discussing:
  - Challenges faced during the project.
  - How you approached solving those challenges.
  - What you would improve if given more time.
- **Submission:** Submit the link to your GitHub repository via Canvas.
