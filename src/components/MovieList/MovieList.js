import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Item } from './MovieList.styled';



export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(movie => (
        <Item key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            cover={movie.poster_path}
          >
            {movie.title}
          </Link>
        </Item>
      ))}
    </ul>
  );
};
