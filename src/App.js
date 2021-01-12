import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import UserTable from "./component/UserTable";
import EditUser from "./component/EditUser";
import AddUser from "./component/AddUser";
import ViewUser from "./ViewUser";
import NavBar from "./component/NavBar";
import SignIn from "./component/SignIn";
import SingUp from "./component/SingUp";
import About from "./component/About";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  const userData = [
    { id: 1, fName: "zahid", lName: "khan" },
    { id: 2, fName: "Bilal", lName: "khan" },
    { id: 3, fName: "Rehan", lName: "khan" },
    { id: 4, fName: "Sajid", lName: "khan" },
  ];

  const [users, setUsers] = useState(userData);
  const [token, setToken] = useState(false);

  const [editCurrentUser, setEditCurrentUser] = useState({
    id: null,
    fiName: "",
    laName: "",
  });

  useEffect(() => {
    debugger;
    if (localStorage.getItem("token")) {
      debugger;
      setToken(true);
      debugger;
    }
  }, [localStorage.getItem("token")]);

  // const [nav, setNav] = useState(false);
  // sdfsdfsfdsdfs
  // useEffect(() => {
  //   debugger;
  //   setNav(true);
  // }, []);

  const addUser = (user) => {
    user.id = users.length + 1;
    debugger;

    setUsers([...users, user]);
    debugger;
  };

  const editUser = (newUser) => {
    debugger;
    let id = newUser;
    debugger;

    setEditCurrentUser(id);
    debugger;
  };

  const deleteUser = (id) => {
    debugger;
    setUsers(users.filter((user) => user.id !== id));
    debugger;
  };
  debugger;
  const updatedUser = (id, updatedUser) => {
    debugger;
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
    debugger;
  };

  // const viewUser = (id) =>{
  //   setUsers(users.filter((user) => user.id === id))
  // }

  return (
    <Fragment>
      <div className="App">
        <NavBar token={token} auth={setToken} />
        <Switch>
          <ProtectedRoute
            exact
            path="/home"
            component={() => (
              <UserTable
                users={users}
                editUser={editUser}
                deleteUser={deleteUser}
              />
            )}
          />
          <Route
            exact
            path="/"
            component={() => (
              <UserTable
                users={users}
                editUser={editUser}
                deleteUser={deleteUser}
              />
            )}
          />
          <Route
            path="/user/add"
            component={() => <AddUser user={users} addUser={addUser} />}
          />
          <Route
            path="/user/edit"
            component={() => (
              <EditUser
                user={users}
                updatedUser={updatedUser}
                editUser={editUser}
              />
            )}
          />
          <Route path="/user/view" component={() => <ViewUser />} />
          <ProtectedRoute path="/about" component={About} />
          <Route path="/sign-in" component={() => <SignIn auth={setToken} />} />
          <Route path="/sign-up" component={SingUp} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
