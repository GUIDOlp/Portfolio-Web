import React from "react";
import Typical from "react-typical";
import "./ProfileDetails.css";
import SocialNetworks from "../utilities/SocialNetworks/SocialNetworks";
import HireResumeButtons from "../utilities/HireResumeButtons/HireResumeButtons";
import LangContext from "../../context/LangContext";
import { useContext } from "react";

const ProfileDetails = () => {
  const { texts } = useContext(LangContext);

  return (
    <div className="profile-details">
      <SocialNetworks />
      <div className="profile-details-name">
        <span className="primary-text">
          {" "}
          {texts.hello}
          <span className="name-text">Guido Eliggi</span>
        </span>
      </div>
      <div className="profile-details-role">
        <span className="primary-text">
          <p className="profile-extra">{texts.subtitle}</p>{" "}
          <h1>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack",
                1500,
                "Html",
                1500,
                "Css",
                1500,
                "Javascript",
                1500,
                "React Js",
                1500,
                "Nodejs",
                1500,
                "Typescript",
                1500,
                "MySQL",
                1500,
                "MongoDB",
                1500,
              ]}
            />
          </h1>
        </span>
      </div>
      <HireResumeButtons />
    </div>
  );
};

export default ProfileDetails;
