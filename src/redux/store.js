
import { configureStore } from '@reduxjs/toolkit';
import contactReducers from './contacts/contacts-reducer';

const store = configureStore({
    reducer: {
    contacts: contactReducers
},
    devTools: process.env.NODE_ENV === 'development'
});

export default store;