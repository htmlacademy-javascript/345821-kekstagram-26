//переменные, которые находят нужные тэги для дальнейшего взаимодействия кода с разметкой
const bigPicture = document.querySelector('.big-picture');
const bigPictureUrl = document.querySelector('.big-picture__img img');
const pictureButtonClose = bigPicture.querySelector('.big-picture__cancel');
const pictureDescription = bigPicture.querySelector('.social__caption');
const pictureComments = document.querySelector('.social__comments');
const pictureCommentTemplate = bigPicture.querySelector('.social__comment');
const likesCount = bigPicture.querySelector('.likes-count');

// закрытие попапа
const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeEventListener();
};

// привязка клавиши esc
const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
};

const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

function removeEventListener() {
  document.removeEventListener('keydown', onDocumentKeydown);
  pictureButtonClose.removeEventListener('click', onCloseButtonClick);
}

function addEventListener() {
  document.addEventListener('keydown', onDocumentKeydown);
  pictureButtonClose.addEventListener('click', onCloseButtonClick);
}

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

// создаем фотографию
const fillBigPicture = (picture) => {
  pictureComments.innerHTML = '';
  bigPictureUrl.src = picture.url;
  bigPictureUrl.alt = picture.description;
  likesCount.textContent = picture.likes;
  pictureDescription.textContent = picture.description;
  renderComments(picture.comments);
};


const bigPictureFullscreen = (picture) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
  fillBigPicture(picture);
  addEventListener();
};

export {bigPictureFullscreen};
