import axios from "axios";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import UserForm from "./UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  // first arg is a function that gets called on mount
  // second arg, [] will have this only get on mount
  useEffect(() => {
    console.log("useEffect called");
    // want to get data from api
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let res = await axios.get("https://reqres.in/api/users?page=2");
      console.log(res.data.data);
      setUsers(res.data.data);
    } catch (err) {
      alert("err occured getting user");
      // setUsers(dummyUsers);
      console.log(err);
    }
  };

  const addUser = (user) => {
    // how do I add I user to my array of users.
    let newUsers = [user, ...users];
    setUsers(newUsers);
  };

  const updateUser = (user) => {
    //
    console.log(user);
    //
    let newArray = users.map((u) => (u.id == user.id ? user : u));
    setUsers(newArray);
  };

  const deleteUser = (id) => {
    console.log(id);
    let newUsers = users.filter((u) => u.id !== id);
    setUsers(newUsers);
  };

  const renderUsers = () => {
    if (users.length == 0) {
      return <p>no Users</p>;
    }

    return users.map((user) => {
      return (
        <div style={styles.container} key={user.id}>
          <h1>{`${user.first_name} ${user.last_name}`}</h1>
          <img src={user.avatar} />
          <p>{user.email}</p>
          <p>{user.id}</p>
          <button onClick={() => deleteUser(user.id)}>delete</button>
          <UserForm updateUser={updateUser} user={user} />
        </div>
      );
    });
  };

  console.log("rendering");
  return (
    <div>
      <h1>App Component Here!!!!</h1>
      <UserForm x={addUser} />
      {renderUsers()}
      <Counter />
    </div>
  );
};

const styles = {
  container: {
    // border: "1px solid",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding: "10px",
    margin: "40px",
  },
};

// Lifecycle of a component

// Mounted(intial render) - useEffect hook
// update(setState- rerender)- useState hook
// unMount(remove component from dom)

export default App;
