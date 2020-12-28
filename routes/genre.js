const express = require('express');
const router = express.Router('Router');

const genres = [
  { id: 1, name: 'Horror' },
  { id: 2, name: 'Action' },
  { id: 3, name: 'Drama' },
];

//GET All Genres
router.get('/', (req, res) => {
  res.send(genres);
});

//GET Genre with ID
router.get('/:id', (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send('The genre with the given id was not found');
  res.send(genre);
});
//POST genre to list
router.post('/', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});

//UPDATE(PUT) Genre
router.put('/:id', (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send('The genre with the given id was not found');

  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

//DELETE Genre with ID
router.delete('/:id', (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send('The genre with the given id was not found');

  const index = genres.indexOf(genre);
  const result = genres.splice(index, 1);

  res.send(result);
});

//Validate Genre
function validateGenre(genre) {
  const schema = Joi.object({ name: Joi.string().min(3).required() });

  return schema.validate(genre);
}

module.exports = router;
