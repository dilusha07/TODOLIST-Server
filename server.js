const { json } = require("express");
const express = require("express");
const app = express();

//const postRequest = require("./routes/post/postWithParams");
//const postWithBody = require("./routes/post/postWithBody");
const todoList = require("./routes/todolist/todolist");
//Middleware
app.use(express.json());

//app.use(postRequest);
//app.use(postWithBody);
app.use(todoList);

//GET Request
app.get(`/`, (req, res) => {
  return res.json("GET Request");
});

//POST Request
app.post(`/`, (req, res) => {
  return res.json("POST Request");
});

//PUT Request
app.put(`/`, (req, res) => {
  return res.json("PUT Request");
});

//DELETE Request
app.delete(`/`, (req, res) => {
  return res.json("DELETE Request");
});

//GET with parameter
app.get(`/se/:SENO`, (req, res) => {
  //   const number = req.params.SENO;
  //   return res.json(number);
  return res.json(req.params.SENO);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
