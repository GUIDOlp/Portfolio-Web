import React from "react";
import "./Profile.css";
import ProfileDetails from "./ProfileDetails";
import cssLogo from "../../assets/css3-logo.png";
import reactLogo from "../../assets/react-logo.png";
import javascriptLogo from "../../assets/javascript-2.png";
import htmlLogo from "../../assets/html-logo.png";
import nodejsLogo from "../../assets/nodejs-logo.png";

const Profile = () => {
  return (
    <div className="profile-container" id="home">
      <div className="profile-picture-container">
        <div className="profile-picture">
          <div className="profile-picture-background">
            <img src={cssLogo} alt="" className="cssLogo" />
            <img src={reactLogo} alt="" className="reactLogo" />
            <img src={javascriptLogo} alt="" className="javascriptLogo" />
            <img src={htmlLogo} alt="" className="htmlLogo" />
            <img src={nodejsLogo} alt="" className="nodejsLogo" />
          </div>
        </div>
      </div>
      <ProfileDetails />
    </div>
  );
};

export default Profile;
