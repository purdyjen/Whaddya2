const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const socket = require("socket.io");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}  else {
  app.use(express.static("public"));
}

app.use(routes);


// io.on("connection", (client) => {
//   // client.on('subscribeToTimer', (interval) => {
//   //   console.log('client is subscribing to timer with interval ', interval);
//   //   setInterval(() => {
//   //     client.emit('timer', new Date());
//   //   }, interval);
//   // });
// });
// const port = 8000;
// io.listen(port);
// console.log("io listening on port", port);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/whaddya2",{useNewUrlParser: true}
  )
server = app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  io = socket(server);
io.on('connection', (socket) =>{
  console.log(socket.id);
  socket.on("SEND_MESSAGE", function(data){
    io.emit("RECEIVE_MESSAGE", data);
  })
});