const { Schema, model } = require("mongoose");

const TodSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model("todos", TodSchema);
