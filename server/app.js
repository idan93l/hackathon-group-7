const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
require("./db/mongoose");
const searchLyrics =  require("./genius")

searchLyrics("hurt");

app.post("/translate", (req, res) => {
  const options = {
    method: "POST",
    url: "https://microsoft-translator-text.p.rapidapi.com/translate",
    params: {
      to: "he",
      "api-version": "3.0",
      profanityAction: "NoAction",
      textType: "plain",
    },
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
      "x-rapidapi-key": `${process.env.TRANS_API_KEY}`,
    },
    data: [
      {
        Text: "I would really like to drive your car around the block a few times.",
      },
    ],
  };
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data[0].translations);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
