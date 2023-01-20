import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: "",
}

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.push(action.payload)
        },
        removeContact(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    },
})

export const { addContact, removeContact } = contactsSlice.actions;
// export default contactsSlice.reducer;