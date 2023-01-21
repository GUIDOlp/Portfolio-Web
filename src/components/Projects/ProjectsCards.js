import React from "react";
import "./ProjectsCards.css";
import img1 from "../../assets/portf.png";
import img2 from "../../assets/mobile-ecommerce.png";
import MyButton from "../utilities/Button/MyButton";
import { IoIosArrowForward } from "react-icons/io";
import LangContext from "../../context/LangContext";
import { useContext } from "react";

const ProjectsCards = () => {
  const { texts } = useContext(LangContext);

  const projectsData = [
    {
      id: "0",
      title: "Portfolio Web",
      img: img1,
      description: "ReactJS, Html y css .",
      url: "https://portfolio-web-guido-eliggi.netlify.app/",
    },
    {
      id: "1",
      title: "Ecommerce",
      img: img2,
      description: "Reactjs y css",
      url: "https://fenicecosmeticos.netlify.app/",
    },
  ];

  return (
    <div className="cards-container">
      {projectsData.map((data) => {
        return (
          <div className="projects-cards" key={data.id} data={data}>
            <a href={data.url} className="card-href">
              <div className="card" data-aos="zoom-in">
                <img src={data.img} alt="" className="card-image" />
                <div className="card-details">
                  <h2 className="card-title">{data.title}</h2>
                  <p className="card-description">{data.description}</p>
                  <MyButton>
                    <p className="button-text">
                      {texts.projectsButton}
                      <IoIosArrowForward className="icon" />
                    </p>
                  </MyButton>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsCards;
