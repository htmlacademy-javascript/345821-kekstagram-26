//Файл с тестовыми данными. После использования данных с сервера не используются!

import {getRandomArrayElement, getRandomInt, shuffleArray}  from './util.js';


//массив с описаниями к фотографиям
const PHOTO_DESCRIPTIONS = [
  'копая картошку в клумбе',
  'на отдыхе в Капотне',
  'На шашлыках на Манежной площади',
  'Играю в хоккей на пляжу',
  'на отдыхе в Египте',
  'Я построил дом'
];

// массив с именнами авторов
const USER_NAMES = [
  'Василий',
  'Петр',
  'Степан Разин',
  'Нестор Махно',
  'Алексей',
  'Даниил'
];

// массив с комментариями под фото
const PHOTO_COMMENTS = [
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


// задаем количество создаваемых фотографий
const USER_PHOTO_COUNT = 25;

//создаем объект комментария
const createPhotoComment = (_,index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: shuffleArray(PHOTO_COMMENTS).slice(0, getRandomInt(1, PHOTO_COMMENTS.length)),
  name: getRandomArrayElement(USER_NAMES)
});

//создаем объект фотографии
const createPhoto = (_,idx) => ({
  id: idx,
  url: `photos/${idx+1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: Array.from({length:7}, createPhotoComment)
});

const userPhoto = () => Array.from({length: USER_PHOTO_COUNT}, createPhoto);

export {userPhoto};
