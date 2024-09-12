import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Item, List, Title } from './MovieList.styled';

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(movie => (
        <Item key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            cover={movie.poster_path}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `opps`
              }
              alt={movie.title}
              width={200}
            />{' '}
            <Title>{movie.title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
};
