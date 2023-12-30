const mongoose = require("mongoose");

const Song = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },

});

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;
