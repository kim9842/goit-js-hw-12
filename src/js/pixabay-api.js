import axios from 'axios';

const PIXABAY_API_KEY = '50223295-78bd94e1186a988c12ff349b3';
const PIXABAY_BASE_URL = 'https://pixabay.com/api/';

export function getImages(query) {
  const params = {
    key: PIXABAY_API_KEY,
    q: query,
    safesearch: true,
    lang: 'en',
    image_type: 'photo',
    orientation: 'horizontal',
  };

  return axios
    .get(PIXABAY_BASE_URL, { params })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
}
