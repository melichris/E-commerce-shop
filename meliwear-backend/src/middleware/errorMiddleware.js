const errorHandler = (err, req, res, next) => {
  const statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
  });
};

const notFound = (req, res, next) => {
  res.status(404);
  const err = new Error(`Route not found: ${req.originalUrl}`);
  next(err);
};

module.exports = { errorHandler, notFound };
