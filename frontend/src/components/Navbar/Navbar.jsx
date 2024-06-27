import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuItems = ["home", "menu", "mobile-app", "contact us"];

  return (
    <div className="flex justify-around mt-5" alt="navbar ">
      <img src={assets.logo} alt="logo" className="" />

      <ul alt="navbar menu" className="flex font-sans gap-7 pb-0.5">
        {menuItems.map((item) => (
          <li
            key={item}
            className={`relative cursor-pointer pb-2 
            ${menu === item ? "active" : ""}`}
            onClick={() => setMenu(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 
            ${menu === item ? "w-full" : "w-0"}`}
            />
          </li>
        ))}
      </ul>

      <div alt="navbar-right" className="flex gap-10">
        <img src={assets.search_icon} alt="" className="h-8 mt-1" />
        <div alt="navbar-search-icon" className="flex gap-10 relative">
          <img src={assets.basket_icon} className="h-8 mt-1" />

          <div
            alt="dot"
            className="absolute min-w-2.5 min-h-2.5 bg-[#ff6347] rounded-md top-[-5px] right-[]"
          ></div>

          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;