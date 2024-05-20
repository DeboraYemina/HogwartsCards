import axios from 'axios'

const API = "https://harry-potter-api.onrender.com"

export const get = (path) => {
  const url = path ? `${API}/${path}` : API

  return axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error('No se encontró data:', error);
      throw error;
    });
};