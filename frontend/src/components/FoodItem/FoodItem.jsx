import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div
      className="w-[100%] m-auto rounded-[15px] shadow-md animate-fade1s"
      alt="food item"
    >
      <div alt="food item img container" className="relative">
        <img
          src={image}
          alt="food-item-image"
          className="w-[100%] rounded-tl-[15px] rounded-tr-[15px]"
        />

        {!cartItems[id] ? (
          <img
            className="absolute bottom-[15px] right-[15px] cursor-pointer border-[50%] transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add icon"
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-1.5 rounded-[50px] bg-white">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove icon"
              className="w-7.5 transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
            <p>{cartItems[id]}</p>
            <img
              className="w-7.5 transition-transform duration-300 ease-in-out transform hover:scale-110"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add icon"
            />
          </div>
        )}
      </div>

      <div alt="food item info" className="p-[20px]">
        <div
          alt=" food item name rating"
          className="flex justify-between items-center mb-[10px]"
        >
          <p className="text-[20px] font-medium">{name}</p>

          <img
            src={assets.rating_starts}
            alt="rating stars"
            className="w-[70px]"
          />
        </div>

        <p alt="food item description" className="text-[#676767] text-[12px]">
          {description}
        </p>

        <p
          alt="food item price"
          className="text-[#ff6347] font-medium text-[22px] mt-3 mb-0"
        >
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
