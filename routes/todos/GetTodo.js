//Get Todos by Id

const { Router } = require("express");
const { model } = require("mongoose");
const ToDos = model("todos");

const router = new Router();

router.get("/api/todo/:id", async (req, res) => {
  try {
    const todo = await ToDos.findById(id);

    //Check if there is todo in request id
    if (!todo) {
      return res
        .status(400)
        .json({ error: [{ msg: "No todo found on that id" }] });
    }
    return res.status(200).json(todo);
  } catch (err) {
    console.log(err.message);
  }
});

model.exports = router;
