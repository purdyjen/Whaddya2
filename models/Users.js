const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type:String, required: true},
  friends: { type:Array, required: true}

});

const User = mongoose.model("User", UserSchema);

module.exports = User;