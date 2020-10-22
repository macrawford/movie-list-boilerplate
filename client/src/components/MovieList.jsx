import React from 'react';

var MovieList = (props) => (
  <div>
  {props.movies.map(movie => (
    <div>{movie.title}</div>))}
  </div>
)

// return (map(movie, () => (
//   <div>{props.movie.title}</div>
// )))

// return (
//   <div>
//     <div>{props.movies[0].title}</div>
//     <div>{props.movies[1].title}</div>
//     <div>{props.movies[2].title}</div>
//     <div>{props.movies[3].title}</div>
//     <div>{props.movies[4].title}</div>
//   </div>
// )

export default MovieList;