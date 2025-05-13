import axios from 'axios';

const PIXABAY_API_KEY = '50223295-78bd94e1186a988c12ff349b3';
const PIXABAY_BASE_URL = 'https://pixabay.com/api/';

export async function getImages(query, page = 1) {
  const params = {
    key: PIXABAY_API_KEY,
    q: query,
    safesearch: true,
    lang: 'en',
    image_type: 'photo',
    orientation: 'horizontal',
    page,
    per_page: 15,
  };

  const response = await axios.get(PIXABAY_BASE_URL, { params });
  return response.data;
}
