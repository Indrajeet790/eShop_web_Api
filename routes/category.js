const express = require("express");
const categoryController = require("../controllers/Category");
const router = express.Router();

// find all category  categoryList
router.get("/list", categoryController.categoryList);

// find category with the help of id
router.get("/list/:id", categoryController.findCategory);

// create a new category
router.post("/create", categoryController.addCategory);

// delete a category with the help of id
router.delete("/delete/:id", categoryController.deleteCategory);

// update a category with the help of id
router.put("/update/:id", categoryController.updateCategory);

module.exports = router;
