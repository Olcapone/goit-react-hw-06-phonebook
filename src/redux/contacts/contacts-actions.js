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

export default { addContact };