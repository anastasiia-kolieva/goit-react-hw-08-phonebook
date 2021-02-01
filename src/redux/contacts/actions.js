import { createAction } from '@reduxjs/toolkit';
import actionsTypes from './types';

const fetchContactsRequest = createAction('phonebook/fetchContactsRequest');
const fetchContactsSuccess = createAction('phonebook/fetchContactsSuccess');
const fetchContactsError = createAction('phonebook/fetchContactsError');

const contactFormSubmithandlerRequest = createAction(
  'phonebook/contactFormSubmithandlerRequest',
);
const contactFormSubmithandlerSuccess = createAction(
  'phonebook/contactFormSubmithandlerSuccess',
);
const contactFormSubmithandlerError = createAction(
  'phonebook/contactFormSubmithandlerError',
);

const handelDeleteContactRequest = createAction(
  'phonebook/handelDeleteContactRequest',
);
const handelDeleteContactSuccess = createAction(
  'phonebook/handelDeleteContactSuccess',
);
const handelDeleteContactError = createAction(
  'phonebook/handelDeleteContactError',
);

const changeFilter = createAction(actionsTypes.changeFilter);

export {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  contactFormSubmithandlerRequest,
  contactFormSubmithandlerSuccess,
  contactFormSubmithandlerError,
  handelDeleteContactRequest,
  handelDeleteContactSuccess,
  handelDeleteContactError,
  changeFilter,
};
