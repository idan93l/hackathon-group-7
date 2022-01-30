
const express = require('express')
const app = express()
const cors = require('cors')
const path = require("path")
const axios = require("axios");
const searchLyrics = require("./genius")
require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
require("./db/mongoose")
const publicPath = path.join(__dirname, "../client/build");
app.use(express.static(publicPath));
searchLyrics("hurt");

app.post('/translate', (req, res) => {
    const { text } = req.body
    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: { to: 'ar', 'api-version': '3.0', profanityAction: 'NoAction', textType: 'plain' },
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.TRANS_API_KEY}`
        },
        data: [{ Text: text }]
    };
    axios.request(options).then(function (response) {
        res.status(200).send(response.data[0].translations)
    }).catch(function (error) {
        res.status(400).send(error);
    });
});

app.listen(process.env.PORT, () =>
    console.log(`listening on port ${process.env.PORT}`)
);
