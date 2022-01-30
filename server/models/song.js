const mongoose = require("mongoose");
const validator = require("validator");

const songSchema = new mongoose.Schema({

  songName: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now,
    },
  writer: {
    type: String,
    require: true
  },
  lyrics: {
    type: String,
    require: true
  },
  comments: [
    {
      text: {
        type: String
      },
      owner: {
        type: String
      },
      date: {
          default: Date.now
      }
    }
  ]
});


const Song = mongoose.model("Song", songSchema);
module.exports = Song;
