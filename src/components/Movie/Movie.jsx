import React from "react";
import { useState } from "react";
import "../App.css";

const Movie = ({ movies }) => {
  console.log();
  return (
    <article className="movie">
      <div>
        <p>{movies.Year}</p>
      </div>
      <div>
        <img
          src={
            movies.Poster !== "N/A"
              ? movies.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movies.Title}
        />
      </div>
      <div>
        <span>{movies.Type}</span>
        <h3>{movies.Title}</h3>
      </div>
    </article>
  );
};

export default Movie;