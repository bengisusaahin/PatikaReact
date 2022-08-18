import React, { useState, useEffect } from "react";
import List from "./List/List";
import Form from "./Form/Form";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <List />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
