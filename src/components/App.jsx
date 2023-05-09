import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm, ContactList, Filter } from 'components';
import socks from '../socks.json';

class App extends Component {
  state = {
    contacts: socks,
    filter: '',
  };

  // addContact = ({ name, number }) => {
  //   const duplicatedContact = this.state.contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );

  //   if (duplicatedContact) {
  //     return alert(`${duplicatedContact.name} is already in contacts`);
  //   }

  //   const newContact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   this.setState(({ contacts }) => ({
  //     contacts: [newContact, ...contacts],
  //   }));
  // };

  // deleteContact = contactId => {
  //   this.setState(({ contacts }) => ({
  //     contacts: contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.title.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <>
        <h1>Наявність шкарпеток</h1>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          // onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
