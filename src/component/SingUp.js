import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";

function SingUp() {
  let history = useHistory();
  const [users, setUser] = useState({
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    country_code: "",
    phone: "",
  });

  const onInputChange = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const notify = () => {
    toast("Thank You for Signup :)  please Login here");
  };

  const onSubmission = (e) => {
    e.preventDefault();
    console.log(users);

    let body = {
      user: {
        first_name: users.first_name,
        last_name: users.last_name,
        password: users.password,
        password_confirmation: users.password_confirmation,
        country_code: users.country_code,
        phone: users.phone,
      },
    };

    // axios({
    //   method: "POST",
    //   url: "https://demoapi.gharpar.co/api/v2/registrations.json",
    //   data: users,
    //   headers: {
    //     "Content-Type": "application/json",
    //     "DEVICE-TYPE": "XXX",
    //   },
    // }).then((response) => {
    //   alert("asdlalsdlasld");
    //   if (response.data.status === "success") {
    //     alert("Message Sent.");
    //     this.resetForm();
    //   } else if (response.data.status === "fail") {
    //     alert("Message failed to send.");
    //   }
    // });

    let headers = {
      Header: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        "https://demoapi.gharpar.co/api/v2/registrations.json",
        body,
        headers
      )
      .then((res) => {
        setUser(res);

        localStorage.setItem("token", true);
      })
      .catch((err) => {
        console.log(err);
      });

    return history.push("/sign-in");
  };
  return (
    <div className="container">
      <form onSubmit={onSubmission} style={{ width: "40%" }}>
        <h3>Register</h3>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            value={users.first_name}
            className="form-control"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            value={users.last_name}
            className="form-control"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Enter your Password</label>
          <input
            type="password"
            name="password"
            value={users.password}
            className="form-control"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm your Password</label>
          <input
            type="password"
            name="password_confirmation"
            value={users.password_confirmation}
            className="form-control"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Your Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={users.phone}
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            className="form-control"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label>Country Code</label>
          <input
            type="number"
            name="country_code"
            value={users.country_code}
            className="form-control"
            onChange={onInputChange}
          />
        </div>
        <div>
          <div>
            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              onClick={notify}
              style={{ width: "40%" }}
            >
              Register
            </button>
            {/* <ToastContainer /> */}
          </div>
          <div>
            <p className="forgot-password text-right">
              Already registered <Link to="/sign-in">log in?</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SingUp;
