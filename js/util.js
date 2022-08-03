
// функция на соотвествие длинны текста в сообщении
function validateLength(value, max){
  return value.length <= max;
}
validateLength('google', 10);


// активирование клавиши escape
const isEscapeKey = (evt) => evt.key === 'Escape';

//функция для проверки уникальности
const checkUnique = (value) => {
  const n = value.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = i+1; j < n; j++) {
      if (value[ i ] === value[j]) {
        return false;
      }
    }
  }
  return true;
};

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

// функция от кекса
const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {validateLength, shuffleArray, isEscapeKey, checkUnique, debounce};
