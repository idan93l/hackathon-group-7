
const express = require('express')
const app = express()
const cors = require('cors')
const path = require("path")
require('dotenv').config()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : true}))
require("./db/mongoose")


app.get('/', (req,res) => {
  res.send("hello world")
})

// const axios = require("axios");
// const options = {
//   method: 'POST',
//   url: 'https://microsoft-translator-text.p.rapidapi.com/BreakSentence',
//   params: {'api-version': '3.0'},
//   headers: {
//     'content-type': 'application/json',
//     'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
//     'x-rapidapi-key': 'bf0e3fc0b0msh8b84c2a74c57412p120a53jsn6881e05563bc'
//   },
//   data: [{Text: 'How are you? I am fine. What did you do today?'}]
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

console.log("proccess", process.env.PORT);
const publicPath = path.join(__dirname, "../client/build");
app.use(express.static(publicPath));



app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))