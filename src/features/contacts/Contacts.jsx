import React from "react"
import PropTypes from 'prop-types';
// import style from './ContactList.module.css';
// import { ContactListItem } from "components/ContactListItem/ContactListItem";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { nanoid } from "nanoid";
// import { addContact } from "../../redux/contacts.slice"
import { ContactListList } from "features/contacts/ContactsList"
import { CreateContact } from "features/contacts/CreateContact"
import { ContactFilter } from "features/contacts/Filter"


export const ContactListReduser = () => {

    // const contacts = useSelector((state) => state.contacts.contactsRed)
    // console.log('contact: ', contacts)
    // const dispatch = useDispatch()


    return (
        <>
            < ContactFilter />
            <br />
            <br />

            <ContactListList />


            <CreateContact />


        </>
    );
};

ContactListReduser.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string,
            id: PropTypes.string,
        })
    ),
    onDeleteContact: PropTypes.func
};