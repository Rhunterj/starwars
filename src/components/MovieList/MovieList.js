import React, { useEffect, useState } from "react";

const MovieList = ({film}) => {
  const [movie, setMovie] = useState(false);

  async function fetchMovies(movie) {
    const response = await fetch(movie);
    const data = await response.json();
    setMovie(data);
  }

  useEffect(() => {
    fetchMovies(film);
  }, []);

  if (!movie) {
    return null;
  }


  return (
    <p>{movie.title}</p>
  )
}

export default MovieList;