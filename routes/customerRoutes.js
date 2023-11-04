const express = require("express");
const router = express.Router();
const {
  getCustomers,
  createCustomer,
  getOneCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerControllers");

router.route("/").get(getCustomers).post(createCustomer);
router
  .route("/:id")
  .get(getOneCustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

module.exports = router;
