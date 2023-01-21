import React from "react";
import "./AboutMe.css";
import Subtitle from "../utilities/Subtitle/Subtitle";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";
import { useContext } from "react";
import LangContext from "../../context/LangContext";

const AboutMe = () => {
  const { texts } = useContext(LangContext);

  return (
    <div className="about-me-container" id="about-me">
      <Subtitle>{texts.aboutMeTitle}</Subtitle>
      <div className="about-me" data-aos="zoom-in">
        <div className="about-me-photo" data-aos="zoom-in"></div>
        <div className="about-me-details">
          <div className="about-me-details-content" data-aos="zoom-in">
            <p>{texts.aboutMeContent}</p>
          </div>
          <HireResumeButtons className="about-me-button" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
