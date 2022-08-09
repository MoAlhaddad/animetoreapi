const asyncHandler = require("express-async-handler");
const axios = require('axios');
const Promise = require("bluebird");

const config = require('../config');


const Anime = require("../models/animeModel");

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e',
//       'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=30&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
//   .then(anime => anime.json())
//   .then(anime =>  {
//   console.log(anime)

//   setAnimes(anime.data)

// @desc Get Animes



export const getAnimes = asyncHandler(async, (req, res) => {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      };
      
    const animes = await axios.get('https://anime-db.p.rapidapi.com/anime?page=1&size=30&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)

    return res.status(200).json({animes: animes.data.results});
});

