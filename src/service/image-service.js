import axios from 'axios';

const API_KEY = 'F8raCjIoJeuYSFXvDodMJZL6jPqDZ2uYVJsN3ZhwbJkhFL8aAqCzWJmr';
axios.defaults.baseURL = 'https://api.pexels.com/v1';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async (query, page) => {
  const { data } = await axios(`/search?query=${query}&page=${page}`)
  return data
};

