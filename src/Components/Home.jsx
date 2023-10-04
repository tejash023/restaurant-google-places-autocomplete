import { useState, useEffect } from "react";
import Header from "./Header";
import RestaurantCards from "./RestaurantCards";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState("");
  const [filteredRestaurant, setFilteredRestaurants] = useState("");

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await fetch(
          "https://gofoodsserver.onrender.com/api/restaurants/?lat=12.9715987&lng=77.5945627"
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

    async function extractRestaurantData(jsonData) {
      const cards = jsonData?.data?.cards || [];
      for (const card of cards) {
        const restaurants =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restaurants) {
          return restaurants;
        }
      }
      return [];
    }

    function updateStateWithData(restaurantData) {
      setRestaurantList(restaurantData);
      setFilteredRestaurants(restaurantData);
    }

    fetchRestaurants();
  }, []);

  return (
    <div className="container">
      <Header />
      {!restaurantList ? (
        <p>Loading data....</p>
      ) : (
        <RestaurantCards restaurantList={restaurantList} />
      )}
    </div>
  );
};

export default Home;