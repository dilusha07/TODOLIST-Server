const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDB = require("./config/db");

//Models
require("./models/todolist");

const GetTodos = require("./routes/todos/GetTodos");
const GetTodo = require("./routes/todos/GetTodo");
const SaveTodo = require("./routes/todos/SaveTodo");
const DeleteTodo = require("./routes/todos/DeleteTodos");
const EditTodo = require("./routes/todos/EditTodo");

connectDB();

//middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});

//Http Requests
app.use(GetTodos);
app.use(GetTodo);
app.use(SaveTodo);
app.use(DeleteTodo);
app.use(EditTodo);
