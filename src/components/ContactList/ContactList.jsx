import { ContactListItem } from 'components';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      <ContactListItem contacts={contacts} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
