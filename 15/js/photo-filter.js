import {makePhotos} from './thumbnails.js';
import {debounce, shuffleArray} from './util.js';

const RERENDER_DELAY = 500;

const COUNT_RANDOM_PHOTO = 10;

const formElement = document.querySelector('.img-filters__form');
const filterButtons = document.querySelectorAll('.img-filters__button');

const removeActiveClass = () =>
  filterButtons.forEach((button) => button.classList.remove('img-filters__button--active'));

const sortPopularPhotos = (photos) => {
  const tempPhotos = photos.slice();
  tempPhotos.sort((elementA, elementB) => elementB.comments.length - elementA.comments.length);
  return tempPhotos;
};

const getRandomPhotos = (photos) => {
  const tempPhotos = photos.slice();

  return shuffleArray(tempPhotos).slice(0, COUNT_RANDOM_PHOTO);
};

const getFilteredPhotos = (photos, id) => {
  if (id === 'filter-random') {
    return getRandomPhotos(photos);
  }
  if (id === 'filter-discussed') {
    return sortPopularPhotos(photos);
  }
  return photos;
};

const drawFilteredPhotos = (photos) => {
  formElement.addEventListener(
    'click',
    debounce((evt) => {
      removeActiveClass();
      evt.target.classList.add('img-filters__button--active');
      makePhotos(getFilteredPhotos(photos, evt.target.id));
    }, RERENDER_DELAY),
  );
};

export {getFilteredPhotos, drawFilteredPhotos};
