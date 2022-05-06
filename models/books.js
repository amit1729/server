const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  author: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  description: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("Books", dataSchema);
