const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
//const routes = require("./routes");
const dotenv = require('dotenv');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}  else {
  app.use(express.static("public"));
}

//app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/whaddya2",{useNewUrlParser: true}
  )
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });