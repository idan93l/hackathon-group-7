const Song = require("../models/song")


const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).send(songs)
    } catch (e) {
        res.status(400).send(e)
    }
}

const postSong  = async (req, res) => {
    const {name, writer, lyrics, comment} = req.body;
    const newSong = new Song({name, writer, lyrics})
    try {

    } catch (e) {
        res.status(400).send(e)
    }
}




module.exports = {getAllSongs}