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
  const customer = await Customer.create({
    name,
    email,
    phone,
  });
  res.status(201).json(customer);
});

const getOneCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(404);
    throw new Error("Customer Not found");
  }
  res.status(200).json(customer);
});

const updateCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) {
    res.status(404);
    throw new Error("Customer Not found");
  }

  const updatedCustomer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedCustomer);
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
