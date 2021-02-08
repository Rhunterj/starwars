import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Results = ({ movies, filter, onClose }) => {
  const results = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="resultBox">
      {results.length === 0 && <p>Sorry, no results found</p>}
      {results.length > 0 &&
        results.map((result) => {
          return (
            <Link
              to={`/movies/${result.url.substring(27)}`}
              className="result"
              key={result.title}
              onClick={() => onClose()}
            >
              {result.title}
            </Link>
          );
        })}
    </div>
  );
};

const Header = () => {
  const [movies, setMovies] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  async function fetchMovies() {
    const response = await fetch(`https://swapi.dev/api/films/`);
    const data = await response.json();
    setMovies(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="searchContainer">
      <p>Search for your Star Wars movie:</p>
      <input
        autoComplete="off"
        className="searchbar"
        id="searchBarInput"
        onFocus={(e) => {
          if (e.currentTarget.value.length > 0) {
            setIsOpen(true);
          }
        }}
        onInput={(e) => {
          setQuery(e.currentTarget.value);
          if (query.length > 0) {
            setIsOpen(true);
          }
        }}
      />
      {query.length > 0 && isOpen && <Results movies={movies.results} filter={query} onClose={() => setIsOpen(false)}/>}
    </div>
  );
};

export default Header;
