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
  Pagination,
  Btn,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const actorsPerPage = 10;

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

  const indexOfLastActor = currentPage * actorsPerPage;
  const indexOfFirstActor = indexOfLastActor - actorsPerPage;
  const currentActors = cast.slice(indexOfFirstActor, indexOfLastActor);

  const totalPages = Math.ceil(cast.length / actorsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <MovieCastTitle>Movie Cast</MovieCastTitle>
          <ListOfActors>
            {currentActors.map(actor => (
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

          <Pagination>
            <Btn onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </Btn>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Btn
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Btn>
          </Pagination>
        </div>
      )}
      {cast.length === 0 && (
        <div>Sorry! We don't have cast for this movie.</div>
      )}
    </>
  );
};

export default Cast;
