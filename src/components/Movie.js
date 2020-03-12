import React from "react";
import { Link } from "react-router-dom";

export function Movie(props) {
  return (
    <div>
      <Link to={`/movie/${props.id}`}> {props.title}</Link>
    </div>
  );
}