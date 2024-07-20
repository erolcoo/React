import React from "react";
import "./CreateDestination.css";

const DestinationItem = ({ destination, onEdit, onDelete }) => {
  return (
    <div className="travel-item">
      <img
        src={destination.image}
        alt={destination.name}
        className="travel-image"
      />
      <div className="travel-info">
        <h3>{destination.name}</h3>
        <p>Days: {destination.days}</p>
        <div className="destination-buttons">
          <button onClick={() => onEdit(destination.id)}>Edit</button>
          <button onClick={() => onDelete(destination.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationItem;
