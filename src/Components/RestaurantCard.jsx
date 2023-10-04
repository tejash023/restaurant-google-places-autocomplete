import React from "react";

const RestaurantCard = ({
  id,
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
  costForTwo,
  locality,
  aggregatedDiscountInfoV3,
}) => {
  const IMG_CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  let ratingType;
  if (avgRating >= 4.0) {
    ratingType = "green";
  } else if (avgRating < 4.0 && avgRating > 3.0) {
    ratingType = "yellow";
  } else {
    ratingType = "red";
  }

  return (
    <div className="restaurant" key={name}>
      <div className="restaurant-image">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant-img" />
      </div>
      <div className="restaurant-details">
        <p className="restaurant-name">{name}</p>
        <div className="restaurant-details-info">
          <p>{cuisines.join(", ")}</p>
          {avgRating && (
            <p className={"ratings " + ratingType}>
              <i className="fa fa-star"></i>
              {avgRating}
            </p>
          )}
        </div>
        <p className="restaurant-area">{locality}</p>
        <div className="restaurant-info">
          <p> {sla.deliveryTime} mins</p>
          <p> {costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
