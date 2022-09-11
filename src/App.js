import { useState, useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=462a37db';

const movie1 = {
    
        "Title": "Spider-Man: No Way Home",
        "Year": "2021",
        "imdbID": "tt10872600",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
    }


const App = () => {
    const [movies, setMovies ] = useState([]);

        const searchMovies = async (title) =>{
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            setMovies(data.Search);
        }

    useEffect(() => {
        searchMovies('Home');
        }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder="Search for movies" 
                value="Home" 
                onChange={() => {}}
                />
                <img src={SearchIcon} 
                alt="search" 
                onClick={() => {}}
                />
            </div>

            {
                movies?.length > 0
                ? (
                  <div className="container">
                    {movies.map((movie)=> (
                        <MovieCard movie={movie} />
                        ))}
                  </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )

            }   

        </div>
    );
}

export default App;