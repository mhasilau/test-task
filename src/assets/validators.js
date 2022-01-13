import { userEmailValid, userPhoneValid } from './regexp';

export const userEmailCheck = email => userEmailValid.test(email);
export const userPhoneCheck = phone => userPhoneValid.test(phone);
