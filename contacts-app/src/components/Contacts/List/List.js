import React, { useState } from "react";
import classes from "./../Contacts.module.css";

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="Filter contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className={classes.list}>
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>

      <p>Total Contacts ({filtered.length})</p>
    </div>
  );
};

export default List;
