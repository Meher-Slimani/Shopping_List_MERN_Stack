const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const items = require("./routes/api/items");
const app = express();

// Setteing the .env to be usable
dotenv.config({ path: __dirname + "/config/.env" });

// Setting the body-parser
app.use(express.json());

// Coinnecting to the DB
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to the DB!!!")
);

// Use routes
app.use('/api/items', items);

// Settibng the server to be listening
app.listen(process.env.PORT, () =>
  console.log(`Listening on the port ${process.env.PORT}`)
);
