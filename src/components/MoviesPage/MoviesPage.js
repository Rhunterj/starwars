import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Character from '../Character/Character';

import "./MoviePage.css";

const MoviePage = () => {
  const { movieTitle } = useParams();
  const [movie, setMovie] = useState(false);

  async function fetchMovie() {
    const response = await fetch(`https://swapi.dev/api/films/${movieTitle}`);
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    fetchMovie(movieTitle);
  }, [movieTitle]);

  if (!movie) {
    return null;
  }

  return (
    <div className="moviePage">
      <Header />
      <h1>{movie.title}</h1>
      <p>Directed by: {movie.director}</p>
      <p>Produced by: {movie.producer}</p>
      <p>Released on: {movie.release_date}</p>
      <h3 className="movies">This movie includes the follower character: </h3>
      <div className="cardContainer">
        {movie.characters.map((char) => {
          return <Character key={char} char={char} />;
        })}
      </div>
    </div>
  );
};

export default MoviePage;
