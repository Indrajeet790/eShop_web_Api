const express = require("express");
const router = express.Router();

// product routes
router.use("/", require("./product"));

module.exports = router;
