import React from "react";
import { useContext } from "react";
import LangContext from "../../../context/LangContext";
import MyButton from "../Button/MyButton";
import "./HireResumeButtons.css";

const HireResumeButtons = () => {
  const { texts } = useContext(LangContext);

  return (
    <div className="hire-resume-buttons" data-aos="zoom-in">
      <a href="/#contact-me">
        <MyButton>{texts.contactButton}</MyButton>
      </a>
      <a href={texts.cvPdf} download={texts.cvPdf}>
        <MyButton>{texts.cvButton}</MyButton>
      </a>
    </div>
  );
};

export default HireResumeButtons;
