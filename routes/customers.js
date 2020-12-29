const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router('Router');

const Customer = mongoose.model(
  'Customer',
  new mongoose.Schema({
    isGold: Boolean,
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxLength: 50,
    },
  })
);

//GET all Customers
router.get('/', async (req, res) => {
  const customers = await Customer.find().sort('name');
  res.send(customers);
});

//POST customer to list
router.post('/', async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({ name: req.body.name });
  customer = await genre.save();

  res.send(customer);
});

//UPDATE(PUT) Customer
router.put('/:id', async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true,
    }
  );

  if (!customer)
    return res.status(404).send('The customer with the given id was not found');

  res.send(customer);
});

//DELETE
router.delete('/:id', async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer)
    return res.status(404).send('THe customer with the given id was not found');

  res.send(customer);
});

//GET Customer with ID
router.get('/:id', async (req, res) => {
  const Customer = await Customer.findById(req.params.id);
  if (!Customer)
    return res.status(404).send('The Customer with the given id was not found');

  res.send(Customer);
});

//Validate Customer
function validateCustomer(customer) {
  const schema = Joi.object({ name: Joi.string().min(3).required() });

  return schema.validate(customer);
}

module.exports = router;
