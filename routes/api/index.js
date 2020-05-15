const router = require("express").Router();
const userRoutes = require("./user");
const optionsRoutes = require("./options")

// Item routes
router.use("/users", userRoutes);
router.use("/options", optionsRoutes);

//Exporting
module.exports = router;