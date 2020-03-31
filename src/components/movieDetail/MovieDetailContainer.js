import React, { useState, useEffect } from "react";
import { MovieDetailView } from "./MovieDetailView";
import { MoviesService } from "../../services/MoviesService";

export const MovieDetailContainer = (props) => {
  const [movieDetail, setMovieDetail] = useState({});

  const requestMoviews = async () => {
    const movieDetailResul = await MoviesService.getMovieId(props.match.params.id);
    setMovieDetail(movieDetailResul.data);
  };

  useEffect(() => {
    requestMoviews();
  }, {});

  return <MovieDetailView movieDetail={movieDetail} />

};
