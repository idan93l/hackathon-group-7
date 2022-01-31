const Song = require("../models/song")
const searchLyrics = require('./../genius')

const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).send(songs)
    } catch (e) {
        res.status(400).send(e.message)
    }
}

const getSong = async (req, res) => {
    const { id } = req.params
    console.log('song id @getSong: ',id)
    try{
        const song = await Song.findOne({songId : id});
        if (!song) {
            console.log('song not found')
            return res.status(200).send(false);
        }
            console.log('song  found!')
            return res.status(200).send(song)
    }
    catch (e) {
        res.status(400).send(e.message)
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
        res.status(400).send(e.message)
    }
}

const deleteSong = async (req, res) => {
    const { id } = req.params;
    try {
      const song = await Song.findByIdAndDelete(id);
      if (!song) {
        return res.status(400).send({ error: "Cannot find song" });
      }
      res.send(song);
    } catch (e) {
      res.status(400).send(e.message);
    }
  };

  const searchSongs = async (req,res) => {
        try {
            const results = await searchLyrics(req.body.query)
            res.send(results)
        }catch(err){
            res.send([])
        }
  } 


module.exports = {
    getAllSongs, 
    getSong,
    postSong, 
    deleteSong,
    searchSongs
}