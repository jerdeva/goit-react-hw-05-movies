import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {MovieList} from '../MovieList/MovieList';
import { getTrendingMovies } from '../Api/Api'

import {MainTitle} from './Home.styled'


 const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();  }, []);

  return (
    <div>
      <MainTitle>Trending Movies</MainTitle>
      <SkeletonTheme baseColor="#dddddd" highlightColor="#a5a5a5">
        {trendingMovies.length === 0 ? (
          <Skeleton
            count={15}
            style={{ height: 30, width: 300, marginTop: 15 }}
          />
        ) : (
          <MovieList films={trendingMovies} />
        )}
      </SkeletonTheme>
    </div>
  );
 };

export default Home;
