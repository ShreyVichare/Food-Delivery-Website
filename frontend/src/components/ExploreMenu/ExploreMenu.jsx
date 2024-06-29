import React, { useState } from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (menu_name) => {
    setSelectedImage((prev) => (prev === menu_name ? null : menu_name));
    setCategory((prev) => (prev === menu_name ? "All" : menu_name));
  };

  return (
    <div
      className="flex flex-col gap-[20px] ml-[9%] mt-14 mr-[9%] "
      id="explore-menu"
    >
      <h1 className="text-[#262626] font-medium text-4xl font-Cur">
        Explore our menu
      </h1>

      <p className="max-w-[60%] columns-[#808080]" alt="explore menu text">
        Explore a rich variety of dishes, each prepared with top-quality
        ingredients and culinary mastery. Our goal is to delight and enhance
        your dining experience, one delectable meal at a time.
      </p>

      <div
        alt="explore menu list"
        className="flex justify-between items-center gap-7.5 text-center mt-[20px] mb-0 overflow-x:scroll"
      >
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(item.menu_name)}
            alt="menu list item"
            className="relative"
          >
            <img
              src={item.menu_image}
              alt="menu image"
              className={`w-[7.5vw] min-[80px] cursor-pointer rounded-[50%] transition duration-200 ${
                category === item.menu_name ? "active" : ""
              } ${
                selectedImage === item.menu_name ? "ring-4 ring-red-500" : ""
              }`}
            />

            <p className="mt-[10px] text-[#747474] font-medium cursor-pointer">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>
      <hr className="mt-[10px] mb-0 h-0.5 bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
