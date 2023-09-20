 import { Link, useLocation } from 'react-router-dom';
import React from 'react';



const MoveList = ({ movies }) => {
  const location = useLocation();


    return (
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`movie/${movie.id}`}
              state={{ from: location }}
              cover={movie.poster_path}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    );
};

export default MoveList;