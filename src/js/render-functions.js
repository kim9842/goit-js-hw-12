import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 350,
});

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
     <li class="gallery-item">
  <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" />
  </a>
  <div class="info">
    <p>
      <span class="label">Likes</span>
      <span class="value">${likes}</span>
    </p>
    <p>
      <span class="label">Views</span>
      <span class="value">${views}</span>
    </p>
    <p>
      <span class="label">Comments</span>
      <span class="value">${comments}</span>
    </p>
    <p>
      <span class="label">Downloads</span>
      <span class="value">${downloads}</span>
    </p>
  </div>
</li>

      `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.js-loader');
  loader.classList.remove('hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.js-loader');
  loader.classList.add('hidden');
}
