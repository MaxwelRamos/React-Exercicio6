import React from "react";
import { Route } from "react-router-dom";
// import { MovieDetail, MovieList  } from "./components";
import { MovieDetailContainer } from "./components/movieDetail/MovieDetailContainer";
import { MovieListContainer } from "./components/movieList/MovieListContainer";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MovieListContainer} />
    <Route path="/movie/:id" exact component={MovieDetailContainer} />
  </>
);