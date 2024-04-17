import React, { useState } from 'react';
import './ContactList.css'; 

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const addContact = () => {
    if (name && email) {
      const newContact = {
        id: Math.floor(Math.random() * 1000), // Generate a random id
        name: name,
        email: email
      };
      setContacts([...contacts, newContact]);
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="ContactListContainer">
      <h2>Contact List</h2>
      <form onSubmit={(e) => { e.preventDefault(); addContact(); }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Add Contact</button>
      </form>
      <ul className="ContactList">
        {contacts.map(contact => (
          <li key={contact.id}>
            <strong>{contact.name}</strong>: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
