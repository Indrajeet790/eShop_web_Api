const express = require("express");
const router = express.Router();

// product routes
router.use("/product", require("./product"));
// category routes
router.use("/category", require("./category"));

module.exports = router;
