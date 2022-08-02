
import logo from '../logo.svg';
import '../App.css';
import React, {useState} from 'react';
// import { useState} from 'react-router-dom';
import Navbar from "./Navbar.jsx";
import ReactDOM from 'react';

export default function Animes() {

const [animes, setAnimes] = useState(null);


  // const apiURL = 'https://animechan.vercel.app/api/available/anime';

  const fetchAnime = () => {

    // const [animes, setAnimes] = useState(null);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };
    
    fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
	.then(response => response.json())
	.then(response => {
    console.log(response)
    
    setAnimes(response.data)
  }
  )
	.catch(err => console.error(err));
  };



  return (
<div className="animecomp">
{/* <Navbar /> */}
<h1 style={{color: "hotpink"}}>Anime Characters</h1>
{/* <Navbar /> */}
<h2 style={{color: "hotpink"}}>Fetch a list from an API and display it</h2>

{/* Fetch data from API */}
<div>
  <button className="fetch-button" onClick={fetchAnime}>Fetch Data</button>
  <br />
</div>

{/* Display data from API */}

{/* Use JSX below for each book */}
<div className="animes">
  {animes && 
   animes.map((anime, index) => {
    const cleanedData = new Date(anime.status).toDateString();
    // const genre = anime.genre.join(", ");

    return (
    <div className="anime" key={index}>
    <h3>Anime {index + 1}</h3>
    <h2>{anime.title}</h2>

    <div className="details">
      {/* <p>👨{genre}</p> */}
      <p>{anime.rank} </p>
      <p>📖: {anime.episodes}</p>
      <img src={anime.thumb} alt="icons" />  
      <p>{anime.status}</p>
    </div>
  </div>
    );
})}
 

</div>

{/* <ScotchInfoBar seriesNumber="7" /> */}
</div>
);

}







// export default Animes