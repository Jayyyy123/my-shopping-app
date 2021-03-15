import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./HomeFixedBoard.css";
import { useStateValue } from "./StateProvider";

function HomeFixedBoard() {
  const [{ basket, wishlist }] = useStateValue();

  return (
    <div className="homeFixedBoard">
      <div className="homeFixedBasket">
        <ShoppingBasketIcon />
        <span>{basket?.length}</span>
      </div>
      <div className="homeFixedFav">
        <FavoriteIcon />
        <span>{wishlist?.length}</span>
      </div>
    </div>
  );
}

export default HomeFixedBoard;
