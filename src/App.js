import { Component } from "react";
import shortid from "shortid";

import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filter } from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleSubmit = ({ name, number }) => {
    if (this.isInclude(name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState((prev) => {
      return {
        contacts: prev.contacts.concat({
          id: shortid.generate(),
          name,
          number,
        }),
      };
    });
  };

  contactFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  isInclude = (name) => {
    return this.state.contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  deleteContact = (e) => {
    const delIdx = this.state.contacts.findIndex((contact) => {
      return contact.id === e.target.dataset.contactId;
    });

    this.setState((prev) => {
      const prevCopy = [...prev.contacts];
      prevCopy.splice(delIdx, 1);

      return {
        contacts: prevCopy,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.contactFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          handleDel={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;