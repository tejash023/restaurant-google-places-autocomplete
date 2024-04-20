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
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  //DECIDE RATINGS BACKGROUND BASED ON THE USER RATINGS VALUE
  const ratingType =
    avgRating >= 4.0 ? "green" : avgRating > 3.0 ? "yellow" : "red";

  return (
    <div className="restaurant" key={name}>
      <div className="restaurant-image">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant-img" />
      </div>
      {aggregatedDiscountInfoV3 && (
        <div className="restaurant-offer">
          {aggregatedDiscountInfoV3.header +
            " " +
            aggregatedDiscountInfoV3.subHeader}
        </div>
      )}
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
