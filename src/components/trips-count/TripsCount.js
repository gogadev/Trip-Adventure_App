import React from "react";

import Zoom from "react-reveal/Zoom";

import globe from "../../assets/globe.png";

import "./trips-count.style.css";

const TripsCount = ({ total, Europe, Asia, Americas, Australia, Africa }) => (
  <div className="trips-count">
    <div className="total">
      <h2 className="title xs">~{total} Adventures Are Waiting For You~</h2>
    </div>
    <Zoom top>
      <img className="globe" src={globe} alt="" />
    </Zoom>
    <div className="count">
        <h3 className="subtitle">Europe: {Europe}</h3>
        <h3 className="subtitle">Asia: {Asia}</h3>
        <h3 className="subtitle">Americas: {Americas}</h3>
        <h3 className="subtitle">Australia: {Australia}</h3>
        <h3 className="subtitle">Africa: {Africa}</h3>
    </div>
  </div>
);

export default TripsCount;
