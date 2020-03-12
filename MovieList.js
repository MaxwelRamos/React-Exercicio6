import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService";
import { Movie } from "./Movie";


export const MovieList = () => {
  const [movies, setMovies] = useState({ data: { results: [] } });

  const requestMoviews = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    setMovies(moviesResult);
  };

  useEffect(() => {
    requestMoviews();
  }, []);

  return (
    <ul>
      {movies.data.results.map(movie => (
        <li>
          <Movie
            title={movie.title}
            id={movie.id}
          />
        </li>
      ))}
    </ul>
  );
};
