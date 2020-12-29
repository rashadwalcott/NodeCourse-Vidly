const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = new mongoose.model(
  'Customer',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxLength: 50,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxLength: 50,
    },
  })
);

//Validate Customer
function validateCustomer(customer) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    isGold: Joi.boolean(),
    phone: Joi.string().min(5).max(50).required(),
  });

  return schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
