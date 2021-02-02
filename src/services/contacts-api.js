import { getState } from 'react';
import authSelectors from '../redux/auth/auth-selectors';

const BASE_URL = 'https://goit-phonebook-api.herokuapp.com';

async function fetchContacts() {
  const state = getState();
  const persistedToken = state.auth.token;
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + persistedToken,
    },
  };

  try {
    const result = await fetch(`${BASE_URL}/contacts`, options);
    const data = result.json();
    return data;
  } catch (error) {
    throw error.message;
  }
}

async function addContacts(newContactToAdd) {
  const options = {
    method: 'POST',
    body: JSON.stringify(newContactToAdd),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: 'Bearer ' + authSelectors.getToken(),
    },
  };

  try {
    const result = await fetch(`${BASE_URL}/contacts`, options);
    const data = result.json();
    return data;
  } catch (error) {
    throw error.message;
  }
}

async function deleteContacts(contactId) {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + authSelectors.getToken(),
    },
  };

  try {
    const result = await fetch(`${BASE_URL}/contacts/${contactId}`, options);
    const data = result.json();
    return data;
  } catch (error) {
    throw error.message;
  }
}

const api = {
  fetchContacts,
  addContacts,
  deleteContacts,
};

export default api;
