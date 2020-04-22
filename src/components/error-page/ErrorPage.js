import React from "react";

import Roll from "react-reveal/Roll";

import errorImg from "../../assets/error.png";

import "./error-page.style.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">Page Not Found</h1>
      <Roll left>
        <img className="error-img" src={errorImg} alt="" />
      </Roll>
    </div>
  );
};

export default ErrorPage;
