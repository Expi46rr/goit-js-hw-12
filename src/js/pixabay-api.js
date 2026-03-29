import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55066237-5cfe5caa7f2d484b58f1c4e04';

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}