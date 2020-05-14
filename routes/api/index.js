const router = require("express").Router();
const userRoutes = require("./user");
const optionsRoutes = requite("./options")

// Item routes
router.use("/users", userRoutes);
router.use("/options", optionsRoutes);

//Exporting
module.exports = router;