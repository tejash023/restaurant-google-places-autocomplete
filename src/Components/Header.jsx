import { useState } from "react";
import Autocomplete from "react-google-autocomplete";

const Header = ({ onLatLngChanged }) => {
  const [showCityInput, setShowCityInput] = useState(false);
  const [currentCity, setCurrentCity] = useState("");

  const toggleShowCityInput = () => {
    setShowCityInput(!showCityInput); // Toggle the state value
  };

  return (
    <div className="header">
      <p onClick={toggleShowCityInput}>
        Delivering at&nbsp;
        <span>
          <i className="fa fa-chevron-down"></i>
        </span>
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
          onBlur={(e) => setCurrentCity(e.target.value)}
        />
      )}

      {currentCity && <p className="current-city">{currentCity}</p>}
    </div>
  );
};

export default Header;
