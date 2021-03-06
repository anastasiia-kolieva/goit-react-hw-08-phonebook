import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import s from '../ContactList/ContactList.module.css';
import * as operations from '../../redux/contacts/operations';
import { getfilteredContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={s.li}>
          {contact.name}: {contact.number}
          <Button
            variant="contained"
            color="secondary"
            className={s.button}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }),
  ),
};

const mapStateToProps = state => {
  return {
    contacts: getfilteredContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: contactId =>
      dispatch(operations.handelDeleteContact(contactId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
