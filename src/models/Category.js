const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);
categorySchema.pre("save", function () {
  if (this.isModified("name")) {
    this.slug = this.name.toLowerCase().trim().replace(/\s+/g, "-");
  }
});

module.exports = mongoose.model("Category", categorySchema);
