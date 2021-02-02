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
  [authActions.registerSuccess]: (_, action) => action.payload.user,
  [authActions.loginSuccess]: (_, action) => action.payload.user,
  [authActions.logoutSuccess]: () => initialUserState.user,
  [authActions.getCurrentUserSuccess]: (_, action) => action.payload,
});

// сюда будем записывать свойство token из responce
// в payload будет свойство token
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, action) => action.payload.token,
  [authActions.loginSuccess]: (_, action) => action.payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, action) => action.payload,
  [authActions.loginError]: (_, action) => action.payload,
  [authActions.logoutError]: (_, action) => action.payload,
  [authActions.getCurrentUserError]: (_, action) => action.payload,
});

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
