const form = document.querySelector('form');
const email = document.getElementById('user_email');
const emailError = document.querySelector('#user_email + span.emailError');

function showError() {
  emailError.textContent = 'You need to enter an email without any uppercase';
  emailError.className = 'emailError active';
}

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLocaleLowerCase()) {
    showError();
    event.preventDefault();
  }
});