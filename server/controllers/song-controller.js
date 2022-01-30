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
    const newSong = new Song(req.body)
    console.log("new song", newSong);
    try {
        await newSong.save();
        res.status(201).send(newSong)
    } catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
}




module.exports = {getAllSongs, postSong}