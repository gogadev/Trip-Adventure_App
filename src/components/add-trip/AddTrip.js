import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { v4 as uuidv4 } from "uuid";

import LightSpeed from "react-reveal/LightSpeed";

import tripIcon from "../../assets/icon.png";

import "./add-trip.style.css";

toast.configure();
const AddTrip = ({ newTrip }) => {
  let date, place, type;
  const submit = (e) => {
    e.preventDefault();
    newTrip({
      id: uuidv4(),
      date: date.value,
      place: place.value,
      type: type.value,
    });
    date.value = place.value = type.value = "";
    toast("Your Next Adventure Added");
  };
  return (
    <div className="add-trip">
      <form className="form" onSubmit={submit}>
        <h2 className="main-title">Add Your Next Adventure</h2>
        <img className="trip-icon" src={tripIcon} alt="" />
        <LightSpeed left>
          <input
            className="title-input"
            type="text"
            id="date"
            ref={(input) => (place = input)}
            placeholder="Your Next Adventure"
            required
          />
        </LightSpeed>
        <input
          className="date-input"
          type="date"
          id="date"
          ref={(input) => (date = input)}
          required
        />
        <select className="select" ref={(input) => (type = input)}>
          <option value="">Select Category</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Australia">Australia</option>
          <option value="Africa">Africa</option>
        </select>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTrip;
