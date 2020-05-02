const router = require("express").Router();
const userRoutes = require("./user");

// Item routes
router.use("/user", userRoutes);

//Exporting
module.exports = router;