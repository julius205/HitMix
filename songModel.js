const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  name: String,
  artist: String,
  releaseDate: String,
  coverUrl: String,
  previewUrl: String
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
