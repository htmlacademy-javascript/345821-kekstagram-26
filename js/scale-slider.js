//данные для настройки параметров слайдера
const BASE_SCALE_VALUE = 1;
const BASE_PERCENT = 100;
const SCALE_STEP_VALUE = 0.25;
const PERCENT_STEP = 25;
let percent = 100;
let scale = 1;

const scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const onSmallerClick = (evt)  =>{
  evt.preventDefault();
  if (percent <= PERCENT_STEP) {
    return;
  }
  scaleControlValue.value = `${percent - PERCENT_STEP}%`;
  imagePreview.style.transform = `scale(${scale - SCALE_STEP_VALUE})`;
  percent = percent - PERCENT_STEP;
  scale = scale - SCALE_STEP_VALUE;
};

const onBiggerClick = (evt)  =>{
  evt.preventDefault();
  if (percent >= BASE_PERCENT) {
    return;
  }
  scaleControlValue.value = `${percent + PERCENT_STEP}%`;
  imagePreview.style.transform = `scale(${scale + SCALE_STEP_VALUE})`;
  percent = percent + PERCENT_STEP;
  scale = scale + SCALE_STEP_VALUE;
};

const resetScale = () => {
  scaleControlValue.value = `${BASE_PERCENT}%`;
  imagePreview.style.transform = `scale(${BASE_SCALE_VALUE})`;
  percent = BASE_PERCENT;
  scale = BASE_SCALE_VALUE;
};

export { onSmallerClick , onBiggerClick, resetScale };
