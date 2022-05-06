const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  amount: {
    required: true,
    type: Number,
  },
  order: {
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books",
      },
    ],
    quantity: [
      {
        type: Number,
      },
    ],
  },
});

module.exports = mongoose.model("Sales", dataSchema);
