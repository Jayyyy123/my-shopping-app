import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        // the user is logged out
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Register path */}
          <Route path="/register">
            <Register />
          </Route>
          {/* Checkout path */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Default path */}
          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
