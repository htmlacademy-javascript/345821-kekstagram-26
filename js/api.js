// сервер откуда получаем данные
const API_URL = 'https://26.javascript.pages.academy/kekstagram';

//функция отправки запроса на получение данных с сервера
const getData = (onSuccess, onError) => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((thumbnails) => {
      onSuccess(thumbnails);
    })
    .catch(onError);
};

// функция отправки данных на сервер
const sendData = (formData, onSuccess, onError) => {
  fetch(`${API_URL}`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(onError);
};

export {getData, sendData};
