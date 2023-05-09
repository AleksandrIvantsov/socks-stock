// import { Button } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import { Li, Span } from './ContactListItem.styled';

export const ContactListItem = ({ contacts }) => {
  return contacts.map(contact => (
    <Li key={contact.id}>
      <Span>{contact.title}</Span>
      {/* <Button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        onMouseDown={e => (e.target.style.backgroundColor = '#3e7fe9')}
        onMouseUp={e => (e.target.style.backgroundColor = 'transparent')}
      >
        Delete
      </Button> */}
    </Li>
  ));
};

ContactListItem.propTypes = {
  contacts: PropTypes.array,
};
