const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/products/add", productController.addProduct);

module.exports = router;
