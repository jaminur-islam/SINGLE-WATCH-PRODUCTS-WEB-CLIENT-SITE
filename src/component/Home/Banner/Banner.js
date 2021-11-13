import React from "react";
import img from "../../../img/banner-img/banner.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner">
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "80vh", backgroundColor: "#98C8B6" }}
      >
        <div className="container bg-primary p-3 rounded banner-middle">
          <div className="d-flex justify-content-evenly align-items-center flex-column flex-lg-row">
            <div>
              <h5 className="heading-5 text-uppercase text-white">
                All-New design
              </h5>
              <h1 className=" heading-1 text-uppercase w-75">
                Unlimit4ed style. Go for days
              </h1>
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
