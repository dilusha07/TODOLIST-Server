//Save Data using http post Request

const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const { model } = require("mongoose");
const ToDos = model("todos");

const router = new Router();

// router.post("/api/saveTodo", async (req, res) => {
//   try {
//     const body = req.body;
//     //console.log(req.body)
//     const newTodo = new ToDos(body);
//     await newTodo.save();
//     return res.status(201).json(newTodo);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

router.post(
  "/api/saveTodo",
  [
    check("title", "Title is Requires").not().isEmpty(),
    check("description", "Description is Requires").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const body = req.body;
      //console.log(req.body)
      const newTodo = new ToDos(body);
      await newTodo.save();
      return res.status(201).json(newTodo);
    } catch (err) {
      console.error(err.message);
    }
  }
);

model.exports = router;
