import React, { useState, useEffect } from "react";
import { Col } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";

function ViewUser(props) {
  let location = useLocation();
  console.log(location);

  const [viewUser, setViewUser] = useState({
    id: null,
    fName: "",
    lName: "",
  });

  useEffect(() => {
    setViewUser(location.state);
    console.log(location.state);
  });

  return (
    <div className="container">
      <div className="py-4">
        <form>
          <div className="form-group">
            <label>your First Name</label>
            <p>{viewUser.fName}</p>
            {/* <input name="fName"  value={viewUser.fName} className="form-control"  /> */}
          </div>
          <div className="form-group">
            <label>your Last Name</label>
            <p>{viewUser.lName}</p>
            {/* <input name="lName" value={viewUser.lName} className="form-control"  /> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ViewUser;
