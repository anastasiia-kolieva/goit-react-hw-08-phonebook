import api from '../../services/contacts-api';
import * as actions from './actions';

const fetchContacts = () => (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;
  dispatch(actions.fetchContactsRequest());

  api
    .fetchContacts({ persistedToken })
    .then(data => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error.message)));
};

// Action-creator- это функция, в которую передаются аргументы. А из себя она возвращает
// функцию, которая получает dispatch(метод)
// Прослойка thunk смотрит: если тип action=функция, то она эту функцию просто вызывает. Если нет, она
// этот action отправляет дальше
// тоесть отправляется результат функции
// по результату http запроса, делается dispatch с результатами асинхронки(с данными) отправляешь action
const contactFormSubmithandler = newContact => (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;
  dispatch(actions.contactFormSubmithandlerRequest());

  api
    .addContacts(newContact, { persistedToken })
    .then(data => dispatch(actions.contactFormSubmithandlerSuccess(data)))
    .catch(error =>
      dispatch(actions.contactFormSubmithandlerError(error.message)),
    );
};

const handelDeleteContact = contactId => (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;
  dispatch(actions.handelDeleteContactRequest());

  api
    .deleteContacts(contactId, { persistedToken })
    .then(() => dispatch(actions.handelDeleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.handelDeleteContactError(error.message)));
};

export { fetchContacts, contactFormSubmithandler, handelDeleteContact };
