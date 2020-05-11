const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  friendsList: [{
		friendId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
		friendName: {type: String, default: ''}
	}]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
