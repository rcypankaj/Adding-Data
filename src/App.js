import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import Userlist from "./components/Users/Userlist";

function App() {
  const [userslist, setUserslist] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserslist((prevUserlist) => {
      return [
        ...userslist,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <Userlist users={userslist} />
    </React.Fragment>
  );
}

export default App;
