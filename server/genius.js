const axios = require ("axios");
const searchLyrics =  (song) => {
  axios.request(`https://genius.p.rapidapi.com/search?q=${song}`, {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${process.env.GENIUS_KEY}`,
    "x-rapidapi-host": "genius.p.rapidapi.com",
  },
})
  .then((response) => {
    // console.log(response.data.response.hits);
  })
  .catch((err) => {
    console.error(err);
  });
}

module.exports = searchLyrics;