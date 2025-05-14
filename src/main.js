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
  showLoadMore,
  hideLoadMore,
} from './js/render-functions.js';

const loadMoreBtn = document.querySelector('.load-more-btn');
const form = document.querySelector('.form');
const input = form.querySelector("[name='search-text']");

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', onSubmitBtn);
loadMoreBtn.addEventListener('click', onLoadMoreBtn);

async function onSubmitBtn(event) {
  event.preventDefault();

  currentQuery = input.value.trim();

  if (!currentQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please fill in this field',
      position: 'topRight',
    });
    return;
  }
  currentPage = 1;
  showLoader();
  clearGallery();
  try {
    const data = await getImages(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'No Results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
      if (data.totalHits <= currentPage * 15) {
        hideLoadMore();
      } else {
        showLoadMore();
      }
    }
  } catch (err) {
    console.error(err);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}
async function onLoadMoreBtn() {
  currentPage += 1;
  showLoader();

  try {
    const data = await getImages(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'No More Results',
        message: 'Sorry, there are no more images.',
        position: 'topRight',
      });
      hideLoadMore();
    } else {
      createGallery(data.hits);

      const scrollGallery = document.querySelector('.gallery-item');
      if (scrollGallery) {
        const cardHeight = scrollGallery.getBoundingClientRect().height;
        window.scrollBy({
          top: cardHeight * 2,
          behavior: 'smooth',
        });
      }

      if (data.hits.length < 15 || data.totalHits <= currentPage * 15) {
        hideLoadMore();
        iziToast.info({
          title: 'End',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });
      }
    }
  } catch (err) {
    console.error(err);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
