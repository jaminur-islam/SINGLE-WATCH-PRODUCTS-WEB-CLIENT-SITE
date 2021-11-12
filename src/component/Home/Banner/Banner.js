import React from "react";
import img from "../../../img/banner-img/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
  <div>
      <div
      className="bg-primary d-flex justify-content-center align-items-center"
      style={{ height: "85vh" }}
    >
      <div className="container bg-primary">
        <div className="d-flex justify-content-evenly align-items-center flex-column flex-lg-row">
          <div>
            <h5> all-New design</h5>
            <h1> Unlimit4ed style. Go for days </h1>
            <button className="btn btn-danger"> Learn more</button>
            <div></div>
          </div>
          <div>
            <div className="mt-lg-0 mt-4">
              <img width="220" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
