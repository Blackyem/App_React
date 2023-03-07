import { useEffect, useState } from "react";
import "./App.css"
import MovieCard from "./MovieCard";
import    SearchIcon from "./search.svg"

  //72646958

const API_URL = "http://www.omdbapi.com/?apikey=72646958&"

// const movie1 = {
//       "Title": "The Walking Dead",
//     "Year": "2010–2022",
//     "imdbID": "tt1520211",
//     "Type": "series",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
// }


const App = () => {
  const [movies, setMovies] = useState([]);
  const [ searchTerm, setSearchTerm] = useState("")
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

    useEffect(() => {
        searchMovies("power");
    }, []);

        return ( 
         <div className="app">
          <h1>MovieRoom</h1>
          <h3>Blackyem</h3>

          <div className="search">
             <input
               placeholder="Search for movies"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img 
                 src={SearchIcon}
                 alt="search"
                 onClick={() => searchMovies(searchTerm)}
               />
          </div>

           {movies?.length > 0
              ? (
                <div className="container">
                  {movies.map((movie) => (
                    <MovieCard movie={movie} /> 
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <h2>No movies found</h2>
                </div>
              )
          } 
               </div>

           ); 
         } 
    
  export default App;