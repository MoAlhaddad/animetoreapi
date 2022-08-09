
import logo from '../logo.svg';
import '../App.css';
import React, {useState, createContext, useEffect} from 'react';
// import { useState} from 'react-router-dom';
import Navbar from "./Navbar.jsx";
import ReactDOM from 'react';
import SearchBar from './Searchbar';
// import Search from './Search';
import Card from './Card';

import { useNavigate } from "react-router-dom";

import { FaStar } from 'react-icons/fa';

const Name = createContext();

export default function Animes() {

const [animes, setAnimes] = useState([]);
const [searchResults, setSearchResults] = useState("");
const [genres, setGenres] = useState(null);
const [rank, setRank] = useState("");
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);

const [q, setQ] = useState("");

const [searchParam] = useState(["title", "rank"]);

// useEffect(() => {
//   fetch
// })

const handleClick = () => {
  navigate('/', {replace: true})
};


// const Name = createContext();


// const Searchbar1 = () => {
//   return (
//     <>
//       <Name.Provider value={fetchAnime}>
//         <SearchBar />
//       </Name.Provider>
//     </>
//   )
// }


  // const apiURL = 'https://animechan.vercel.app/api/available/anime';

  const useFetchAnime = () => {

    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e',
        'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
      }
    };
    
    fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=30&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
	.then(anime => anime.json())
	.then(anime =>  {
    console.log(anime)

    setAnimes(anime.data)

    
  }
  


  )
  
	.catch(err => console.error(err));
  };

 console.log(setAnimes);

//  const search = setAnimes(anime.data);

  const Name = createContext();

 

   
  function Searchbar1(animes)  {
    return animes.filter((anime) => {
      return searchParam.some((newAnime) => {
        return (
          anime[newAnime]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) >  -1
        );
      })
    })
  }

  let navigate = useNavigate();

  return (
<div className="animecomp">
<Navbar />
<h1 style={{color: "hotpink"}}>Anime Characters</h1>
{/* <Navbar /> */}
<h2 style={{color: "hotpink"}}>Fetch a list from an API and display it</h2>


{/* Fetch data from API */}
<div>
  <input type="text" />
  <button className="fetch-button" onClick={useFetchAnime}>Fetch Data</button>
  <br />
  
  
</div>

<div className='inputwithButton'>
  <input placeholder="Search by Rank" onChange={event => setRank(event.target.value)}/>
  <button>Search</button>
</div>

<div>
  {/* <button className="back-button" onClick={() => this.props.navigation.goBack()}>Back</button> */}

    <button className="back-button" onClick={handleClick}> Back </button>
</div>
<div className="tc bg-green ma0 pa4 min-vh-100">
{/* <Search animes="anime from first component" /> */}
{/* Display data from API */}

{/* Use JSX below for each Anime */}

<div className="searchbar">
  Search for Anime
</div>

</div>
{/* <>
  <SearchBar animes={animes} setSearchResults={setSearchResults} />
</> */}

<div className="animes">
  {animes && 
   animes.map((anime, index) => {
    const cleanedData = new Date(anime.status).toDateString();
    // const genre = anime.genre.join(", ");

    return (
      
  
     
    <div className="anime" key={index}>
      <Card data={setAnimes} />
    {/* <h3>Anime {index + 1}</h3> */}
    <h2>{anime.title}</h2>

    <div className="details">
      {/* <p>👨{anime.genre}</p> */}
      <p>{anime.ranking} <FaStar /> </p>
      <p>📖Episodes: {anime.episodes}</p>
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

export {Name};





// export default Animes