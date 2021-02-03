import { combineReducers } from 'redux';
import {
  configureStore,
  createReducer,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as actions from './contacts/actions';
import actionsTypes from './contacts/types';
import authReducer from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const itemsReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,
  [actions.handelDeleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
  [actions.contactFormSubmithandlerSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
});

const filterReducer = createReducer('', {
  [actionsTypes.changeFilter]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
});

const persistor = persistStore(store);

const phonebookStore = { store, persistor };

export default phonebookStore;
