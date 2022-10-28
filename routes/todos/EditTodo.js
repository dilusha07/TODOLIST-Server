//Edit Data in Database

const { Router } = require("express");
const { model } = require("mongoose");
const Todos = model("todos");

const router = Router();

router.put("/api/editTodo/:id", async (req, res) => {
  const body = req.body;

  try {
    await Todos.updateOne(
      { _id: req.params.id },
      {
        $set: body,
      }
    );

    const todo = await Todos.findById(req.params.id);
    return res.json(todo);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
