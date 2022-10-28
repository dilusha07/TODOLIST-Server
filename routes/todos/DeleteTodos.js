//Delete Request todo from database

const { Router } = require("express");
const { model } = require("mongoose");
const Todos = model("todos");

const router = Router();

router.delete("/api/deleteTodo/:id", async (req, res) => {
  try {
    await Todos.findByIdAndDelete(req.params.id);
    return res.json({ msg: "Todo Deleted" });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
