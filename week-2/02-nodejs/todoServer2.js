/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

let count = 0;
let todos = [];
const fileContent = fs.readFileSync('./files/a.txt', 'utf8');
todos = JSON.parse(fileContent);

function generateID() {
    const max = 99999;
    const min = 10000;
    let ans = min + count;
    count++;
    return ans;
}

function findID(idTofind) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == idTofind) {
            return i;
        }
    }
    return false;
}

app.get("/todos/", function (req, res) {
    res.status(200).json(todos);
})

app.get("/todos/:id", function (req, res) {
    const id = req.params.id;
    let index = findID(id);
    if (index !== false) {
        res.status(200).json(todos[index])
    }
    else {
        res.status(404).json({ msg: "Not Found" });
    }
})

app.post("/todos/", function (req, res) {
    let name = req.body.title;
    let desc = req.body.description;
    let ID = generateID();
    let status = req.body.completed;
    let todo = {
        title: name,
        completed: status,
        description: desc,
        id: ID
    }
    todos.push(todo);
    fs.writeFileSync('./files/a.txt', JSON.stringify(todos), 'utf8');
    res.status(201).json({ msg: "Created", id: ID });
})

app.put("/todos/:id", function (req, res) {
    const id = req.params.id;
    let index = findID(id);
    if (index !== false) {
        res.status(200).json({ msg: "OK" })
        let name = req.body.title;
        let desc = req.body.description;
        let status = req.body.completed;
        let ID = todos[index].id;
        let todo = {
            title: name,
            completed: status,
            description: desc,
            id: ID
        }
        todos[index] = todo;
        fs.writeFileSync('./files/a.txt', JSON.stringify(todos), 'utf8');
    }
    else {
        res.status(404).json({ msg: "Not Found" });
    }
})

app.delete("/todos/:id", function (req, res) {
    const id = req.params.id;
    let index = findID(id);
    if (index !== false) {
        res.status(200).json({ msg: "OK" })
        todos.splice(index, 1);
        fs.writeFileSync('./files/a.txt', JSON.stringify(todos), 'utf8');
    }
    else {
        res.status(404).json({ msg: "Not Found" });
    }
})
module.exports = app;
app.listen(3000);