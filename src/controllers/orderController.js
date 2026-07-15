const Order = require("../models/Order");
const Product = require("../models/Product");

// @route  POST /api/orders
// Protected — any logged-in user
const createOrder = async (req, res, next) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      res.statusCode = 400;
      throw new Error("Order must contain at least one item");
    }

    let totalPrice = 0;
    const orderItems = [];

    // Loop through each submitted item, fetch the REAL product from DB,
    // and use its REAL current price — never trust a price sent by the client
    for (const item of items) {
      const product = await Product.findById(item.product);

      if (!product) {
        res.statusCode = 404;
        throw new Error(`Product not found: ${item.product}`);
      }

      if (product.stock < item.quantity) {
        res.statusCode = 400;
        throw new Error(`Insufficient stock for ${product.name}`);
      }

      const priceToUse = product.discountPrice || product.price;

      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: priceToUse,
      });

      totalPrice += priceToUse * item.quantity;

      // Reduce stock immediately
      product.stock -= item.quantity;
      await product.save();
    }

    const order = await Order.create({
      user: req.user._id,
      items: orderItems,
      totalPrice,
      shippingAddress,
    });

    res.status(201).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
};
// @route  GET /api/orders/myorders
// Protected — logged-in user sees only their own orders
const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.product",
      "name image",
    );
    res.status(200).json({ success: true, count: orders.length, data: orders });
  } catch (err) {
    next(err);
  }
};

// @route  GET /api/orders
// Admin only — sees ALL orders
const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email")
      .populate("items.product", "name image");
    res.status(200).json({ success: true, count: orders.length, data: orders });
  } catch (err) {
    next(err);
  }
};

// @route  PUT /api/orders/:id/status
// Admin only — update order status
const updateOrderStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true },
    );

    if (!order) {
      res.statusCode = 404;
      throw new Error("Order not found");
    }

    res.status(200).json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
};

module.exports = { createOrder, getMyOrders, getAllOrders, updateOrderStatus };
