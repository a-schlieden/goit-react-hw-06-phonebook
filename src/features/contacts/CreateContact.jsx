import PropTypes from 'prop-types';
import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts.slice"

export const CreateContact = () => {
    const dispatch = useDispatch()
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


    const AddNewContact = () => {
        const newContact = {
            id: nanoid(),
            name: name
        }
        dispatch(addContact(newContact))
        setName("")
    }

    return (

        <>

            <label >
                Name:
                <br />
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={onDataChange}
                />
            </label>

            <br />

            {/* <label >
                Number:
                <br />
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={number}
                    onChange={onDataChange}
                />
            </label> */}
            <br />
            <br />
            <button onClick={AddNewContact}> Add</button>

        </>
    )
}

CreateContact.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string,
            id: PropTypes.string,
        })
    ),
    onDeleteContact: PropTypes.func
};