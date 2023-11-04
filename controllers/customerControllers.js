const asyncHandler = require("express-async-handler");
const Customer = require("../models/customerModel");

const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();
  res.status(200).json(customers);
});

const createCustomer = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create Customer" });
});

const getOneCustomer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Customer for ${req.params.id}` });
});

const updateCustomer = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Update Customer with ID: ${req.params.id}` });
});

const deleteCustomer = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Delete Customer with ID:  ${req.params.id}` });
});

module.exports = {
  getCustomers,
  createCustomer,
  getOneCustomer,
  updateCustomer,
  deleteCustomer,
};
