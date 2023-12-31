import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantLists = ({ restaurantList }) => {
  // console.log("RC", restaurantList);
  return (
    <div className="restaurant-lists">
      {restaurantList.map((restaurantData) => (
        <RestaurantCard {...restaurantData.info} key={restaurantData.info.id} />
      ))}
    </div>
  );
};

export default RestaurantLists;
