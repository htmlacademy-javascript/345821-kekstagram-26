// задаем настройки эффектов согласно тз
const RANGE_OPTIONS = {
  'grayscale': {
    min: 0,
    max: 1,
    step: 0.1
  },
  'sepia': {
    min: 0,
    max: 1,
    step: 0.1
  },
  'invert': {
    min: 0,
    max: 100,
    step: 1
  },
  'blur': {
    min: 0,
    max: 3,
    step: 0.1
  },
  'brightness': {
    min: 1,
    max: 3,
    step: 0.1
  },
};

const FILTER_NAME = {
  'chrome': 'grayscale',
  'sepia': 'sepia',
  'marvin': 'invert',
  'phobos': 'blur',
  'heat': 'brightness'
};

const UNIT = {
  'invert': '%',
  'blur': 'px',
};

const effectLevel = document.querySelector('.effect-level');
const effectLevelValue= document.querySelector('.effect-level__value');
const imagePreview = document.querySelector('.img-upload__preview img');

const createScaleSlider = () => {
  noUiSlider.create(effectLevel, {
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
};

const changeEffect = (effectValue) => {
  if(effectValue === 'none') {
    effectLevel.noUiSlider.destroy();
    imagePreview.style = '';
    effectLevel.classList.add('hidden');
    return;
  }

  if (!effectLevel.noUiSlider) {
    createScaleSlider();
  }

  effectLevel.classList.remove('hidden');

  const effect = FILTER_NAME[effectValue];
  const { min, max, step } = RANGE_OPTIONS[effect];
  const unit = UNIT[effect] ? UNIT[effect] : '';

  imagePreview.className = '';

  effectLevel.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    start: max,
    step,
    connect: 'lower',
  });

  effectLevel.noUiSlider.on('update', () => {
    effectLevelValue.value = effectLevel.noUiSlider.get();
    imagePreview.style.filter =`${effect}(${effectLevelValue.value}${unit})`;
  });
};


export {changeEffect};
