export const SelectedContacts = (state) => {
    return state.contacts.contactsRed.filter((contact) => {
        return contact.name.toLowerCase()
            .includes(state.contacts.filter.toLowerCase())
    })

}