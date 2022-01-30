const express = require("express")
const songs = require("../controllers/song-controller")
const songRoute = express.Router()


songRoute.get("/", songs.getAllSongs)
songRoute.post("/", songs.postSong)

module.exports = songRoute


