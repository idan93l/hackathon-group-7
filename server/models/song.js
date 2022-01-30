const mongoose = require("mongoose");
const validator = require("validator")


const songSchema = new mongoose.Schema({
  songName: {
    type: String,
    require: true,
  },
  date: {
    type: Number,
    default: 0,
    validate(value){
      if (!validator.isDate(value)){
        throw new Error('Invalid Date')
      }
    }
  },
  owner: {
    type: String,
    require: true,
  },
  lyrics: {
    type: String,
    require: true,
  }
})


const Song = mongoose.model("Song", songSchema);
module.exports = Song;