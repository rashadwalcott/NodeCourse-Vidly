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
      maxlength: 50,
    },
  })
);

//GET all Customers
router.get('/', async (req, res) => {
  const customers = await Customer.find().sort('name');
  res.send(customers);
});

//POST genre to list
router.post('/', async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({ name: req.body.name });
  customer = await genre.save();

  res.send(customer);
});

//UPDATE(PUT) Genre
