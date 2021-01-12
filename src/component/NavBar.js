import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
function NavBar(props) {
  let history = useHistory();
  console.log(props.token);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          {props.token && (
            <>
              <Link className="navbar-brand" to="/home">
                Home
              </Link>
              <Link className="navbar-brand" to="/about">
                About
              </Link>
            </>
          )}

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              {!props.token && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Sign in
                  </Link>
                </li>
              )}

              {props.token && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={"/"}
                    onClick={() => {
                      localStorage.removeItem("token");
                      props.auth(false);
                      history.push("/");
                    }}
                  >
                    Logout
                  </Link>
                </li>
              )}

              {!props.token && (
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
