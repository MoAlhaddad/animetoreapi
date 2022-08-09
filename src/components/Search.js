import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import { Card, Input, Item } from "semantic-ui-react";

import "../App.css";

export default function Search() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const [Animes, setAnimes] = useState([]);

  // console.log(animes);

  //     set search query to empty string
  const [q, setQ] = useState("");

  const [searchParam] = useState(["title", "rank"]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7e7a56560cmshcd1a3aca6d26ae7p1919e3jsnf545c90fe80e",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    fetch(
      "https://anime-db.p.rapidapi.com/anime?page=1&size=30&search=&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc",
      options
    ).then((res) => {
      setAnimes(res.data);
    });
    //   .then(
    //     (result) => {
    //         setIsLoaded(true);
    //         setAnimes(result)
    //     },
    //     (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //     }
    //   );
  }, []);

  const searchAnimes = (searchValue, Animes) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = Animes.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Animes);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchAnimes(e.target.value)}
      />
      <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Description>
                      {item.ranking}
                      {item.episodes}
                    </Card.Description>
                  </Card.Content>
                </Card>
              );
            })
          : Animes.map((item) => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{item.title}</Card.Header>
                    <Card.Description>
                      {item.ranking}
                      {item.episodes}
                    </Card.Description>
                  </Card.Content>
                </Card>
              );
            })}
      </Card.Group>
    </div>
  );

  // console.log(Object.values(animes));

  // const searchItems = () => {
  //     <Input icon='search'
  //             placeholder='Search...'
  //             onChange={(e) => searchItems(e.target.value)}
  //         />
  // }

  //     function find(animes) {

  //         return Object.values(animes).filter(anime => {
  //             return searchParam.some((newAnime) => {
  //             return (
  //                 anime[newAnime]
  //                     .toString()
  //                     .toLowerCase()
  //                     .indexOf(q.toLowerCase() > -1)
  //             );
  //             // return (anime[newAnime].indexOf(q.toLowerCase() > - 1))
  //         });
  //     })

  // }

  // if (error) {
  //     return (
  //     <p>
  //     {error.message}, if you get this error, the free API I used
  //     might have stopped working, but I created a simple example that
  //     </p>
  //     );
  // } else if (!isLoaded) {
  //     return <>loading...</>;
  // } else {
  //     return (
  //     <div className="wrapper">
  //                 <div className="search-wrapper">
  //                     <label htmlFor="search-form">
  //                         <input
  //                             type="search"
  //                             name="search-form"
  //                             id="search-form"
  //                             className="search-input"
  //                             placeholder="Search for..."
  //                             value={q}
  //                             /*
  //                             // set the value of our useState e
  //                             //  anytime the user types in the search box
  //                             */
  //                             onChange={(e) => setQ(e.target.value)}
  //                         />

  //                         <span className="sr-only"> Search Animes Here </span>
  //                         </label>

  //                         </div>
  //                         <ul className="card-grid">
  //                             {find(animes).map((anime) => (
  //                                 <li>
  //                                     <article className="card" key={anime.ranking}>
  //                                         <div className="card-image">
  //                                             <img src={anime.thumb} alt={anime.title} />
  //                                             </div>
  //                                             <div className="card-content">
  //                                     <h2 className="card-name">{anime.title}</h2>
  //                                     <ol className="card-list">
  //                                         <li>
  //                                             episodes:{" "}
  //                                             <span>{anime.episodes}</span>
  //                                             </li>
  //                                             <li>
  //                                                 status: {" "}
  //                                                <span> {anime.status} </span>
  //                                                  </li>
  //                                                  </ol>
  //                                                  </div>
  //                                                  </article>
  //                                                  </li>

  //                             ))}
  //                             </ul>
  //                             </div>
  //                             );
}
