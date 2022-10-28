const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUrl =
  "mongodb+srv://todolist:todolist@cluster0.vqppac1.mongodb.net/?retryWrites=true&w=majority";

//Models
require("./models/todolist");

//Connect mongoDb
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to DB");
  } catch (err) {
    console.log(err.message);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});

//Add Data to Database
//const ToDos = mongoose.model("todos");

// (async () => {
//   try {
//     const todo = new ToDos({
//       title: "Learn Node",
//       description: "Learn Node with Express",
//     });
//     await todo.save();
//     console.log("Data Saved");
//   } catch (err) {
//     console.error(err.message);
//   }
// })();

//GEt data from database
// const getData = async () => {
//   try {
//     const todos = await ToDos.find();
//     console.log(todos);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

async () => {
  try {
    const todos = await ToDos.find().limit(2);
    //const todos = await ToDos.findOne().limit(2).sort("title");
    //const todos = await ToDos.findOne({$and:[{title:"Learn Node"},{description:""})
    //const todos = await ToDos.find();
    //const todos = await ToDos.find({title:"Learn Node"})
    //const todod = await ToDos.findById("8fb51bc8-7dd4-4f7a-8dde-00660908fae2")
    console.log(todos);
  } catch (err) {
    console.log(err.message);
  }
};

//Delete data in database
// (async () => {
//   try {
//     await ToDos.findByIdAndDelete("635a3da0bd788d453d19001a");
//     console.log("Id is Deleted");
//   } catch (err) {
//     console.error(err.message);
//   }
// })();

//Update data in database
(async () => {
  try {
    await ToDos.updateOne(
      { _id: "635a3d7a6d797e3b3dd8fafa" },
      { $set: { title: "Learn Vue", description: "Learn Vue with vuex" } }
    );
  } catch (err) {
    console.error(err.message);
  }
})();
