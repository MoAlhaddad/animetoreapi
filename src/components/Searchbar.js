import {FiSearch} from 'react-icons/fi';
// import FetchA
import { Name } from './Animes';



export default function SearchBar({ animes, setSearchResults }) {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
                if(!e.target.value) return setSearchResults(animes)

                const resultsArray = animes.filter(anime => anime.title.includes(e.target.value))

                setSearchResults(resultsArray);
    }


    return(
        <>
        <header>
            <Name.Consumer>
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="Text"
                    id="search"
                    onChange={handleSearchChange}/>
                    <button className="search__button" icon={FiSearch}>

                    </button>
            </form>
            {(fname) => {
                return <h1> Anime is {fname}</h1>
            }}
            </Name.Consumer>
        </header>

        </>
    )
}
