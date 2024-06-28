import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext"; // Ensure correct import
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div alt="food display" className="ml-[9%] mt-14 mr-[9%]">
      <h2 className=" font-medium text-4xl font-Pop">Top dishes near you</h2>

      <div>
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
