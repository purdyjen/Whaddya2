const express = require("express");
//const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
//const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//app.use(routes);
function login(email, password, callback) {
  const bcrypt = require('bcrypt');
  const MongoClient = require('mongodb@3.1.4').MongoClient;
  const client = new MongoClient('mongodb://localhost/whaddya2');

  client.connect(function (err) {
    if (err) return callback(err);

    const db = client.db('whaddya2');
    const users = db.collection('users');

    users.findOne({ email: email }, function (err, user) {
      if (err || !user) {
        client.close();
        return callback(err || new WrongUsernameOrPasswordError(email));
      }

      bcrypt.compare(password, user.password, function (err, isValid) {
        client.close();

        if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

        return callback(null, {
            user_id: user._id.toString(),
            nickname: user.nickname,
            email: user.email
          });
      });
    });
  });
}

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/whaddya2",{useNewUrlParser: true}
//  )
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });