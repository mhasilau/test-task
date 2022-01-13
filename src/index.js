import { userEmailCheck, userPhoneCheck } from './assets/validators';
import './styles/table.scss';
import './styles/form.scss';

const formCheck = document.querySelector('.form-check');
const aaa = document.querySelector('.email-hover');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

formCheck.addEventListener('submit', event => {
  event.preventDefault();
  check(email, phone);
})

const check = (email, phone) => {
  const valid = {
    userEmail: false,
    userPhone: false
  }

  userEmailCheck(email.value) ? valid.userEmail = true : valid.userEmail = false;
  userPhoneCheck(phone.value) ? valid.userPhone = true : valid.userPhone = false;
  const isFormValid = Object.values(valid).every( value => value);

  if (isFormValid) {
    alert('Your data is valid!')
  } else if (valid.userEmail && !valid.userPhone) {
    alert('Your phone is invalid!')
  } else if (!valid.userEmail && valid.userPhone) {
    document.getElementById('email').value = 'mikhail.hasilau@gmail.com';
    alert('Your email is invalid!');
  } else if (!isFormValid) {
    alert('All your data is invalid!')
  }
}

