const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: false },
  sentRequest: [
    {
      username: { type: String, default: "" },
    },
  ],
  request: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      username: { type: String, default: "" },
    },
  ],
  friendsList: [
    {
      friendId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      friendName: { type: String, default: "" },
    },
  ],
  totalRequest: { type: Number, default: 0 },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
