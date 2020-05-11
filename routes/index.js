const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
//for friend request tutorial
// const formidable = require("formidable");
// const User = require("../models/User");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// //for friend request tutorial
// router.post("/", function (req, res) {
//   var form = new formidable.IncomingForm();
//   form.parse(req);
//   let reqPath = path.join(__dirname, "../");
//   let newfilename;
//   form.on("fileBegin", function (name, file) {
//     file.path = reqPath + "public/upload/" + req.user.username + file.name;
//     newfilename = req.user.username + file.name;
//   });
//   form.on("file", function (name, file) {
//     User.findOneAndUpdate(
//       {
//         username: req.user.username,
//       },
//       {
//         userImage: newfilename,
//       },
//       function (err, result) {
//         if (err) {
//           console.log(err);
//         }
//       }
//     );
//   });
//   req.flash("success_msg", "Your profile picture has been uploaded");
//   res.redirect("/");
// });

// router.get("/search", ensureAuthenticated, function(req, res){
// 	User.find({username: {$ne: req.user.username}}, function(err, result){
// 	if (err) throw err;
// 	res.render("search",{
// 	result: result
// 	});
// 	});
// 	});


// router.post("/search", ensureAuthenticated, function(req, res) {
// 	var searchfriend = req.body.searchfriend;
// 	if (searchfriend == req.user.username) {
// 	searchfriend= null;
// 	}

// 	async.parallel([
// 		function(callback) {
// 		if(req.body.receiverName) {
// 		User.update({
// 		"username": req.body.receiverName,
// 		"request.userId": {$ne: req.user._id},
// 		"friendsList.friendId": {$ne: req.user._id}
// 		},
// 		{
// 		$push: {request: {
// 		userId: req.user._id,
// 		username: req.user.username
// 		}},
// 		$inc: {totalRequest: 1}
// 		},(err, count) => {
// 		console.log(err);
// 		callback(err, count);
// 		})
// 		}
// 		},
// 		function(callback) {
// 		if(req.body.receiverName){
// 		User.update({
// 		"username": req.user.username,
// 		"sentRequest.username": {$ne: req.body.receiverName}
// 		},
// 		{
// 		$push: {sentRequest: {
// 		username: req.body.receiverName
// 		}}
// 		},(err, count) => {
// 		callback(err, count);
// 		})
// 		}
// 		}],
// 		(err, results)=>{
// 		res.redirect("/search");
// 		});
// 	User.find({username: searchfriend}, function(err, result) {
// 	if (err) throw err;
// 	res.render("search", {
// 	result: result
// 	});
// 	});
// 	});

module.exports = router;
