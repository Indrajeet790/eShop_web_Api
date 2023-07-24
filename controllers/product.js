const Product = require("../models/product");

module.exports.productList = async (req, res) => {
  try {
    // find productList if product present
    const productList = await Product.find({});
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

module.exports.addProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
