const router = require("express").Router();
const userController = require("../../controllers/userController.js");

router.route("/")
    .get(userController.findAll)
    .post(userController.create);


router
	.route("/:id")
	.get(userController.findById)
	.put(userController.update)
	.delete(userController.remove);

module.exports = router;