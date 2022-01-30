const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songId: {
    type: Number
  },
  songName: {
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
        //   default: Date.now
        // TODO: add default date
      }
    }
  ]
});


const Song = mongoose.model("Song", songSchema);
module.exports = Song;
