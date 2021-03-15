import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer__title">
        <div className="footer__titleLeft">
          <h1>Jay T</h1>
          <p>Catagories</p>
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
          <br />
          <footer>&copy; Copyright 2020 Jay Tan</footer>
        </div>
        <div className="footer__titleRight">
          <h1>Get notified</h1>
          <p>Subscribe to the newsletter!</p>
          <input type="text" id="subject" name="subject" required />
          <input type="submit" name="send" value="Subscribe" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
