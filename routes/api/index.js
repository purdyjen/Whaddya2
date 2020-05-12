const router = require("express").Router();
const userRoutes = require("./user");

// Item routes
router.use("/users", userRoutes);

//Exporting
module.exports = router;