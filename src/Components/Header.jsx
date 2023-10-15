import { useState, useEffect } from "react";
import Autocomplete from "react-google-autocomplete";

const Header = ({ onLatLngChanged }) => {
  const [showCityInput, setShowCityInput] = useState(false);
  const [currentCity, setCurrentCity] = useState("");

  const toggleShowCityInput = () => {
    setShowCityInput(!showCityInput); // Toggle the state value
  };

  console.log(showCityInput);
  console.log(currentCity);

  return (
    <div className="header">
      <p onClick={toggleShowCityInput} className="location">
        <i class="fa fa-map-pin"></i>&nbsp;
      </p>
      {showCityInput && (
        <Autocomplete
          apiKey="AIzaSyCNnXEb2XOFlTcwMcBYK31-6x05FY0oUPc"
          onPlaceSelected={(place) => {
            let location = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            onLatLngChanged(location);
          }}
          onBlur={(e) => {
            setCurrentCity(e.target.value);
            setTimeout(() => {
              setShowCityInput(false);
              console.log("wow");
            }, 100);
          }}
        />
      )}

      {currentCity && !showCityInput && (
        <p className="current-city">
          {currentCity}
          <i className="fa fa-chevron-down"></i>
        </p>
      )}
    </div>
  );
};

export default Header;
