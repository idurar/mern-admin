const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const orderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    ref: "Client",
    required: true,
    autopopulate: true,
  },
  total: {
    type: Number,
  },
  orders: {
    type: String,
  },
  status: {
    type: String,
    default: "Draft",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("Order", orderSchema);
