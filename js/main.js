
function getRandomArrayElement(elements) {
  return elements[getRandomInt(0, elements.length - 1)];
}

// функция на соотвествие длинны текста в сообщении
function validateLength(value, max){
  return value.length <= max;
}
validateLength('ggggg', 10);

//функция возвращающая рандомное число
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+min;
}

function shuffleArray(array){
  let newArray = [];
  const x = Math.floor(Math.random()* (array.length));
  for(let i= array.length - 1; i > 0 ; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  newArray = array.slice(x);
  return newArray;
}
//массив с описаниями к фотографиям
const PhotoDescription = [
  'копая картошку в клумбе',
  'на отдыхе в Капотне',
  'На шашлыках на Манежной площади',
  'Играю в хоккей на пляжу',
  'на отдыхе в Египте',
  'Я построил дом'
];

// массив с именнами авторов
const userNames = [
  'Василий',
  'Петр',
  'Степан Разин',
  'Нестор Махно',
  'Алексей',
  'Даниил'
];

// массив с комментариями под фото
const photoComments = [
  'В целом всё неплохо. Но не всё.',
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];


// задаем количество создаваемых фотографий
let UserPhotoCount = 25;


const createPhotoComments = (_,index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: shuffleArray(photoComments).slice(0, getRandomInt(1, photoComments.length)),
  name: getRandomArrayElement(userNames)
});


const createPhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(PhotoDescription),
      likes: getRandomInt(15, 200),
      comments: Array.from({length:7}, createPhotoComments)
    });
  }
};

const userPhoto = Array.from({length: UserPhotoCount}, createPhotos);
console.log(userPhoto)
