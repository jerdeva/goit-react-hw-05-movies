import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { MovieList } from '../MovieList/MovieList';
import { getTrendingMovies, getTrendingMoviesWeek } from '../Api/Api';

import { MainTitle, Wrapper } from './Home.styled';



const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingMoviesWeek, setTrendingMoviesWeek] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const moviesWeek = await getTrendingMoviesWeek();
          setTrendingMoviesWeek(moviesWeek);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);

  return (
    <>
      <Wrapper>
        <MainTitle>Trending Movies Today:</MainTitle>
        <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
          {trendingMovies.length === 0 ? (
            <Skeleton
              count={15}
              style={{ height: 30, width: 300, marginTop: 15 }}
            />
          ) : (
            <>
              <MovieList films={trendingMovies} />
              <MainTitle>Trending Movies Week:</MainTitle>
              <MovieList films={trendingMoviesWeek} />
            </>
          )}
        </SkeletonTheme>
      </Wrapper>
    </>
  );
};

export default Home;
