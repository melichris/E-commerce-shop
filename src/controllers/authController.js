const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generates a JWT containing the user's ID, signed with our secret key
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

// @route  POST /api/auth/register
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if a user with this email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.statusCode = 400;
      throw new Error('User with this email already exists');
    }

    // Create the user — password gets hashed automatically by our pre('save') hook
    const user = await User.create({ name, email, password });

    // Respond with user info + token (never send back the password)
    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: generateToken(user._id),
    });
  } catch (err) {
    next(err); // passes the error to our centralized error handler
  }
};

module.exports = { registerUser };
