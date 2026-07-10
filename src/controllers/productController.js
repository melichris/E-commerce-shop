const Product = require("../models/Product");

// @route  GET /api/products
// Public — anyone can browse products
const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res
      .status(200)
      .json({ success: true, count: products.length, data: products });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/products/:id
// Public — view single product detail
const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.statusCode = 404;
      throw new Error("Product not found");
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

// @route  POST /api/products
// Admin only
const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

// @route  PUT /api/products/:id
// Admin only
const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the updated document, not the old one
      runValidators: true, // re-apply schema rules (e.g. min, enum) on update
    });

    if (!product) {
      res.statusCode = 404;
      throw new Error("Product not found");
    }

    res.status(200).json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

// @route  DELETE /api/products/:id
// Admin only
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      res.statusCode = 404;
      throw new Error("Product not found");
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
