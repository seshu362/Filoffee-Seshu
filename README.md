# Task Tracker Application

A React-based task tracker application that allows users to add, edit, and delete tasks. It supports storing tasks in the browser's localStorage and provides an interactive UI for managing tasks with details like title, description, due date, and status.

## Project Setup Instructions

To set up and run the project locally, follow these steps:

1. **Install dependencies :** Ensure you have Node.js and npm installed. If not, download them from Node.js. Then, install the necessary packages:
   ```bash
   npm install

2. **Run the application :**  Start the development server:
   ```bash
   npm start
3. **This will run the app on**  
   ```bash
   http://localhost:3000

## Directory Structure
   ```bash
   /my-tasks
  /src
    /components
      /AddTaskForm
        AddTaskForm.js   - A form to add new tasks or edit existing ones.
        AddTaskForm.css  - Styles for the `AddTaskForm` component.
      /TaskList
        TaskList.js      - Displays the list of tasks with edit and delete options.
        TaskList.css     - Styles for the `TaskList` component.
      /TaskItem
        TaskItem.js      - Displays individual task details and actions (Edit/Delete).
        TaskItem.css     - Styles for the `TaskItem` component.
    App.js             - Main component managing state and rendering the application.
    App.css            - Styles for the main `App` component.
    index.js           - Entry point for the React application.
  package.json         - Contains project dependencies and scripts.
  package-lock.json    - Records the exact version of each installed dependency.
  .gitignore           - Specifies which files and directories Git should ignore.

```  
## Components:
   - **App :** `` This is the root component that manages the state of the application (tasks, taskToEdit). It passes down handlers and data to child components (AddTaskForm and TaskList).``
   - **AddTaskForm :** ``A form for adding new tasks or editing existing ones. It is controlled by the App component, which manages the task data.``

   - **TaskList :** ``Displays the list of tasks, including options to edit or delete tasks. It takes the list of tasks and handler functions from App.``
   - **TaskItem :** ``Displays individual task details and provides buttons for editing and deleting each task.``

## Challenges Faced:
   - **State Management :** ``One challenge was efficiently managing state between parent (App) and child components (TaskList, AddTaskForm). This was handled by passing state and handler functions as props.``
   - **Persisting Data :** ``Ensuring that tasks persist after the page reload was a challenge. We used localStorage to store the tasks, ensuring the data is retained across sessions.``
   - **Dynamic Form Handling :** ``Ensuring that the task form could be reused for both adding new tasks and editing existing ones. This was handled by checking if taskToEdit was provided as a prop.``   




## Features:
   - **Add Task :** ``Users can add tasks with a title, description, due date, and status (Pending, In Progress, Completed).``
   - **Edit Task :** ``Users can edit existing tasks by clicking the "Edit" button next to a task.``
   - **Delete Task: :** ``Users can delete tasks by clicking the "Delete" button next to a task.``
