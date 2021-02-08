import React, { useEffect, useState } from "react";
import MovieList from '../MovieList/MovieList';

import "./Character.css";

const Character = (character) => {
  const [char, setChar] = useState(false);
  async function fetchCharacters(person) {
    const response = await fetch(person);
    const data = await response.json();
    setChar(data);
  }

  useEffect(() => {
    fetchCharacters(character.char);
  }, []);

  if (!char) {
    return null;
  }

  return (
    <div className="characterCard" key={char.name}>
      <h3>{char.name}</h3>
      <p><b>Height:</b> {char.height}cm</p>
      <p><b>Gender:</b> {char.gender}</p>
      <div>
        <p><b>Plays in:</b></p>
        {char.films.map((film) => {
          return <MovieList key={film} film={film} />;
        })}
      </div>
    </div>
  );
};

export default Character