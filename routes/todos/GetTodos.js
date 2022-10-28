//Get Todos From Database
const { Router } = require("express");
const { model } = require("mongoose");
const ToDos = model("todos");

const router = new Router();

router.get("/api/todos", async (req, res) => {
  try {
    const todos = await ToDos.find();

    if (!todos) {
      return res.status(204).json();
    }
    return res.status(200).json(todos);
  } catch (err) {
    console.log(err.message);
  }
});

model.exports = router;
