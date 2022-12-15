import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

let formData = {};

fillingPreviousValues();

function fillingPreviousValues() {
  let savedMessage = localStorage.getItem(STORAGE_KEY);

  try {
    savedMessage = JSON.parse(savedMessage);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

  if (savedMessage) {
    if (savedMessage.email) {
      email.value = savedMessage.email;
      formData.email = savedMessage.email;
    }
    if (savedMessage.message) {
      message.value = savedMessage.message;
      formData.message = savedMessage.message;
    }
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
