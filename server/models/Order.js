const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  username: {
    type: String,
    default: "Guest",
  },
  email: {
    type: String,
    default: "",
  },
  items: [
    {
      id: {
        type: String,
        default: "",
      },
      name: {
        type: String,
        default: "",
      },
      price: {
        type: Number,
        default: 0,
      },
    },
  ],
});

module.exports = mongoose.model("Orders", orderSchema);
