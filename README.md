# Dynamic Task Management App

## Reflection Questions

### Challenges faced during the project.

From the beginning, my setup was confusing - having a status dropdown before adding the task (along with task name, due date, category) gave me a lot of problems so I made an executive decision to remove it and add it to the task itself. I faced a lot of challenges mainly looping logic, I changed my loops many times and had a very hard time with the function to render the elements. I had to do a lot of research to figure out things like how to render different types of elements. I also had a hard time with the local storage part, it turns out I had it in the wrong function and my list kept disappearing. I really learned a lot in this project even though it feels like the finished product is not very impressive for the amount of coding it required.

### How you approached solving those challenges.

I googled, went over the module lessons, looked at other people's code on my classmate's repos to look at the different approaches people were taking. Doing the algorithm group study over the weekend actually helped me get back into algorithmic thinking mentality after doing so much design.

### What you would improve if given more time.

I created the html structure and added very minimal Tailwind styles so its easier for me to see what im doing. I would like to add real styling when i get a chance. Also I spent the biggest chunk of time and effort into rendering the elements to the DOM and couldn't even begin working on the filtering function until I figured out how to render a status selector in my li and add the functionality to update the status value on the object itself. So my filtering functionality is definitely buggy, I would like to refactor that for sure. Lastly, I want to fix the status select element so it renders conditionally instead of being there even before the task is creatied.

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
