import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const user = createReducer(initialUserState, {});

const token = createReducer(null, {});

const error = createReducer(null, {});

// const rootReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// const store = configureStore({
//   reducer: {
//     contacts: rootReducer,
//   },
// });

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
