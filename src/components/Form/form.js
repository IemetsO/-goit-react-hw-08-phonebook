import React, { useCallback } from 'react';
import s from './Form.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/contacts/contacts-operation';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = useCallback(
    event => {
      const { name, value } = event.target;
      switch (name) {
        case 'name':
          setName(value);
          break;

        case 'number':
          setNumber(value);
          break;

        default:
          return;
      }
    },
    [setName, setNumber]
  );

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name}, is already in your contacts`);
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={s.text}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label className={s.text}>
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className={s.button} onClick ={handleSubmit}>
          Add Contact
        </button>
      </form>
    </div>
  );
}
