function getRandomArrayElement(elements) {
  return elements[getRandomInt(0, elements.length - 1)];
}

// функция на соотвествие длинны текста в сообщении
function validateLength(value, max){
  return value.length <= max;
}
validateLength('google', 10);

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

export {getRandomArrayElement};
export {validateLength};
export {getRandomInt};
export {shuffleArray};
