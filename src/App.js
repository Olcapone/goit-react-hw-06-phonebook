
import PropTypes from "prop-types";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
    

  //   const checkContact = contacts.find((contact) =>
  //     contact.name.includes(stateName)
  //   );

  //   if (checkContact) {
  //     alert("its contact already added");
  //   } else {
  //     setContacts([newContact, ...contacts]);
  //   }
  // };


  return (
    <section className="mainSection">
      <h1 className="mainTitle">
        <span className="logo">P</span>honebook
      </h1>
      <ContactForm />

      <h2 className="mainTitle">Contacts</h2>
      <Filter /> 
      <ContactList /> 
    </section>
  );
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default App;
