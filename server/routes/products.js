const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const expressAsyncHandler = require("express-async-handler");

// @route GET api/products
// @desc Get All
// @access Public
router.post("/add", (req, res) => {
  const product = new Product(req.body);

  product.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      item: doc,
    });
  });
});

// @route GET api/products
// @desc Get All
// @access Public
router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    console.log("no products");
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ message: "Products not found" });
    }
  })
);

// @route GET api/product/article/?id=itemID1,itemID2,itemID3,itemID4
// @desc Search by IDS
// @access Public
router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
    res.json(products);
  })
);

module.exports = router;
