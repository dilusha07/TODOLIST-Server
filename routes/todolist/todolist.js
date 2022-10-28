const { Router } = require("express");
const { uuid } = require("uuidv4");

let toDos = [
  {
    id: uuid(),
    title: "learn node.js",
    description: "Learn node js with express",
  },
  {
    id: uuid(),
    title: "learn react.js",
    description: "Learn react js with redux",
  },
];

const router = Router();

//get all todos
router.get("/todolist", (req, res) => {
  //return res.json(toDos);
  return res.status(200).json(toDos);
});

//get  one todo by index
router.get("/todolist/:num", (req, res) => {
  const num = req.params.num;
  return res.json(toDos[num - 1]);
});

//get todo by id
router.get("/todolist/:id", (req, res) => {
  const id = req.params.id;
  const todo = toDos.filter((todo) => todo.id === id);
  //return res.json(todo);
  if (toDo) {
    return res.status(200).json(todo);
  }
  return res.status(204).json();
});

//Add todo to list
router.post("/addTodo", (req, res) => {
  const body = req.body;
  body.id = uuid();
  toDos = [...toDos, body];
  //return res.json(toDos);
  return res.status(201).json();
});

//Delelte todo from list
router.delete("/deleteTodo/:id", (req, res) => {
  const id = req.params.id;
  const isIdHere = toDos.some((todo) => todo.id === id);
  if (!isIdHere) {
    //return res.json("Todo not Found");
    return res.status(204).json("Todo not Found");
  } else {
    const newToDos = toDos.filter((todo) => todo.id !== id);
    toDos = newToDos;
    //return res.json(toDos);
    return res.status(201).json(toDos);
  }
});

//Edit todo from list
router.put("/editTodo/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const isIdHere = toDos.some((todo) => todo.id == id);
  if (!isIdHere) {
    //return res.json("todo No Found");
    return res.status(204).json("Todo not Found");
  }
  const newToDos = toDos.filter((todo) => todo.id !== id);
  toDos = newToDos;

  let newToDo = { id, ...body };
  toDos = [newToDo, ...toDos];

  //return res.json(toDos);
  return res.status(205).json(toDos);
});

//Edit todo from list- without deleting todo
router.put("/editTodo/:id", (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const index = toDos.findIndex((todo) => todo.id === id);
  console.log(index);
  if (index < 0) {
    //return res.json("Todo not found");
    return res.status(204).json("Todo not Found");
  }
  toDos[index].title = title;
  toDos[index].description = description;

  //return res.json(toDos);
  return res.status(201).json(toDos);
});

module.exports = router;
