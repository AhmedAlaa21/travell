import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  // *****Main Section*****
  return (
    <section className="hero">
      <img src={imageSrc} alt="travel" className="image"/>
      <h1 className="title">Travel made simple.</h1>
    </section>
  );
};

export default Hero;
