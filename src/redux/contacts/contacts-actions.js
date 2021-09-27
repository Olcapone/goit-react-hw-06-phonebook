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

 const findContact = ({value, contacts}) => ({
     type: types.FIND,
     payload: contacts.filter((contact) =>
              contact.name.toLowerCase().includes(value.toLowerCase())
     )
 });

export default { addContact, deleteContact, changeFilter, findContact };