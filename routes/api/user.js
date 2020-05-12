const router = require("express").Router();
const userController = require("../../controllers/userController.js");

router.route("/api/users")
    .get(userController.findAll)
    .post(userController.create);

// Matches with "/api/items/:id"
router
	.route("/api/users/:id")
	.get(userController.findById)
	.put(userController.update)
	.delete(userController.remove);

// Exporting
module.exports = router;