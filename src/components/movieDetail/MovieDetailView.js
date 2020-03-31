import React from 'react'

export const MovieDetailView = ({ movieDetail }) => {
    return (
        <div>
        Detalhes:
        <br></br>
        Titulo Original - {movieDetail.original_title}
        <br></br>
        Titulo - {movieDetail.title}
        <br></br>
      </div>
    )
}