import React from "react";
import OnSalesUpdate from "./OnSalesProduct";
import "./OnSales.css";

function OnSales() {
  return (
    <div className="onSales">
      <div className="onSales__row">
        <OnSalesUpdate
          id="12321341"
          title="Machine Learning: Step-by-Step Guide To Implement Machine Learning Algorithms with Python (Artificial Intelligence Book 2)"
          price={40.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51z5Hi7uHsL.jpg"
        />
        <OnSalesUpdate
          id="32451231"
          title="Apple MacBook Air 13-inch (i5/8GB/128GB)"
          price={4240.85}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/1974/9033/products/mba_sep18_1024x1024.png?v=1571565771"
        />
        <OnSalesUpdate
          id="24352361"
          title="Air Jordan 1 High OG sneakers"
          price={815.99}
          rating={5}
          image="https://cdn.flightclub.com/TEMPLATE/165290/1.jpg"
        />
        <OnSalesUpdate
          id="12435135"
          title="Executive Back Adjustable PU Leather Swivel Office Chair with Massage Function (Black/Beige) - Without Foot Rest"
          price={227.50}
          rating={5}
          image="https://my-test-11.slatic.net/shop/77c9e8d3bbd3fd68d4e06b76f38c4afa.jpeg"
        />
        <OnSalesUpdate
          id="12531661"
          title="Optimum Nutrition Gold Standard Whey Protein 5.5 lbs - Double Rich Chocolate"
          price={56.99}
          rating={4}
          image="https://cdn.store-assets.com/s/22159/i/14662713.jpeg"
        />
      </div>
    </div>
  );
}

export default OnSales;
