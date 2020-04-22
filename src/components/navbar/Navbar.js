import React from "react";
import { NavLink } from "react-router-dom";

import Zoom from "react-reveal/Zoom";

import navImg from "../../assets/img.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <Zoom top>
          <h1 className="title">
            <span>M</span>y<span>A</span>dventures.com
          </h1>
        </Zoom>
      </NavLink>
      <img className="nav-img" src={navImg} alt="" />
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="add">Add Adventure</NavLink>
        <NavLink to="trips">My Adventures</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
