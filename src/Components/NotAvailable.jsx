import React from "react";

const NotAvailable = () => {
  return (
    <div className="service-notavailable">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
        alt="not-available"
      />
      <h2>Location Unserviceable</h2>
      <p>We don’t have any services here till now. Try changing location.</p>
    </div>
  );
};

export default NotAvailable;
