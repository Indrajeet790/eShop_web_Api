const Category = require("../models/Category");

// check categoryList is present on database if present then send categoryList data
module.exports.categoryList = async (req, res) => {
  try {
    // find categoryList if category present
    const categoryList = await Category.find({});
    if (!categoryList) {
      console.log("love u");
      // res.status(500).json({ success: false });
    } else {
      res.status(200).send(categoryList);
    }
  } catch (err) {
    console.log(err);
  }
};

// find category with the help of id
module.exports.findCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    //  check condition if present then send or not present then send not found
    if (!category) {
      res
        .status(500)
        .json({ message: "The category with given Id was not found" });
    }
    res.status(200).send(category);
  } catch (err) {
    console.log(err);
  }
};

// create a category
module.exports.addCategory = async (req, res) => {
  try {
    let category = new Category({
      name: req.body.name,
      icon: req.body.icon,
      color: req.body.color,
    });
    category = await category.save();
    if (!category) {
      return res.status(404).json({ message: "category cannot be created" });
    } else {
      res.send(category);
    }
  } catch (err) {
    console.log(err);
  }
};

// delete a category
module.exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (category) {
      return res
        .status(200)
        .json({ success: true, message: "category is deleted" });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "category is not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
