import React from "react";
import { movies } from "../data";

function Movies() {


  //movies.map(movie => <div>{movie.title} <ul>{movie.genres.map(genre => <li>{genre}</li>)} </ul></div>)
  return (
    <div>
      <h1>Movie Page</h1>
    {movies.map(movie => <div key={movie.title}>{movie.title} <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)} </ul></div>)}
    </div>)
}

export default Movies;
