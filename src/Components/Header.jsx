import { useState } from "react";
import Autocomplete from "react-google-autocomplete";

const Header = ({ onLatLngChanged }) => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [showCityInput, setShowCityInput] = useState(false);
  return (
    <div className="header">
      <p onClick={() => setShowCityInput(true)}>
        Select your city&nbsp;
        <span>
          <i className="fa fa-chevron-down"></i>
        </span>
      </p>
      {showCityInput && (
        <Autocomplete
          apiKey="AIzaSyCNnXEb2XOFlTcwMcBYK31-6x05FY0oUPc"
          onPlaceSelected={(place) => {
            console.log(place);
            console.log(place.geometry.location.lat());
            console.log(place.geometry.location.lng());
            // setLat(place.geometry.location.lat());
            // setLng(place.geometry.location.lng());
            let location = {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            onLatLngChanged(location);
          }}
        />
      )}
    </div>
  );
};

export default Header;
