import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import CloseIcon from "@material-ui/icons/Close";

function Login() {
  const removeScroll = () => {};
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    window.removeEventListener("scroll", removeScroll);
  }, []);

  const signIn = (e) => {
    e.preventDefault();

    auth
      // Two argument for signing in by email and password
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        loginOnclose();
      })
      .catch((error) => alert(error.message));
  };

  const loginOnclose = () => {
    document.getElementById("overlay").style.display = "none";
    const login = document.querySelector(".home__loginForm");
    login.style.display = "none";
  };

  return (
    <div className="login">
      <div className="login__container">
        <CloseIcon onClick={loginOnclose} />
        <h1>Sign-in</h1>
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
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
          <div className="login__signUp">
            <p>
              Not a member?{" "}
              <Link to="/register" className="login__signUpLink">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
