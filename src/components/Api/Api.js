import axios from 'axios';

const API_KAY = '043e5f0af957ed407534eefdb77ba7dd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KAY,
    language: 'en-US',
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};

export const searchMoviesByWord = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  return response.data;
};

export const getSearch = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  return response.data.results;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`, params);
  return response.data.cast;
};

export const getMovieReviews = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/reviews?`, params);
  return response.data.results;
};
