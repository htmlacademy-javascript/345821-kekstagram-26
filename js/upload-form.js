// импортирование функций из других модулей
import { isEscapeKey } from './util.js';
import {  onSmallerClick , onBiggerClick, resetScale } from './scale-slider.js';
import { isUploadFormValid } from './validation.js';
import { changeEffect } from './photo-effect.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

// переменные для взаимодействия с DOM
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const uploadSelectImage = document.querySelector('#upload-select-image');
const form = document.querySelector('.img-upload__form');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level');

// функция закрытия модульного окна
const closeModal = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadSelectImage.reset();
  form.reset();
  resetScale();
  imagePreview.style.filter = null;
  removeEventListener();
  if (document.querySelector('.pristine-error')) {
    document.querySelector('.pristine-error').innerHTML='';
  }
};

//функция открытия модульного окна
const openModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  effectLevel.classList.add('hidden');
  addEventListener();
};

// функция закрытие модульного окна кнопкой esc
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !evt.target.closest('.text__hashtags') && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeModal();
  }
};

//функция закрытия модульного окна по клику
const onUploadCancelClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

const onSliderChange = (evt) =>{
  evt.preventDefault();
  changeEffect(evt.target.value);
};


function removeEventListener() {
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadCancel.removeEventListener('click', onUploadCancelClick);
  scaleControlSmaller.removeEventListener('click', onSmallerClick);
  scaleControlBigger.removeEventListener('click', onBiggerClick);
  effectsList.removeEventListener('change', onSliderChange);
}

function addEventListener() {
  document.addEventListener('keydown',onDocumentKeydown);
  uploadCancel.addEventListener('click',  onUploadCancelClick);
  scaleControlSmaller.addEventListener('click', onSmallerClick);
  scaleControlBigger.addEventListener('click', onBiggerClick);
  effectsList.addEventListener('change', onSliderChange);
}

const onInputUploadFormChange = (evt) => {
  evt.preventDefault();
  const file = uploadFile.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imagePreview.src = URL.createObjectURL(file);
    openModal();
  }
};


const onFormSubmit = (evt) => {
  if (!isUploadFormValid()) {
    evt.preventDefault();
  }
};

const uploadPhotoForm = () => {
  uploadFile.addEventListener('change', onInputUploadFormChange);
  form.addEventListener('submit', onFormSubmit);
};

export {uploadPhotoForm};
