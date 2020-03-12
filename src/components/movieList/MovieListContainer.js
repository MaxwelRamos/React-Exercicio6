import React, { useState, useEffect } from "react";
import { MovieListView } from "./MovieListView";
import { MoviesService } from "../../services/MoviesService";


export const MovieListContainer = () => {
  const [movies, setMovies] = useState({ data: { results: [] } });

  const requestMoviews = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    setMovies(moviesResult);
  };

  useEffect(() => {
    requestMoviews();
  }, []);

  return <MovieListView movies={movies} />

};
