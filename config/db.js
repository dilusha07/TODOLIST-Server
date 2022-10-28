const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://todolist:todolist@cluster0.vqppac1.mongodb.net/?retryWrites=true&w=majority";

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

module.exports = connectDB;
