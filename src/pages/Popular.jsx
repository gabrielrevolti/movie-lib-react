import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Popular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPopularMovies(data.results);
  };

  useEffect(() => {
    const popular = `${moviesURL}popular?${apiKey}`;
    console.log(popular);
    getPopularMovies(popular);
  }, []);

  console.log(popularMovies);

  return (
    <div className="container">
      <h2 className="title">Populares:</h2>
      <div className="movies-container">
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Popular;