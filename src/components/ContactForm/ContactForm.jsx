import { useState } from "react";
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export const ContactForm = ({ onSubmitForm }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onDataChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmitForm({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>

      <form onSubmit={onFormSubmit} className={style.form}>
        <label className={style.formlabel}>
          Name:
          <br />
          <input className={style.forminput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onDataChange}
          />
        </label>
        <label className={style.formlabel}>
          Number:
          <br />
          <input className={style.forminput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onDataChange}
          />
        </label>
        <button type="submit" className={style.formbtn}>Add Contact</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
