import {userPhoto} from './data.js';
import {bigPictureFullscreen} from './bigpicture.js';

const photoListElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhotos = userPhoto(25);

const photoListFragment = document.createDocumentFragment();

const makePhotos = () => {
  createPhotos.forEach((picture) => {
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = picture.url;
    photoElement.querySelector('.picture__likes').textContent = picture.likes;
    photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
    photoElement.addEventListener('click', () => bigPictureFullscreen(picture));
    photoListFragment.appendChild(photoElement);
  });
  photoListElement.appendChild(photoListFragment);
};


export {makePhotos};
