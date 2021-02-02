import { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { getContacts } from '../redux/contacts/contacts-selectors';
import * as operations from '../redux/contacts/operations';
import s from './styles.module.css';

export default function ContactsView() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // const isLoadingTodos = useSelector(todosSelectors.getLoading);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, []);

  const handelCheckUniqueContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist!');
    return !isExistContact;
  };

  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm onCheckUnique={handelCheckUniqueContact} />

      <h2 className={s.title}>Contacts</h2>

      <Filter />

      <ContactList />
    </Container>
  );
}
