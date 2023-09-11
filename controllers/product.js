const Product = require("../models/product");

module.exports.productList = async (req, res) => {
  try {
    // find productList if product present
    const productList = await Product.find({}).populate("category");
    if (!productList) {
      return res
        .status(404)
        .json({ success: false, message: "product is not found" });
      // res.status(500).json({ success: false });
    } else {
      res.status(200).send(productList);
    }
  } catch (err) {
    console.log(err);
  }
};

// find product by id
module.exports.productById = async (req, res) => {
  try {
    // find productList if product present
    const product = await Product.find(req.params.id).populate("category");
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "product is not found" });
      // res.status(500).json({ success: false });
    } else {
      res.status(200).send(product);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// update product by id
module.exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (product) {
      return res
        .status(200)
        .json({ success: true, message: "category updated successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "category is not updated" });
    }
  } catch (err) {
    console.log(err);
  }
};
// delete a category
module.exports.deleteProduct = async (req, res) => {
  try {
    const product = await product.findByIdAndDelete(req.params.id);
    if (product) {
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
