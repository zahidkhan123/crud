import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const UserTable = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    }
  }, [localStorage.getItem("token")]);

  return (
    <div className="container mt-5">
      <div>
        <div>
          <h1>User Table</h1>
        </div>
        {localStorage.getItem("token") && (
          <Link
            to="/user/add"
            className="btn btn-outline-primary float-right margin-bottom-5"
          >
            Add Users
          </Link>
        )}
      </div>

      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>

            {localStorage.getItem("token") && <th scope="col">Handle</th>}
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.fName}</td>
                <td>{x.lName}</td>
                {localStorage.getItem("token") && (
                  <td>
                    <Link
                      to={{
                        pathname: `user/view`,
                        state: x,
                      }}
                      className="btn btn-success mr-2"
                    >
                      View
                    </Link>
                    <Link
                      to={{
                        pathname: `user/edit`,
                        state: x,
                      }}
                      className="btn btn-outline-primary mr-2"
                    >
                      Edit
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-danger mr-2"
                      onClick={() => props.deleteUser(x.id)}
                    >
                      Delete
                    </Link>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
