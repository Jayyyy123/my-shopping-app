import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import PersonIcon from "@material-ui/icons/Person";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      document.getElementById("overlay").style.display = "none";
      const login = document.querySelector(".home__loginForm");
      login.style.display = "none";
    }
  };

  const loginOnclick = () => {
    document.getElementById("home__loginForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.animation = "fadeIn 0.5s";
  };

  console.log(basket);
  return (
    <nav className="header" id="header">
      {/* Top */}
      <div className="header__top">
        <div className="header__topContent">
          {/* Welcome */}
          <h4>WELCOME TO JAYT!</h4>
          <div className="header__email">
            {/* E-mail */}
            <MailIcon />
            <h4>
              E-mail :
              <a
                className="email__link"
                href="mailto:yijie2333@gmail.com"
                alt=""
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                yijie2333@gmail.com
              </a>
            </h4>
          </div>
          {/* Contact */}
          <div className="header__phone">
            <PhoneIcon />
            <h4>Contact : (+60) 12 345 6789 </h4>
          </div>
        </div>
      </div>
      {/* Middle */}
      <div className="header__mid">
        <div className="header__midContent">
          {/* Logo */}
          <div className="header__logo">
            <Link className="header__btmLink" to="/">
              {/* onMouseOver={loginHover} onMouseOut={loginHoverOut} */}
              <h1>JayT</h1>
            </Link>
          </div>
          {/* Search box */}
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
          </div>
          {/* Login Register */}
          <div className="header__optionLogin">
            <PersonIcon />
            {/* <Link to="/register" className="header__link"> */}
            <span className="header__optionLineLeft">
              {user ? user.email : "User"}
            </span>
            {/* </Link> */}
            <hr />
            <div onClick={handleAuthentication}>
              <span className="header__optionLineTwo" onClick={loginOnclick}>
                {user ? "Sign out" : "Sign In"}
              </span>
            </div>
          </div>
          {/* Basket */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* Shopping basket icon */}
              <ShoppingBasketIcon />
              {/* Number of items in the basket */}
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      {/* Bottom */}
      <div className="header__btm">
        <div className="header__btmContent">
          {/* HOME */}
          <Link className="header__btmLink" to="/">
            <span>
              <h4>HOME</h4>
            </span>
          </Link>
          {/* ON SALES */}
          <Link className="header__btmLink" to="/ons">
            <span>
              <h4>ON SALES</h4>
            </span>
          </Link>
          {/* NEW ARRIVALS */}
          <Link className="header__btmLink" to="/new">
            <span>
              <h4>NEW ARRIVALS </h4>
            </span>
          </Link>
          {/* BEST SELLERS */}
          <Link className="header__btmLink" to="/best">
            <span>
              <h4>BEST SELLERS</h4>
            </span>
          </Link>
          {/* ALL PRODUCT */}
          <Link className="header__btmLink" to="/all">
            <span>
              <h4>ALL PRODUCT</h4>
            </span>
          </Link>
          {/* SUPPORT */}
          <Link className="header__btmLink" to="/support">
            <span>
              <h4>SUPPORT</h4>
            </span>
          </Link>
          {/* TRACK ORDER */}
          <Link className="header__btmLink header__track" to="/checkout">
            <span>
              <h4>TRACK ORDER</h4>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
