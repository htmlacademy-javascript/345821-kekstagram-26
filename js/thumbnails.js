import {bigPictureFullscreen} from './bigpicture.js';

const photoListElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgFilters = document.querySelector('.img-filters');


const photoListFragment = document.createDocumentFragment();

const clearPicturesList = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((element) => element.remove());
};

const makePhotos = (pictures) => {
  if (imgFilters.classList.contains('img-filters--inactive')) {
    imgFilters.classList.remove('img-filters--inactive');
  }
  pictures.forEach((picture) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    photoElement.addEventListener('click', () => bigPictureFullscreen(picture));
    photoListFragment.appendChild(photoElement);
  });
  clearPicturesList();
  photoListElement.appendChild(photoListFragment);
};


export {makePhotos};
