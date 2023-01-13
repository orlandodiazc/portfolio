const formInputs = document.querySelectorAll('input, textarea');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const userMessage = document.getElementById('user_message');

function inputChange() {
  const formContentObj = { name: userName.value, email: userEmail.value, msg: userMessage.value };
  localStorage.setItem('formContent', JSON.stringify(formContentObj));
}

formInputs.forEach((elem) => {
  elem.addEventListener('input', inputChange);
});

function populateForm() {
  const formContent = JSON.parse(localStorage.getItem('formContent'));
  userName.value = formContent.name;
  userEmail.value = formContent.email;
  userMessage.value = formContent.msg;
}

if (localStorage.getItem('formContent')) {
  populateForm();
}
