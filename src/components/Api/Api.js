import axios from 'axios';

const API_KAY = '043e5f0af957ed407534eefdb77ba7dd';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    key: API_KAY,
    language: 'en-US',
  },
};

export const getTrendingMovies = async () => {
  const resp = await axios.get(`trending/all/day`, params);
  return resp.data.results;
};

export const searchMoviesByWord = async query => {
  const resp = await axios.get(`search/movie?query=${query}`, params);
  return resp.data.results;
};


export const getMovieDetails = async movie_id => {
  const resp = await axios.get(`search/movie/${movie_id}`, params);
  return resp.data.results;
};


export const getMovieCredits = async movie_id => {
  const resp = await axios.get(`search/movie/${movie_id}`, params);
  return resp.data.results;
};

export const getMovieReviews = async movie_id => {
  const resp = await axios.get(`search/movie/${movie_id}`, params);
  return resp.data.results;
};