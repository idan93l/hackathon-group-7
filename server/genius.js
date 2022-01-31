const axios = require("axios");
const searchLyrics = async (song) => {
  try {
    const response = await axios.get(`https://genius.p.rapidapi.com/search?q=${song}`, {
      headers: {
        "x-rapidapi-key": `${process.env.GENIUS_KEY}`,
        "x-rapidapi-host": "genius.p.rapidapi.com",
      },
    })
    const results = response.data.response.hits
    return results
  } catch (err) {
    console.log(err)
  }
}

module.exports = searchLyrics;