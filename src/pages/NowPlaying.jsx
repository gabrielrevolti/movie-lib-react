import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const NowPlaying = () => {
  const [NowPlayingMovies, setUpcomingMovies] = useState([]);

  const getNowPlayingMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setUpcomingMovies(data.results);
  };

  useEffect(() => {
    const nowPlaying = `${moviesURL}now_playing?${apiKey}`;
    console.log(nowPlaying);
    getNowPlayingMovies(nowPlaying);
  }, []);

  console.log(NowPlayingMovies);

  return (
    <div className="container">
      <h2 className="title">Em cartaz:</h2>
      <div className="movies-container">
        {NowPlayingMovies.length > 0 &&
          NowPlayingMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default NowPlaying;