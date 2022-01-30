const mongoose = require('mongoose');
require("dotenv").config();

mongo_uri = process.env.MONGO_URI

mongoose.connect(mongo_uri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

