const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});

const userModel = mongoose.model("Profile", userSchema);

module.exports = userModel;