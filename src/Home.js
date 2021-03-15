import React, { useEffect } from "react";
import "./Home.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import email from "./svg/email.svg";
import forwardIcon from "./svg/direct.svg";
import MailPop from "./MailPop";
import ImageSlide from "./ImageSlide";
import OnSales from "./OnSales";
import HomeFixedBoard from "./HomeFixedBoard";
import Update from "./Update";
import Login from "./Login";

function Home() {
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  // window.onscroll = () => {
  //   scrollFunction();
  // };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      document.querySelector(".home__arrow").style.display = "block";
      document.querySelector(".home__fixedBoard").style.display = "block";
      document.querySelector(".home__arrow").style.zIndex = "1";
    } else {
      document.getElementById("home__arrow").style.display = "none";
      document.getElementById("home__fixedBoard").style.display = "none";
    }
  };

  const emailOnclick = () => {
    const mailPop = document.querySelector(".home__contactContent");
    mailPop.style.display = "block";
    mailPop.style.animation = "fadeIn 0.5s";
  };

  return (
    <div className="home" id="home">
      <div id="overlay"></div>
      <div className="home__content">
        <div className="home__category">
          <ul>
            <li>Women's Clothing</li>
            <li>Health & Beauty</li>
            <li>Baby & Toys</li>
            <li>Home & Living</li>
            <li>Women's Bags</li>
            <li>Muslim Fashion</li>
            <li>Groceries & Pets</li>
            <li>Men's Clothing</li>
            <li>Computer & Accesories</li>
            <li>Home Appliances</li>
            <li>Sports & Outdoor</li>
            <li>Mobile & Gatdgets</li>
            <li>Watches</li>
            <li>Games, Books & Hobbies</li>
          </ul>
          {/* Images slides */}
          <ImageSlide />
        </div>
        {/* Updates product*/}
        <div className="home__updateProduct">
          <h1>Update</h1>
          <Update />
        </div>
        {/* On Sales product*/}
        <div className="home__onSalesProduct">
          <h1>On Sales</h1>
          <OnSales />
        </div>
        {/* New arrivals product*/}
        {/* <div className="home__newArrivalsProduct">
          <h1>New arrivals</h1>
        </div> */}
        {/* Best Sellers product*/}
        {/* <div className="home__bestSellersProduct">
          <h1>Best Sellers</h1>
        </div> */}
        {/* Top categories product*/}
        {/* <div className="home__topCatogProduct">
          <h1>Top categories</h1>
        </div> */}
        {/* Top Brands */}
        {/* <div className="home__topBrands">
          <h1>Top Brands</h1>
        </div> */}
      </div>
      {/* Arrow */}
      <div className="home__arrow" id="home__arrow">
        <a href="#header">
          <KeyboardArrowUpIcon />
        </a>
      </div>
      {/* Contact */}
      <div className="home__contact">
        <div className="home__contactContent">
          <MailPop
            title="Send a message"
            forwardIcon={forwardIcon}
            title2="Talk to us"
          />
        </div>
        <img
          className="home__contactEmail"
          id="home__contactEmail"
          onClick={emailOnclick}
          src={email}
          alt=""
        />
      </div>
      <div className="home__loginForm" id="home__loginForm">
        <Login />
      </div>
      {/* Basket, Wishlist fixed board */}
      <div className="home__fixedBoard" id="home__fixedBoard">
        <HomeFixedBoard />
      </div>
    </div>
  );
}

export default Home;
