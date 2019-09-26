const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const todoSchema = new Schema({
  id: Number,
  message: String,
  dateAdded: String,
  dateCompleted: String,
  isDone: Boolean
});


const UserSchema = new Schema(
  {
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    todos: [todoSchema]
  }
);

module.exports = mongoose.model("User", UserSchema);