import PropTypes from 'prop-types';

import { useSelector, useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts.slice"
import { SelectedContacts } from "../../redux/selectors"

export const ContactListList = () => {

    // const contacts = useSelector((state) => state.contacts.contactsRed)

    const FilteredContacts = useSelector(SelectedContacts)

    const dispatch = useDispatch()


    const onDeleteContact = (id) => {
        dispatch(removeContact(id))
    }
    return (

        <ul >
            {FilteredContacts.map(item => (
                <li key={item.id} >

                    {/* <ContactListItem name={item.name} number={item.number} deleteContact={() => onDeleteContact(item.id)} /> */}
                    <div>
                        <p>{item.name}</p>
                        <button onClick={() => onDeleteContact(item.id)}>delete</button>
                    </div>
                </li>
            ))}
        </ul>

    )
}

ContactListList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string,
            id: PropTypes.string,
        })
    ),
    onDeleteContact: PropTypes.func
};