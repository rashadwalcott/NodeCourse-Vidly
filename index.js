const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const genres = [
  {
    id: 1,
    genre: "Horror",
    id: 2,
    genre: "Action",
    id: 3,
    genre: "Drama",
  },
];
