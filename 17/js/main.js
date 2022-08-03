// подключение модулей
import {makePhotos} from './thumbnails.js';
import {uploadPhotoForm} from './upload-form.js';
import {getData} from './api.js';
import {createErrorMessage} from './popups.js';
import {drawFilteredPhotos} from './photo-filter.js';


uploadPhotoForm();
getData((photos) => {
  makePhotos(photos);
  drawFilteredPhotos(photos);
}, createErrorMessage);

