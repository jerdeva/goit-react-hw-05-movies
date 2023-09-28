import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(movie => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
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
