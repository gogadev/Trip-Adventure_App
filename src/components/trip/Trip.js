import React from "react";

import Slide from "react-reveal/Slide";

import "./trip.style.css";

const Trip = ({ date, place, type}) => {
  return (
    <div className="trip">
      <Slide left>
        <li className="details date">Date: {date}</li>
        <li className="details place">Place: {place}</li>
        <li className="details type">Type: {type}</li>
      </Slide>
      {/* <button className="delete-btn">X</button> */}
    </div>
  );
};

export default Trip;
