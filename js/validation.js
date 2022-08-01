import { checkUnique } from './util.js';

const form = document.querySelector('.img-upload__form');
const hashtagsData = form.querySelector('[name="hashtags"]');


const formValidator = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

//  настраиваем валидацию хештегов
const validateHashtag = (value) => value.trim().toLowerCase().split(' ');

formValidator.addValidator(hashtagsData, (value) => validateHashtag(value).length <= 5, 'Допускается не более пяти хэш-тегов');

formValidator.addValidator(hashtagsData, (value) => validateHashtag(value).every((item) => item.startsWith('#') || !item.length), 'Хэш-тег должен начинаться с символа #');

formValidator.addValidator(hashtagsData, (value) => validateHashtag(value).every((item) => item.length<=20 || !item.length), 'Mаксимальная длина хэш-тега 20 символов (вместе с #)');

formValidator.addValidator(hashtagsData, (value) => validateHashtag(value).every((item) =>/^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(item)|| !item.length), 'Хэш-тег должен содержать буквы и числа');

formValidator.addValidator(hashtagsData, (value) => checkUnique(validateHashtag(value)), 'Один и тот же хэш-тег не может быть использован дважды');

const isUploadFormValid = () => formValidator.validate();

export {isUploadFormValid};
