const express = require("express");
// const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");
// const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const  userRoutes  = require('./routes/userRoute');
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const Schema = mongoose.Schema;
// const app = express();

// const fetch = require("node-fetch");
const app = express();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const port = 5000;

const cors = require("cors");
const { response } = require("express");

// const fetch = require("node-fetch");

// const AnimeSpot = require("./models/animeModel");

let resultData;
let saveCounter = 0;

const apiurl = "https://anime-db.p.rapidapi.com/anime?page=1&size=10";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e",
    "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
  },
};

const mgurl =
  "mongodb+srv://mernprada:mernyprada@cluster0.npyx6.mongodb.net/AnimeBankanimes?retryWrites=true&w=majority";

mongoose
  .connect(mgurl)
  .then(() => console.log("mongodb connection success"))
  .catch((error) => console.log(error));

const animeSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    _v: {
      type: Number,
      required: true,
    },
    // image: {
    //   type: URL,
    //   required: true
    // },
    ranking: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
    episodes: {
      type: Number,
      required: true,
    },
    status: { type: String, required: true },
  },
  // { timestamps: true }
  { collection: "animes" }
);

const Anime = mongoose.model("Anime", animeSchema);

// const apiurl = "https://anime-db.p.rapidapi.com/anime?page=1&size=10";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e",
//     "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
//   },
// };

// const api = [{
//   "https://anime-db.p.rapidapi.com/anime?page=1&size=30&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc"}
//     {options}
// ];
const api = fetch(apiurl, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));

// const ans = [api];

// ans.map(async function getdata(api) {
//   try {
//     const response = await fetch([...api]);
//     const data = await response.json();
//     resultData = { ...data };
//     console.log(resultData);

//     for (let i = 0; i < resultData.length; i++) {
//       let animeSpot = new AnimeSpot({
//         title: resultData[i].title,
//         ranking: resultData[i].ranking,
//         episodes: resultData[i].episodes,
//         // thumb: resultData[i].thumb,
//         status: resultData[i].status,
//       });

//       animeSpot.save(() => {
//         console.log("saved" + animeSpot);

//         saveCounter++;

//         if (saveCounter === resultData.length) {
//           mongoose
//             .disconnect()
//             .then(() =>
//               console.log("saved succesfully and mongodb   disconnected")
//             )
//             .catch((error) => console.log(error));
//         }
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

const getAnime = async function getAnimes(api) {
  const myAnimes = await fetch([...api]);
  const response = await myAnimes.json();
  // console.log(response);
  for (let i = 0; i < response.length; i++) {
    const newAnime = new Anime({
      _id: response[i]["_id"],
      _v: response[i]["_v"],
      title: response[i]["title"],
      ranking: response[i]["ranking"],
      // thumb: response[i]["thumb"],
      episodes: response[i]["episodes"],
      status: response[i]["status"],
    });
    newAnime
      .save()
      .then((anime) => {
        return res.status(201).json({ anime: anime });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
    // response[i]['ranking']
  }
};

console.log(getAnime);
// console.log()

app.use(express.urlencoded({ extended: true }));
//middlwares
app.use(express.json());
app.use(cors());


//routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

app.get("/", cors(), async (req, res) => {
  res.send("this is working");
});

app.get("/api/animes", (req, res) => {
  res.json(api);
});

app.use('/api/users', userRoutes);

app.use(notFound)
app.use(errorHandler)


app.post("api/anime", (req, res, next) => {
  const newAnime = new Anime({
    title: req.body.title,
    episodes: req.body.episodes,
  });
  newAnime
    .save()
    .then((anime) => {
      return res.status(201).json({ anime: anime });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
