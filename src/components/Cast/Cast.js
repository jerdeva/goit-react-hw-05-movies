import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../Api/Api';
import placeholder from './placeholder.jpg';

import {
  MovieCastTitle,
  ListOfActors,
  ImageWrapper,
  ItemOfActors,
  ActorName,
} from './Cast.styled';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <MovieCastTitle>Movie Cast</MovieCastTitle>
          <ListOfActors>
            {cast.map(actor => (
              <ItemOfActors key={actor.id}>
                <ImageWrapper
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${placeholder}`
                  }
                  alt={actor.original_name}
                />
                <ActorName>{actor.name}</ActorName>
              </ItemOfActors>
            ))}
          </ListOfActors>
        </div>
      )}
      {cast.length === 0 && <div>We don't have cast for this movie.</div>}
    </>
  );
};

export default Cast;
