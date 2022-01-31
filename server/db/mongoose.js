const mongoose = require("mongoose");
const path = require ("path")
require("dotenv").config();


const mongo_uri = process.env.MONGO_URI;


mongoose
  .connect(mongo_uri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));
