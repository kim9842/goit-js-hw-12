// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.querySelector("[name='search-text']");
form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please fill in this field',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  getImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        createGallery(data.hits);
        iziToast.success({
          title: 'Success',
          message: `You found ${data.hits.length} images`,
          position: 'topRight',
        });
      }
    })
    .catch(err => {
      console.error(err);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
