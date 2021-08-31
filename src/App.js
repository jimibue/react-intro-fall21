import axios from "axios";
import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const dummyUsers = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

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
      let res = await axios.get("https://reqres.in/ap/users?page=2");
      console.log(res.data.data);
      setUsers(res.data.data);
    } catch (err) {
      alert("err occured getting user");
      setUsers(dummyUsers);
      console.log(err);
    }
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
        </div>
      );
    });
  };

  console.log("rendering");
  return (
    <div>
      <h1>App Component Here!!!!</h1>
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
