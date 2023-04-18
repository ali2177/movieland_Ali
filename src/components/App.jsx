import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import Movie from "./Movie/Movie";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8030c197";

const App = () => {
  // States
  const [movies, setMovies] = useState([]);
  const [serachValue, setSerachValue] = useState("");

  // events handler
  const inputChangeHandler = (event) => {
    setSerachValue(event.target.value);
  };
  const searchClikHandler = () => {
    serchMovies(serachValue);
  };

  // fetch api
  const serchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(movies);
  };
  useEffect(() => {
    serchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <header className="search">
        <input
          placeholder="Enter yuor movie name"
          value={serachValue}
          onChange={inputChangeHandler}
        ></input>
        <img src={searchIcon} alt="search" onClick={searchClikHandler} />
      </header>

      {movies?.length > 0 ? (
        <main className="container">
          {movies.map((el) => (
            <Movie key={el.imdbID} movies={el} />
          ))}
        </main>
      ) : (
        <div className="empty">
          <h2>No movie found !</h2>
        </div>
      )}
    </div>
  );
};

export default App;
