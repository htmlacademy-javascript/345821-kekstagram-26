import {userPhoto} from './data.js';

const photoListElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhotos = userPhoto(25);

const photoListFragment = document.createDocumentFragment();

createPhotos.forEach(({url, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoListFragment.appendChild(photoElement);
});

photoListElement.appendChild(photoListFragment);

