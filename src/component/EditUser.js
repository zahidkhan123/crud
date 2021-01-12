import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

function EditUser(props) {
  let history = useHistory();
  let location = useLocation();

  const [editName, setEditName] = useState({
    id: null,
    fName: "",
    lName: "",
  });

  useEffect(() => {
    debugger
    setEditName(location.state);
    debugger
  }, []);

  //    const {fName, lName} = userName
  const onInputChange = (e) => {
    
    setEditName({ ...editName, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="py-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.updatedUser(editName.id, editName);

            return history.push("/");
          }}
        >
          <div className="form-group">
            <label>Enter your First Name</label>
            <input
              name="fName"
              value={editName.fName}
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Enter your Last Name</label>
            <input
              name="lName"
              value={editName.lName}
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
