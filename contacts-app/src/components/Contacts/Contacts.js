import React, { useState, useEffect } from "react";
import classes from "./Contacts.module.css";

import List from "./List/List";
import Form from "./Form/Form";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Bengisu",
      phone_number: "123123",
    },
    {
      fullname: "Bengisu",
      phone_number: "123123",
    },
    {
      fullname: "Bengisu",
      phone_number: "123123",
    },
  ]);
  //list componentinden eklenen kisileri goruntuleyebilmek icin state i
  //burda olusturup parametre olarak form componentine gonderdik
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div className={classes.container}>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
