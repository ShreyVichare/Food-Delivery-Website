import React from "react";
import { menu_list } from "../../assets/assets";
const ExploreMenu = () => {
  return (
    <div className="" alt="explore menu">
      <h1>Explore our menu</h1>
      <p className="" alt="explore menu text">
        Explore a rich variety of dishes, each prepared with top-quality
        ingredients and culinary mastery. Our goal is to delight and enhance
        your dining experience, one delectable meal at a time.
      </p>
      <div alt="explore menu list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} alt="menu list item">
              <img src={item.menu_image} alt="menu image" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
