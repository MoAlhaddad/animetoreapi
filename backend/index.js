const express = require("express");
// const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");

const app = express();

const port = 5000;

const cors = require("cors");

const url =
  "mongodb+srv://mernprada:mernyprada@cluster0.npyx6.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("connected to MongoDb");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("this is working");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
