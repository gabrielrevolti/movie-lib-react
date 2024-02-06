import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const getUpcomingMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setUpcomingMovies(data.results);
  };

  useEffect(() => {
    const upcoming = `${moviesURL}upcoming?${apiKey}`;
    console.log(upcoming);
    getUpcomingMovies(upcoming);
  }, []);

  console.log(upcomingMovies);

  return (
    <div className="container">
      <h2 className="title">Em breve:</h2>
      <div className="movies-container">
        {upcomingMovies.length > 0 &&
          upcomingMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Upcoming;