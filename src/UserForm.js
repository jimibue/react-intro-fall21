import React, { useState } from "react";
import Counter from "./Counter";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log({ firstName, lastName });
    // addUser....
    props.x({ id: Math.random(), first_name: firstName, last_name: lastName });
  };
  return (
    <div>
      <h1>Form here</h1>
      <Counter />
      <form onSubmit={handleSubmit}>
        <p>first name</p>
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <p>last name</p>
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default UserForm;
