import React, { useEffect, useState } from 'react';
import getTrendingMovies from '../components/Api/Api';
import MoveList from '../components/MovieList'




export const Home = () => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMoviesList(movies);
      }
      catch (error) {
        console.log(error)
      }
    };
    getMovies();
  },[])

  return (
    <div>
      <h1>Trending today</h1>
        <MoveList movies={trendingMoviesList} />
    </div>
  )
};
