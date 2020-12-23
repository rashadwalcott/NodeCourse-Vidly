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

//GET All Genres

//GET Genre with ID

//POST genre to list

//UPDATE(PUT) Genre

//DELETE Genre with ID

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
