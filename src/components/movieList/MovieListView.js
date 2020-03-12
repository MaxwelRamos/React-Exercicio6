import React from 'react'
import { Movie } from '../Movie'
// import { Movie } from "./../Movie";

export const MovieListView = ({ movies }) => {
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
    )
}