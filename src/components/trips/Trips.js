import React from "react";
import { Link } from "react-router-dom";

import image from "../../assets/image.png";

import arrow from "../../assets/icon.png";

import Trip from "../trip/Trip";

import "./trips.style.css";

const Trips = ({ match, adventures}) => {
  const filter = match.params.filter;
  const trips = filter
    ? adventures.filter((trip) => trip.type === filter)
    : adventures;
  return (
    <div className="trips">
      <h3 className="main-title">My Adventures</h3>
      <img className="image" src={image} alt="" />
      <div className="card">
        <ul className="list">
          {trips.map((trip, id) => (
            <Trip key={id} {...trip} 
            />
          ))}
        </ul>
      </div>
      <div className="filter">
        <span className="filter-title">Filter By</span>
        <img className="arrow" src={arrow} alt="" />
        <div className="link">
          <Link to="/trips">All</Link>
          <Link to="/trips/Europe">Europe</Link>
          <Link to="/trips/Americas">Americas</Link>
          <Link className="americas" to="/trips/Asia">
            Asia
          </Link>
          <Link to="/trips/Africa">Africa</Link>
          <Link to="/trips/Australia">Australia</Link>
        </div>
      </div>
    </div>
  );
};

export default Trips;
