import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from '../Filter/Filter.module.css';
import * as actions from '../../redux/actions';
import { getFilter } from '../../redux/contacts-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={s.filter_title}>Find contacts by name</h2>
      <input
        type="text"
        placeholder="Enter contact name"
        className={s.filter_input}
        value={value}
        onChange={event => dispatch(actions.changeFilter(event.target.value))}
      ></input>
    </>
  );
}
