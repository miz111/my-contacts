const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the customer's name"],
    },
    email: {
      type: String,
      required: [true, "Please add the customer's email"],
    },
    phone: {
      type: Number,
      required: [true, "Please add the customer's phone number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
