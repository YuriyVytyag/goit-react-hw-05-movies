import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '50b1b1393be81c5d35aa53448c7e33bf';
// const URL = process.env.REACT_APP_URL;

// axios.defaults.baseURL = URL;
export const getTrend = () => {
  const data = axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return data;
};

export const getMovie = query => {
  const data = axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return data;
};

export const getMovieDetails = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCredits = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const getMovieReview = id => {
  const data = axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};
