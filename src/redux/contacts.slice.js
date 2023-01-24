import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactsRed: [],
    filter: "",
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            // state.push(action.payload)
            state.contactsRed.push(action.payload);
        },

        removeContact: (state, action) => {
            state.contactsRed = state.contactsRed.filter(item => item.id !== action.payload)
        },

        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
})

export const { addContact, removeContact, setFilter } = contactsSlice.actions;
// export default contactsSlice;
export default contactsSlice.reducer;