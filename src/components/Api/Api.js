import axios from 'axios';

const API_KAY = '043e5f0af957ed407534eefdb77ba7dd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KAY,
    language: 'en-US',
  },
};

 const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  return response.data.results;
};

export const searchMoviesByWord = async query => {
  const response = await axios.get(`search/movie?query=${query}`, params);
  return response.data.results;
};


export const getMovieDetails = async movie_id => {
  const response = await axios.get(`search/movie/${movie_id}`, params);
  return response.data.results;
};


export const getMovieCredits = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/credits?`, params);
  return response.data.results;
};

export const getMovieReviews = async movie_id => {
  const response = await axios.get(`movie/${movie_id}/reviews?`, params);
  return response.data.results;
};


export default getTrendingMovies;