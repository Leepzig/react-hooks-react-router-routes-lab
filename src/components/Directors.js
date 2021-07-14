import React from "react";
import { directors } from "../data";

function Directors() {

 // directors.map(director => <div>{director.name} <ul>{director.movies.map(movie => <li>{movie}</li>)}</ul></div>)

  return (
    <div>
      <h1>Director's Page</h1>
      {directors.map(director => <div key={director.name}>{director.name} <ul>{director.movies.map(movie => <li key={movie}>{movie}</li>)}</ul></div>)}
    </div>)
}

export default Directors;
