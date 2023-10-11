import { useState, useEffect } from "react";
import Header from "./Header";
import Loader from "./Loader";
import NotAvailable from "./NotAvailable";
import RestaurantLists from "./RestaurantLists";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState("");
  const [filteredRestaurant, setFilteredRestaurants] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  //get current user location and fetching the restaurant lists based on the user's current location
  const getCurrentUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by your browser.");
    }
  };

  useEffect(() => {
    getCurrentUserLocation();
  }, []);

  //callback funtion - to update the location
  const onLatLngChanged = (location) => {
    setLat(location.lat);
    setLng(location.lng);
    setRestaurantList(""); // to show the loader ui, while user is changing the location
  };

  //call api - fetching restaurant lists based on the user lat/lng updates
  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await fetch(
          `https://gofoodsserver.onrender.com/api/restaurants/?lat=${lat}&lng=${lng}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        const restaurantData = await extractRestaurantData(json);
        updateStateWithData(restaurantData);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    }

    //to extract restaurants data
    async function extractRestaurantData(jsonData) {
      const cards = jsonData?.data?.cards || [];
      if (cards[0]?.card?.card?.id === "swiggy_not_present")
        return "NOT SERVICABLE";

      for (const card of cards) {
        const restaurants =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restaurants) {
          return restaurants;
        }
      }
      return [];
    }

    //updating state variables
    function updateStateWithData(restaurantData) {
      setRestaurantList(restaurantData);
      setFilteredRestaurants(restaurantData);
    }

    fetchRestaurants();
  }, [lat, lng]);

  return (
    <div className="container">
      <Header onLatLngChanged={onLatLngChanged} />
      {!restaurantList ? (
        <Loader />
      ) : restaurantList !== "NOT SERVICABLE" ? (
        <RestaurantLists restaurantList={restaurantList} />
      ) : (
        <NotAvailable />
      )}
    </div>
  );
};

export default Home;
