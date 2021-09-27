import React from "react";
import { connect } from "react-redux";
import contactActions from '../../redux/contacts/contacts-actions';
import shortid from "shortid";
import s from "./ContactList.module.css";

 function ContactList({ contact, onDelete }) {
  return (
    <ul className={s.list}>
      {contact.map(({ name, number }) => (
        <li className={s.item} key={shortid.generate()}>
          {name} : {number}{" "}
          <button
            className={s.button}
            type="button"
            onClick={() => onDelete(name)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contact: state.contacts.items
});

const mapDispatchToProps = dispatch => ({
  onDelete: (name)=> dispatch(contactActions.deleteContact(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
