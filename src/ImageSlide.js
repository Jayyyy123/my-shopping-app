import React from "react";
import "./ImageSlide.css";
import image1 from "./img/amazon-clone.jpg";
// import image2 from "./img/counter-app.jpg";
// import image3 from "./img/amazon-clone.jpg";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function ImageSlide() {
  return (
    <div className="imageSlide">
      <div className="imageSlide__slides">
        <img src={image1} alt="" />
      </div>
      <div className="imageSlide__prevArrow">
        <ChevronLeftIcon />
      </div>
      <div className="imageSlide__nextArrow">
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default ImageSlide;
