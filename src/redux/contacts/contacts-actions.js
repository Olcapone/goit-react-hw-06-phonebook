import shortid from "shortid";
import types from './contacts-types';

const addContact = ({ stateName, number }) => ({
    
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name: stateName,
        number: number,
    }
});

const deleteContact = (name) => ({
    type: types.DELETE,
    payload: name
});

const changeFilter = (value) => ({
    type: types.CHANGE_FILTER,
    payload: value
});


export default { addContact, deleteContact, changeFilter };