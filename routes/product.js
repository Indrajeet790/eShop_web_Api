const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

// find all product  productList
router.get("/list", productController.productList);

// find product with the help of id
router.get("/list/:id", productController.productById);

// create a new product
router.post("/create", productController.addProduct);

// delete a product with the help of id
router.delete("/delete/:id", productController.deleteProduct);

// update a product with the help of id
router.put("/update/:id", productController.updateProduct);

module.exports = router;
