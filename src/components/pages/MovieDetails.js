import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { searchMoviesByWord } from '../Api/Api';
import Button from '../Button/Button';
import { Loader } from '../Loader/Loader';

import {
  FilmNameTitle,
  UserScoreTitle,
  OverviewTitle,
  OverviewParagrapher,
  GenresTitle,
  ProductionCompaniesListTitle,
  AdditionalInformationTitle,
  WrapperOne,
  ImgWrapper,
  GeneralWrapper,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/');

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await searchMoviesByWord(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    movieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <Loader />;
  }

  const productionCompaniesList = movieDetails.production_companies?.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{
                maxHeight: 50,
                maxWidth: 200,
                marginRight: 30,
                marginTop: 10,
              }}
            />
          )}
        </li>
      )
  );

  const roundedPopularity = Math.round(movieDetails.vote_average * 10);

  return (
    <GeneralWrapper>
      <Link to={backLinkHref.current}>
        <Button text="Go back" />
      </Link>
      <WrapperOne backdrop={movieDetails.backdrop_path}>
        <ImgWrapper>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `opps`
            }
            alt={movieDetails.title}
            width={300}
          />
        </ImgWrapper>
        <div>
          <FilmNameTitle>{movieDetails.title}</FilmNameTitle>
          <UserScoreTitle>User score: {roundedPopularity}%</UserScoreTitle>
          <OverviewTitle>Overview</OverviewTitle>
          <OverviewParagrapher>{movieDetails.overview}</OverviewParagrapher>
          <GenresTitle>Genres</GenresTitle>
          <p>
            {movieDetails.genres.map(genre => (
              <span key={genre.id}> {genre.name}</span>
            ))}
          </p>
          {productionCompaniesList[0] !== null &&
            productionCompaniesList.length > 0 && (
              <>
                <ProductionCompaniesListTitle>
                  Production companies
                </ProductionCompaniesListTitle>
                <div>{productionCompaniesList}</div>
              </>
            )}
        </div>
      </WrapperOne>
      <hr />
      <AdditionalInformationTitle>
        Additional information
      </AdditionalInformationTitle>
      <Link to="cast">
        <Button text="Cast" />
      </Link>
      <Link to="reviews">
        <Button text="Reviews" />
      </Link>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </GeneralWrapper>
  );
};

export default MovieDetails;
