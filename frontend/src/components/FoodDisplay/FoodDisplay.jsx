import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext"; // Ensure correct import
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div alt="food display" className="ml-[9%] mt-[30px] mr-[9%]">
      <h2 className=" font-medium text-4xl font-Pop">Top dishes near you</h2>

      <div
        alt="food display list"
        className="grid grid-cols-fill-240 gap-[30px] mt-[30px]  gap-y-30 gap-x-20"
      >
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
