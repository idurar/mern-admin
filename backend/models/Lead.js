const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const leadSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  expiredDate: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
  },
  request: {
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

module.exports = mongoose.model("Lead", leadSchema);
