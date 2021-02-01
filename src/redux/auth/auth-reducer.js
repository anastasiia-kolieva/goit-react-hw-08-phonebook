import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

// сюда будем записывать свойство user из responce
// в payload будет свойство user и свойство token
const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, payload) => payload.user,
});

// сюда будем записывать свойство token из responce
// в payload будет свойство user и свойство token
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, payload) => payload.token,
});

const error = createReducer(null, {});

// auth такого формата
export default combineReducers({ user, token, error });

// STORE:
// {
//     auth:{
//         user: user,
//         token:token,
//         error:error,
//     },
//     contacts:{
//         items: itemsReducer,
//         filter: filterReducer,
//     }
// }
