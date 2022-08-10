const express = require("express");
// const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");

// const app = express();

// const fetch = require("node-fetch");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const port = 5000;

const cors = require("cors");

// const fetch = require("node-fetch");

const app = express();

const AnimeSpot = require("./models/animeModel");

let resultData;
let saveCounter = 0;

const mgurl =
  "mongodb+srv://mernprada:mernyprada@cluster0.npyx6.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mgurl)
  .then(() => console.log("mongodb connection success"))
  .catch((error) => console.log(error));

const apiurl = "https://anime-db.p.rapidapi.com/anime?page=1&size=10";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

// const api = [{
//   "https://anime-db.p.rapidapi.com/anime?page=1&size=30&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc"}
//     {options}
// ];
const api = fetch(apiurl, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));

const ans = [api];

ans.map(async function getdata(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    resultData = { ...data };
    console.log(resultData);

    for (let i = 0; i < resultData.length; i++) {
      let animeSpot = new AnimeSpot({
        title: resultData[i].title,
        ranking: resultData[i].ranking,
        episodes: resultData[i].episodes,
        // thumb: resultData[i].thumb,
        status: resultData[i].status,
      });

      animeSpot.save(() => {
        console.log("saved" + animeSpot);

        saveCounter++;

        if (saveCounter === resultData.length) {
          mongoose
            .disconnect()
            .then(() =>
              console.log("saved succesfully and mongodb   disconnected")
            )
            .catch((error) => console.log(error));
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("this is working");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
