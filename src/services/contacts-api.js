const BASE_URL = 'http://localhost:4040/contacts';

async function fetchContacts() {
  try {
    const result = await fetch(`${BASE_URL}`);
    const data = result.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function addContacts(newContactToAdd) {
  const options = {
    method: 'POST',
    body: JSON.stringify(newContactToAdd),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  try {
    const result = await fetch(`${BASE_URL}`, options);
    const data = result.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function deleteContacts(contactId) {
  const options = {
    method: 'DELETE',
  };

  try {
    const result = await fetch(`${BASE_URL}/${contactId}`, options);
    const data = result.json();
    return data;
  } catch (error) {
    throw error;
  }
}

const api = {
  fetchContacts,
  addContacts,
  deleteContacts,
};

export default api;
