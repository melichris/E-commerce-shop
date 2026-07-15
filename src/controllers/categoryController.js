const Category = require("../models/Category");

// @route  GET /api/categories
// Public
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res
      .status(200)
      .json({ success: true, count: categories.length, data: categories });
  } catch (err) {
    next(err);
  }
};

// @route  POST /api/categories
// Admin only
const createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (err) {
    next(err);
  }
};

// @route  PUT /api/categories/:id
// Admin only
const updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!category) {
      res.statusCode = 404;
      throw new Error("Category not found");
    }

    res.status(200).json({ success: true, data: category });
  } catch (err) {
    next(err);
  }
};

// @route  DELETE /api/categories/:id
// Admin only
const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      res.statusCode = 404;
      throw new Error("Category not found");
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
