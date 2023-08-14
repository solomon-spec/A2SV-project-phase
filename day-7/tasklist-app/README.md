# Task Management App Documentation

Welcome to the documentation for the Task Management App! This app allows you to manage tasks, mark them as completed, edit task details, and apply filters to view specific subsets of tasks.

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Components](#components)
   - [AddTaskForm](#addtaskform-component)
   - [EditTask](#edittask-component)
   - [FilterButton](#filterbutton-component)
   - [TaskList](#tasklist-component)
4. [Redux State](#redux-state)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

The Task Management App is a web application developed using React and Redux. It provides a user interface for managing tasks, including adding new tasks, marking tasks as completed, editing task details, and filtering tasks based on completion status.

## Getting Started

To run the app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/solomon-spec/A2SV-project-phase/`
2. Navigate to the app directory: `cd day-7/tasklist-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

The app will be accessible at `http://localhost:5147` in your browser.

## Components

### AddTaskForm Component

The `AddTaskForm` component provides a form to add new tasks. Users can enter a task title and description. Upon submission, the task is added to the task list.

### EditTask Component

The `EditTask` component allows users to edit an existing task's title and description. Users can initiate editing, make changes, and save the updated details.

### FilterButton Component

The `FilterButton` component toggles the task list display between all tasks and completed tasks. It provides an option to change the current view.

### TaskList Component

The `TaskList` component displays the list of tasks. It supports actions like marking tasks as completed, deleting tasks, and initiating editing of task details. The component also supports filtering tasks based on completion status.

## Redux State

The app uses Redux for state management. The Redux store maintains two main pieces of state:

- `tasks`: An array of task objects, each with an `id`, `title`, `content`, and `completed` status.
- `filter`: A boolean value indicating whether to filter and show only completed tasks.

## Usage

- **Adding a Task:** Use the `AddTaskForm` component to input a task title and description. Click the "Add Task" button to add the task to the list.

- **Marking as Completed:** In the `TaskList`, click the circle button next to a task to toggle its completion status.

- **Editing a Task:** Click the "Edit" button next to a task in the `TaskList` to initiate editing. You can modify the title and description and click "Save" to update the task.

- **Deleting a Task:** Click the "Delete" button next to a task in the `TaskList` to remove it from the list.

- **Filtering Tasks:** Use the `FilterButton` to toggle between displaying all tasks and only completed tasks.

## Contributing

We welcome contributions from the community! If you'd like to contribute to the Task Management App, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Add feature"`
4. Push the changes to your fork: `git push origin feature-name`
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).
