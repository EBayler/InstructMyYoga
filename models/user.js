const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  userImage: String,
  userId: {
    type: String,
    required: true
  },
  classes: {
    type: [Object]
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;