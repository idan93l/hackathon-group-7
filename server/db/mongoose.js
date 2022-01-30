const mongoose = require('mongoose');
require("dotenv").config();

mongo_uri = process.env.MONGO_URI
console.log(mongo_uri);

mongoose.connect(mongo_uri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

