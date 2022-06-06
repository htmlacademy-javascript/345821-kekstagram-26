function validateLength(value, max) {
  if(value){
    let len = value.length;
    if (len >= max){
      print 'длинна строки должна быть не больше' +max ;
    }

  }
  return null
}
validateLength('text', 140);

function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random()*(max-min+1))+min;
}

getRandomInt(1,9);
