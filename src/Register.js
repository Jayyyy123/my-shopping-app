import React, { useEffect, useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
  const removeScroll = () => {};
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    window.removeEventListener("scroll", removeScroll);
  }, []);

  const register = (e) => {
    e.preventDefault();

    auth
      // Two argument for creating in by email and password
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully create user with email and password
        if (auth) {
          // push the login page to homepage after creating account
          history.push("/");
        }
      })
      // pop error if there is one
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <div id="overlay"></div>
      <div className="register__container">
        <h1>Register</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="Email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <hr />
          <button
            type="submit"
            className="register__signInButton"
            onClick={register}
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
