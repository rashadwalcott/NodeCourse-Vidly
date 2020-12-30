const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxLength: 50,
  },
});

const Genre = mongoose.model('Genre', genreSchema);

//Validate Genre
function validateGenre(genre) {
  const schema = Joi.object({ name: Joi.string().min(5).required() });

  return schema.validate(genre);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;
