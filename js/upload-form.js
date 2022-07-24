import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadSelectImage = document.querySelector('#upload-select-image');
const form = document.querySelector('#upload-select-image');
const hashtagsData = form.querySelector('[name="hashtags"]');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');

const closeModal = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadSelectImage.reset();
  form.reset();
  removeEventListener();
  if (document.querySelector('.pristine-error')) {
    document.querySelector('.pristine-error').innerHTML='';
  }
};

const openModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !evt.target.closest('.text__hashtags') && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeModal();
  }
};

const onUploadCancelClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

function removeEventListener() {
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadCancel.removeEventListener('click', onUploadCancelClick);
}

function addEventListener() {
  document.addEventListener('keydown',onDocumentKeydown);
  uploadCancel.addEventListener('click',  onUploadCancelClick);
}

const onInputUploadFormChange = (evt) => {
  evt.preventDefault();
  openModal();
  addEventListener();
};

const formValidator = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const validateHashtag = (value) => value.trim().toLowerCase().split(' ');

formValidator.addValidator(hashtagsData, (value) => validateHashtag(value).length <= 5, 'Допускается не более пяти хэш-тегов');

formValidator.addValidator(hashtagsData, (value) => validateHashtag(value).every((item) => item.startsWith('#') || !item.length), 'Хэш-тег должен начинаться с символа #');

formValidator.addValidator(hashtagsData, (value) => validateHashtag(value).every((item) => item.length<=20 || !item.length), 'Mаксимальная длина хэш-тега 20 символов (вместе с #)');

formValidator.addValidator(hashtagsData, (value) => validateHashtag(value).every((item) =>/^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(item)|| !item.length), 'Хэш-тег должен содержать буквы и числа');

const isUploadFormValid = () => formValidator.validate();

const onFormSubmit = (evt) => {
  if (!isUploadFormValid()) {
    evt.preventDefault();
  }
};

const UploadPhotoForm = () => {
  uploadFile.addEventListener('change', onInputUploadFormChange);
  form.addEventListener('submit', onFormSubmit);
};

export {UploadPhotoForm};
