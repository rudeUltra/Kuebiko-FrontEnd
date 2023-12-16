import React from "react";
import {func } from "prop-types";
import { Link } from "react-router-dom";
// import UserIcon from "../userIcon";

const handleClick = (handleLogOut) => {
  handleLogOut();
}
const Navbar = ({ isLoggedIn, user, handleLogOut }) => {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent px-0 py-3">
      <div class="container-xl">
        <Link class="navbar-brand" to="/">
          Kuebiko
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav mx-lg-auto">
            <Link class="nav-item nav-link active" to="/" aria-current="page">
              Home
            </Link>
            <Link class="nav-item nav-link" to="/browse">
              Browse
            </Link>
            <Link class="nav-item nav-link" to="/createBook">
              Create
            </Link>
          </div>

          <div class="d-flex align-items-lg-center mt-3 mt-lg-0">
            {/* <Link
              to="/login"
              class="btn btn2 btn-sm btn-primary w-full w-lg-auto"
            >
              {isLoggedIn ? user : "Login"} */}
            {/* </Link> */}
            {isLoggedIn ? (
              <button
                class="login_button btn btn-primary w-full w-lg-auto "
                onClick={() => handleClick(handleLogOut)}
              >
                {user}
              </button>
            ) : (
              <Link
              to="/login"
              class=" login_button btn btn-primary w-full w-lg-auto "
            >
              Login/Sign Up
            </Link>
            )}
            {/* <UserIcon /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.proptype = {
  handleLogOut: func
}

export default Navbar;
