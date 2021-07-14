import React from "react";
import { actors } from "../data";

function Actors() {

  //actors.map(actor => <div>{actor.name} <ul>{actor.movies.map( movie => <li>{movie}</li>)}</ul></div>)

  return (
    <div>
    <h1>Actor's Page</h1>
    { actors.map(actor => <div key={actor.name}>{actor.name} <ul>{actor.movies.map( movie => <li key={movie}>{movie}</li>)}</ul></div>)}
    </div>)
}

export default Actors;
