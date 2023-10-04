import Autocomplete from "react-google-autocomplete";

const Header = () => {
  return (
    <div className="header">
      <Autocomplete
        apiKey="AIzaSyCNnXEb2XOFlTcwMcBYK31-6x05FY0oUPc"
        onPlaceSelected={(place) => {
          console.log(place);
          console.log(place.geometry.location.lat());
          console.log(place.geometry.location.lng());
        }}
      />
    </div>
  );
};

export default Header;
