import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";

function SignIn(props) {
  let history = useHistory();
  const [users, setUsers] = useState({
    countrycode: "",
    phone: "",
    password: "",
    isChecked: false,
  });

  const onInputChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const onSubmission = (e) => {
    e.preventDefault();

    let body = {
      user: {
        countrycode: users.country_code,
        phone: users.phone,
        password: users.password,
      },
      user_session: {
        device_type: "web",
        device_token: "xxx",
      },
    };
    let headers = {
      Header: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://demoapi.gharpar.co/api/v2/user_sessions.json",
        body,
        headers
      )
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message === "Your Account is not Activated yet") {
          localStorage.setItem("token", true);
          props.auth(true);
          history.push("/home");
        }
      });
  };
  return (
    <div className="container">
      <div style={{ width: "40%" }}>
        <form onSubmit={onSubmission}>
          <h3>Log in</h3>

          <div className="form-group">
            <label>Country Code</label>
            <input
              type="number"
              name="countrycode"
              value={users.countrycode}
              className="form-control"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={users.phone}
              className="form-control"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={users.password}
              className="form-control"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                name="checkbox"
                value={users.isChecked}
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            style={{ width: "40%" }}
          >
            Sign in
          </button>
          <ToastContainer />
          <p className="forgot-password text-right"></p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
