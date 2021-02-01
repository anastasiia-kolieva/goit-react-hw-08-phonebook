import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 * credentials - это данные пользователя
 */
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const responce = await axios.post('/users/signup', credentials);
    // прокидывает responce.data до редюсера. В responce.data лежит обьект со свойствами user и token.
    //  В payload будет свойство user и свойство token
    dispatch(authActions.registerSuccess(responce.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = credentials => dispatch => {};

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = () => dispatch => {};
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const getCurrentUser = () => (dispatch, getState) => {};

const operations = {
  register,
  logOut,
  logIn,
  getCurrentUser,
};
export default operations;
