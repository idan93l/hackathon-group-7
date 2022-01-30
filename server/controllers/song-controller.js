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
    const {name, lyrics, comments, owner} = req.body;
    const newSong = new Song({name, lyrics, comments, owner})
    try {
        await Song.save(newSong);
        res.status(201).send(newSong)
    } catch (e) {
        res.status(400).send(e)
    }
}




module.exports = {getAllSongs, postSong}