import React from "react";

const RestaurantCards = ({ restaurantList }) => {
  console.log("RC", restaurantList);
  return (
    <div className="restaurant-lists">
      {restaurantList.map((restaurantData) => (
        <div className="restaurant" key={restaurantData.info.name}>
          <p>{restaurantData.info.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCards;
