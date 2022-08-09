import React from "react";
import Animes from "./Animes";
import Card from "./Card";

function SearchList({ filteredAnimes }) {
    const filtered = filteredAnimes.map(anime => <Card key={anime.name} anime={anime} />);

    return (
        <div>
            {filtered}
        </div>
    )
}

export default SearchList;