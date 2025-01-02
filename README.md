# To-Do List API

A simple REST API service to manage a to-do list application using Node.js, Express, and an in-memory JSON file for data storage.

## Features
- **Create a Task:** Add a new task with a title, description, and status.
- **Fetch All Tasks:** Retrieve a list of all tasks.
- **Fetch Task by ID:** Get details of a task by its ID.
- **Update Task Status:** Modify the status of a task (pending, in-progress, or completed).
- **Delete Task:** Remove a task by its ID.

## Prerequisites
Before running this project, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation Instructions
1. **Clone the Repository:**
   ```bash
   git clone <[repository-url](https://github.com/deepanshu7539/todo-api.git)>
   cd todo-api


## Running the Project
Install Dependencies:

bash
Copy code
npm install express body-parser
Start the Server:

bash
Copy code
node app.js
Access the API:

Open your browser or use a tool like Postman to interact with the API.
The server runs at http://localhost:3000.

## API Endpoints

Method	Endpoint	Description

- POST	/tasks	Create a new task.
- GET	/tasks	Fetch all tasks.
- GET	/tasks/:id	Fetch a task by its ID.
- PUT	/tasks/:id	Update the status of a task.
- DELETE	/tasks/:id	Delete a task by its ID.
