import React from "react";
import { Route } from "react-router-dom";
// import { MovieDetail, MovieList  } from "./components";
import { MovieDetail } from "./components";
import { MovieListContainer } from "./components/movieList/MovieListContainer";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MovieListContainer} />
    <Route path="/movie/:id" exact component={MovieDetail} />
  </>
);