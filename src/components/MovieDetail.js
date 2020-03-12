import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService";

export const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = useState({});

  const requestMoviews = async () => {
    const movieDetailResul = await MoviesService.getMovieId(props.match.params.id);
    setMovieDetail(movieDetailResul.data);
  };

  useEffect(() => {
    requestMoviews();
  }, {});

  return (
    <div>
      Detalhes:
      <br></br>
      Titulo Original - {movieDetail.original_title}
      <br></br>
      Titulo - {movieDetail.title}
      <br></br>
    </div>
  );
};
