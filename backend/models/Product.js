const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  productName: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
    default: "available",
  },
});

module.exports = mongoose.model("Product", productSchema);
