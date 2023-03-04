import React from "react";
import Hero from "../Homepage/Hero";
import Services from "../Homepage/Services";
import Items from "../Homepage/Items";
import WebServices from "../Homepage/WebServices";
import Pricing from "../Homepage/Pricing";
import Products from "../Homepage/Products";
import AboutUs from "../Homepage/AboutUs";
import News from "../Homepage/News";
import Testimonial from '../Homepage/Testimonial'
import WorkingProcess from '../Homepage/WorkingProcess'
import Deals from '../Homepage/Deals'
import Team from "../Homepage/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <Testimonial />
      <Services />
      <Items />
      <WorkingProcess />
      <WebServices />
      <Pricing />
      <Products />
      {/* <Deals/> */}
      <AboutUs />
      {/* <News /> */}
      <Team/>
    </div>
  );
};

export default Home;
