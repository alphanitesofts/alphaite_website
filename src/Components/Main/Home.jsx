import React from "react";
import Hero from "../Homepage/Hero";
import Services from "../Homepage/Services";
import Items from "../Homepage/Items";
import WebServices from "../Homepage/WebServices";
import Pricing from "../Homepage/Pricing";
import Products from "../Homepage/Products";
import AboutUs from "../Homepage/AboutUs";
import Testimonial from "../Homepage/Testimonial";
import Team from "../Homepage/Team";
import ContactUs from "../Homepage/ContactUs";
import Navbar from "../Body/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonial />
      <Services />
      <Products />
      <WebServices />
      <Items />
      <Pricing />
      <Team />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
