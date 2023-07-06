// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Catergories from "../../components/Categories.jsx/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return <div className="home">
    <Slider/>
    <FeaturedProducts type="featured" />
    <Catergories />
    <FeaturedProducts type="trending" />
    <Contact/>
  </div>;
};

export default Home;
