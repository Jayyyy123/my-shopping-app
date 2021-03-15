import React from "react";
import "./OnSalesProduct.css";
import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";

function OnSalesProduct({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const addToWishlist = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="onSales__product">
      <img src={image} alt="" />
      <div className="onSales__productInfo">
        <h4>{title}</h4>
        <p className="onSales__productPrice">
          <small>RM</small>
          <strong>{price}</strong>
        </p>
        <div className="onSales__productRating">
        </div>
      </div>
      <div className="onSales__productIcon">
        <StarIcon />
        <FavoriteIcon onClick={addToWishlist} />
        <ShoppingBasketIcon onClick={addToBasket} />
      </div>
    </div>
  );
}

export default OnSalesProduct;
