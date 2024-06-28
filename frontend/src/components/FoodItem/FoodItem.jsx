import React from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div className="" alt="food item">
      <div alt="food item img container">
        <img src={image} alt="food-item-image" />
      </div>
      <div alt="food item info ">
        <div alt=" food item name rating"></div>
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
      </div>
      <p alt="food item description">{description}</p>
      <p alt="food item price">${price}</p>
    </div>
  );
};

export default FoodItem;
