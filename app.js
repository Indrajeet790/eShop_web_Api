const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = 4000;

// database
require("./config/mongoose");

// middleware
app.use(bodyParser.json());
app.use(morgan("tiny"));

// required env
require("dotenv/config");

// require routes
app.use("/api/v1", require("./routes/index"));

app.listen(PORT, (err) => {
  if (err) {
    console.log("error to run server");
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
