const express = require("express")
const songs = require("../controllers/song-controller")
const songRoute = express.Router()


songRoute.get("/", songs.getAllSongs)
songRoute.get("/:id", songs.getSong)
songRoute.post("/search", songs.searchSongs)
songRoute.post("/", songs.postSong)
songRoute.delete("/:id",songs.deleteSong) 

module.exports = songRoute


