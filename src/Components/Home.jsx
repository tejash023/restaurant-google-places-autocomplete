import { useState, useEffect } from "react";

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
        updateStateWithData(json, restaurantData);
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

    function updateStateWithData(json, restaurantData) {
      setRestaurantList(restaurantData);
      setFilteredRestaurants(restaurantData);
    }

    fetchRestaurants();
  }, []);

  console.log(restaurantList);

  return (
    <div className="h-">
      <h1 className="bg-red">Go Foods</h1>
    </div>
  );
};

export default Home;
