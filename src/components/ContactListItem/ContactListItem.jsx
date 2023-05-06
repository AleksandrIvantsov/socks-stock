import PropTypes from 'prop-types';

export const ContactListItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  ));
};

ContactListItem.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};
