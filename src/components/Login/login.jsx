import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { func } from "prop-types";
import { useHistory } from "react-router";
import "./styles.css";

const handleRegister = (params = {}, handleChangeInLogin, history, handleError) => {
  let response;
  fetch("https://kuebiko-backend.netlify.app/.netlify/functions/api/register", {
    method: "POST",
    mode: "cors",
    cache: "default",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(params)
  }).then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      handleError("RESPONSE STATUS: " + res.status);
    }
  }).then(data => {
    response = data;
    console.log(response);
    if (response.success) {
      handleChangeInLogin(params.username);
      history.push("/")
    } else {
      console.log(Object.keys(response.err), "keyValue" in response.err);
      if ("keyValue" in response.err && response.err.keyValue.email) {
        response.err["message"] = "A user with the same email exists!";
      }
      handleError(response.message + response.err.message);
    }
  })
    .catch(err => console.log(err));

  // return (response === "success");
};

const handleLogin = (params = {}, handleChangeInLogin, history, handleError) => {
  let response;
  fetch("https://kuebiko-backend.netlify.app/.netlify/functions/api/login", {
    method: "POST",
    mode: "cors",
    cache: "default",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(params)
  }).then(res => {
    if (res.status === 200) {
      return res.json();
    } else if (res.status === 401) {
      handleError("Wrong Username or password");
    }
  })
    .then(data => {
      response = data;
      if (response.success) {
        handleChangeInLogin(params.username);
        history.push("/")
      } else {
        console.log(response.message);
        handleError(response.message);
      }

    })
    .catch(err => console.log(err));
}

const Login = ({ handleChangeInLogin }) => {
  const history = useHistory();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    let name = target.name;
    let value = target.value;
    setRegister(prevState => ({ ...prevState, [name]: value }))
  };

  const handleChangeLogin = ({ target }) => {
    setLogin(prevState => ({ ...prevState, [target.name]: target.value }))
  };

  const handleError = (error) => {
    setError(error);
  }

  return (
    <>
      <div className="container1">
        <div className="forms-container1">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={(event) => { event.preventDefault(); handleLogin(login, handleChangeInLogin, history, handleError) }} >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <span></span>
                <input required type="text" placeholder="Username" name="username" onChange={handleChangeLogin} />
              </div>
              <div className="input-field">
                <span></span>
                <input required type="password" placeholder="Password" name="password" onChange={handleChangeLogin} />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <label style={{ color: "red" }}>{error}</label>
            </form>

            <form className="sign-up-form" onSubmit={(event) => { event.preventDefault(); handleRegister(register, handleChangeInLogin, history, handleError);}} >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <span></span>
                <input required type="text" placeholder="Username" name="username" onChange={handleChange} />
              </div>
              <div className="input-field">
                <span></span>
                <input required type="email" placeholder="Email" name="email" onChange={handleChange} />
              </div>
              <div className="input-field">
                <span></span>
                <input required type="password" placeholder="Password" name="password" onChange={handleChange} />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <label style={{ color: "red" }}>{error}</label>
            </form>
          </div>
        </div>

        <div className="panels-container1">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                “A journey of a thousand miles begins with a single step.”{" "}
                <br />
                —Lao Tzu
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={() => document.querySelector(".container1").classList.add("sign-up-mode")}>
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                “A room without books is like a body without a soul.” <br />~
                Cicero
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={() => document.querySelector(".container1").classList.remove("sign-up-mode")}>
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

Login.propType = {
  handleChangeInLogin: func.isRequired
}

export default Login;