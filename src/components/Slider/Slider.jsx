import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  // flipped will be used to determine the image`s position..
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Travel" className="slider-image" />
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <p className="slider-subtitle">{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider-content">
            <h1 className="slider-title">{title}</h1>
            <p className="slider-subtitle">{subtitle}</p>
          </div>
          <img src={imageSrc} alt="Travel" className="slider-image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider-zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;
