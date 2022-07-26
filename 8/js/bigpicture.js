import { isEscapeKey } from './util.js';

// лимит на количество отображаемых на странице комментариев
const COUNT_VIEW_COMMENTS = 5;

//переменные, которые находят нужные тэги для дальнейшего взаимодействия кода с разметкой
const bigPicture = document.querySelector('.big-picture');
const bigPictureUrl = document.querySelector('.big-picture__img img');
const pictureButtonClose = bigPicture.querySelector('.big-picture__cancel');
const pictureDescription = bigPicture.querySelector('.social__caption');
const pictureComments = document.querySelector('.social__comments');
const pictureCommentTemplate = bigPicture.querySelector('.social__comment');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialCommentsLoader = bigPicture.querySelector('.social__comments-loader');

let displayedComments = 0;
let comments;

// закрытие попапа
const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeEventListener();
};

// привязка клавиши esc
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !evt.target.closest('.social__footer-text')) {
    evt.preventDefault();
    closeModal();
  }
};

// активирование закрытие по клику
const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeModal();
};


const renderComments = (array) => {
  array.forEach((item) => {
    const comment = pictureCommentTemplate.cloneNode(true);
    const commentImg = comment.querySelector('.social__picture');
    commentImg.src = item.avatar;
    commentImg.alt = item.name;
    comment.querySelector('.social__text').textContent = item.message;
    pictureComments.append(comment);
  });
};

const updateCommentLoaderBtn = () => {
  if (displayedComments === comments.length) {
    socialCommentsLoader.classList.add('hidden');
    return;
  }
  socialCommentsLoader.classList.remove('hidden');
};

const showComments = (from, to) => {
  displayedComments = Math.min(to, comments.length);
  renderComments(comments.slice(from, displayedComments));
  socialCommentCount.textContent = `${displayedComments} из ${comments.length}`;
  updateCommentLoaderBtn();
};

const onCommentLoaderButtonClick = (evt) => {
  evt.preventDefault();
  showComments(displayedComments, displayedComments + COUNT_VIEW_COMMENTS);
};

function removeEventListener() {
  document.removeEventListener('keydown', onDocumentKeydown);
  pictureButtonClose.removeEventListener('click', onCloseButtonClick);
  socialCommentsLoader.removeEventListener('click', onCommentLoaderButtonClick);
}

function addEventListener() {
  document.addEventListener('keydown', onDocumentKeydown);
  pictureButtonClose.addEventListener('click', onCloseButtonClick);
  socialCommentsLoader.addEventListener('click', onCommentLoaderButtonClick);
}

// создаем фотографию
const fillBigPicture = (picture) => {
  pictureComments.innerHTML = '';
  bigPictureUrl.src = picture.url;
  bigPictureUrl.alt = picture.description;
  likesCount.textContent = picture.likes;
  pictureDescription.textContent = picture.description;
};


const bigPictureFullscreen = (picture) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  comments = picture.comments;
  fillBigPicture(picture);
  showComments(0, COUNT_VIEW_COMMENTS);
  addEventListener();
};
export {bigPictureFullscreen};
