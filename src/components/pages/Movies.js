import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getSearch } from '../Api/Api';
import { SearchForm } from '../SearchForm/SearchForm.js';
import { MovieList } from '../MovieList/MovieList.js';
import { ReviewsItemEmpty } from 'components/Reviews/Reviews.styled';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await getSearch(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <div>
      <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
        <SearchForm value={movieName} onChange={updateQueryString} />
        {loading ? (
          <Skeleton
            count={15}
            style={{ height: 30, width: 300, marginTop: 15 }}
          />
        ) : searchResults.length === 0 && movieName ? (
          <ReviewsItemEmpty>Sorry! Nothing found! Try again! </ReviewsItemEmpty>
        ) : (
          <MovieList films={searchResults} />
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Movies;
