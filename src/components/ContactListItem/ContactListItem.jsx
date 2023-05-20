// import { Button } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const ContactListItem = ({ contacts }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Назва</th>
          <th>Наявність</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.title}</td>
            <td className={contact.inStock ? css.inStock : css.outOfStock}>
              {contact.inStock ? 'є у наявності' : 'немає у наявності'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.array,
};
