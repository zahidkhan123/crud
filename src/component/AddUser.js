import React from "react";
import { useState, useEffect } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";

function AddUser(props) {
  let history = useHistory();
  let location = useLocation();

  const [userName, setUserName] = useState({
    fName: "",
    lName: "",
  });

  const { fName, lName } = userName;
  const onInputChange = (e) => {
    setUserName({ ...userName, [e.target.name]: e.target.value });
  };

  //     useEffect(()=>{
  //     const response = props.users;
  //     props.userName = response
  //    }, []);

  //    const onSubmitHandler =(event) => {
  //          event.preventDefault();
  //          if(!fName || !lName)
  //          return props.addUser(userName)
  //          console.log(userName)
  //          setUserName(userName)
  //    }

  return (
    <div className="container">
      <div className="py-4">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (fName || lName) {
              props.addUser(userName);
            }
            return history.push("/home");
          }}
        >
          <div className="form-group">
            <label>Enter your First Name</label>
            <input
              name="fName"
              value={fName}
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Enter your Last Name</label>
            <input
              name="lName"
              value={lName}
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <button className="btn btn-primary">Add User</button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
