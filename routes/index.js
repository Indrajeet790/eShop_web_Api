const express = require("express");
const router = express.Router();

// product routes
router.use("/", require("./product"));
// category routes
router.use("/",require("./category"))

module.exports = router;
