import React from "react";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import RightSideContainer from "../RightSideContainer/RightSideContainer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h3>Select your course</h3>
      <ImgCarousel></ImgCarousel>
      <div className="home-info">
        <RightSideContainer></RightSideContainer>
      </div>
    </div>
  );
};

export default Home;
