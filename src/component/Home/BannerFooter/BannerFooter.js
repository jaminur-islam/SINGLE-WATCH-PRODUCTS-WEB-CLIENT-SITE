import React from "react";
import "../Banner/Banner.css";

const watch = [
  {
    id: 1,
    style: "Productive & Stylish",
    img: "https://i.ibb.co/BywscZV/img-bf-2.png",
  },
  {
    id: 2,
    style: "Apple Watch s4(GPS)",
    img: "https://i.ibb.co/xDgx7FH/img-bf-3.png",
  },
  {
    id: 3,
    style: "Get better with every turn",
    img: "https://i.ibb.co/pwfCfS6/img-ft-1.png",
  },
];

const BannerFooter = () => {
  return (
    <div className="container banner-footer-container">
      <div className="row">
        {watch.map((wt) => {
          return (
            <div key={wt.id} className="col-lg-4">
              <div
                style={{ backgroundColor: "#0A93BB" }}
                className="d-flex align-items-center justify-content-evenly p-3 my-lg-0 my-2  rounded"
              >
                <div>
                  <span style={{ color: "#8A02A2" }} className="fw-bold">
                    BRAND NEW STYLE
                  </span>
                  <h4 className="w-75 text-dark fw-normal"> {wt.style}</h4>
                </div>
                <img height="100" src={wt.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerFooter;
