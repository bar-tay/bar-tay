const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    age: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { collection: "users" }
);

module.exports = mongoose.model("myTable", signUpTemplate);
