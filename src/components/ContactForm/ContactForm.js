import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from '../ContactForm/ContactForm.module.css';
import shortid from 'shortid';
import * as operations from '../../redux/operations';

export default function ContactForm({ onCheckUnique }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handelSubmit = event => {
    event.preventDefault();

    const isValidateForm = validateForm();

    if (!isValidateForm) {
      return;
    }

    dispatch(
      operations.contactFormSubmithandler({
        id: shortid.generate(),
        name,
        number,
      }),
    );

    resetForm();
  };

  const validateForm = () => {
    if (!name || !number) {
      alert('Some field is empty!');
      return false;
    }
    return onCheckUnique(name);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handelSubmit} autoComplete="off">
      <label className={s.label}>
        Name{' '}
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number{' '}
        <input
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.submit_button}>
        Add contact
      </button>
    </form>
  );
}
