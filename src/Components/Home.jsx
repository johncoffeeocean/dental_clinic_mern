import React from "react";
import "./Home.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import slider_one from "./images/slider_one.jpg";
import slider_two from "./images/slider_two.jpg";
import slider_three from "./images/slider_three.jpg";

const Home = () => {
  return (
    <>
      <div className="slider-images">
        <div className="slider_image" id="si_01">
          <img src={slider_one} alt="slider_image_one" id="img_01" />
          <div className="short_info">
            <h1>Welcome To Dental Clinic</h1>
            <h3>Dental Clinic, Dentist Welcimes you !</h3>
          </div>
        </div>
        <div className="slider_image" id="si_02">
          <img src={slider_two} alt="slider_image_two" id="img_02" />
        </div>
        <div className="slider_image" id="si_03">
          <img src={slider_three} alt="slider_image_three" id="img_03" />
        </div>
        <div className="slider_controls">
          <ChevronLeftIcon style={{ fontSize: "84px", color: "gray" }} />
          <NavigateNextIcon style={{ fontSize: "84px", color: "gray" }} />
        </div>
      </div>

      <div className="clinic_info">
        <div className="basic_info" id="info_01"></div>
        <div className="basic_info" id="info_02"></div>
        <div className="basic_info" id="info_03"></div>
      </div>
    </>
  );
};

export default Home;
