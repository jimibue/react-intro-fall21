import React, { useState } from "react";
import Counter from "./Counter";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState(
    props.user ? props.user.first_name : ""
  );
  const [lastName, setLastName] = useState(
    props.user ? props.user.last_name : ""
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log({ firstName, lastName });
    // addUser....

    if (props.user) {
      props.updateUser({
        id: props.user.id,
        first_name: firstName,
        last_name: lastName,
      });
    } else {
      props.x({
        id: Math.random(),
        first_name: firstName,
        last_name: lastName,
      });
    }
  };
  return (
    <div>
      <h1>{props.user ? "Edit" : "New"} Form</h1>

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
        <button type="submit">{props.user ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default UserForm;
