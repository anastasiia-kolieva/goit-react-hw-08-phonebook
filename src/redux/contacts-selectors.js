import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

// с мемоизацией
export const getfilteredContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return filteredContacts;
  },
);

// export const getfilteredContacts = state => {
//   const items = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   const filteredContacts = items.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );

//   return filteredContacts;
// };
