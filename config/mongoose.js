const mongoose = require("mongoose");
require("dotenv/config");

mongoose
  .connect(process.env.Mongo_URL)
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
