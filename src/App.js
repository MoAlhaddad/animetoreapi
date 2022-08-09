import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, ReactDOM, Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Animes from "./components/Animes.js";
import SearchBar from './components/Searchbar';
// import ReactDOM from 'react';

function App(){

  // const [animes, setAnimes] = useState(null);

  // const apiURL = 'https://animechan.vercel.app/api/available/anime';

  // function fetchAnime() {

  //  <div className="wrapper"
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e',
  //       'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  //     }
  //   };
    
  //   fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
	// .then(response => response.json())
	// .then(response => {
  //   console.log(response)
    
  //   setAnimes(response.data)
  // }
  // )
	// .catch(err => console.error(err));
  // };


  return (
 <div className="App">



<Navbar />
 <h1 style={{color: "hotpink"}}>Anime Characters</h1> 





</div>


);

}

export default App;



// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

