const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    let token;

    // Tokens are sent in the header as: Authorization: Bearer <token>
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.statusCode = 401;
      throw new Error("Not authorized, no token provided");
    }

    // Verify the token is valid and unexpired, and extract its payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user (minus password) to the request, so later middleware/controllers can use it
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      res.statusCode = 401;
      throw new Error("Not authorized, user no longer exists");
    }

    next();
  } catch (err) {
    res.statusCode = 401;
    next(new Error("Not authorized, token failed"));
  }
};

// Usage: authorize('admin') — restricts a route to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.statusCode = 403;
      return next(
        new Error(
          `Role '${req.user.role}' is not authorized to access this route`,
        ),
      );
    }
    next();
  };
};

module.exports = { protect, authorize };
