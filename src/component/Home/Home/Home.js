import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import BannerFooter from "../BannerFooter/BannerFooter";
import Products from "../Products/Products";
import Review from "../Review/Review";

/* // passs
Watch-website
7ilmYlFrOoxLNkMV */
const Home = () => {
  return (
    <div>
      <Navigation> </Navigation>
      <Banner></Banner>
      <BannerFooter></BannerFooter>
      <Products></Products>
      <Review></Review>
    </div>
  );
};

export default Home;