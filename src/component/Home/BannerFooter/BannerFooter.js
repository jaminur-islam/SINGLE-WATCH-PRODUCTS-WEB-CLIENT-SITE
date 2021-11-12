import React from "react";
import '../Banner/Banner.css'

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
              <div className="d-flex align-items-center justify-content-evenly p-3 bg-success">
                <div>
                  <span>BRAND NEW STYLE</span>
                  <h4 className="w-75"> {wt.style}</h4>
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
