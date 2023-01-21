import React, { createContext } from "react";
import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

const LangContext = createContext();

const languages = {
  spanish: {
    //navlinks
    home: "Inicio",
    about: "Sobre mí",
    resume: "Resumen",
    projects: "Proyectos",
    contact: "Contacto",
    //profile
    hello: "¡Hola! Soy ",
    subtitle: "Desarrollador Full Stack de aplicaciones web y para celulares.",
    //hireResumeButtons
    contactButton: "Contáctame",
    cvButton: "Obtener CV",
    cvPdf: "CV_GUIDO_ELIGGI.pdf",
    //about-me
    aboutMeTitle: "Sobre mí",
    aboutMeContent:
      "Soy de la ciudad de La Plata, Argentina y soy abogado de profesion. Desde chico siempre me interesó la tecnología, fundamentalmente por el poder creativo e innovador del que gozan las herramientas tecnológicas, sin embargo, nunca me había atrevido a dar el salto. Luego de haber trabajado algunos años en relación a mi actividad, en el año 2022, decido hacer un cambio profesional. En ese momento, obviamente me incliné por la tecnología, primero haciendo cursos básicos gratuitos de programación y Desarrollo Frontend para explorar, y como me gustó tanto, decidí que este sería el nuevo rumbo que quería darle a mi vida, con lo que comenze a estudiar la carrera de desarrollador Fullstack en Coderhouse. Hoy en dia me encuentro en busca de mi primera experiencia laboral en el ambito IT. Soy una persona autonoma, autodidacta, responsable y con muchisima voluntad de aprender. Me siento muy comodo trabajando en equipo como asi tambien en forma independiente.",
    //resume
    resumeTitle: "Resumen",
    resumeItemsContent: [
      {
        title: "Educación",
        icon: <FaUserGraduate />,
        content: "•Nov.2022 - Actualidad: Backend -Coderhouse.",
        content2: "•Sep.2022 - Nov.2022: Reactjs -Coderhouse.",
        content3: "•Jul.2022 - Sep.2022: Javascript -Coderhouse.",
        content4: "•Abril 2022 -Junio 2022: Desarrollo Web -Coderhouse.",
        content5: "•2009 -2018: Abogado -Universidad Nacional de La Plata.",
        open: false,
      },
      {
        title: "Habilidades",
        icon: <MdOutlineComputer />,
        content: "•Frontend: HTML, CSS, JAVASCRIPT, REACTJS, SASS, FIREBASE.",
        content2: "•Backend: NODEJS, EXPRESS, TYPESCRIPT, MYSQL, MONGODB.",
        open: false,
      },
    ],
    //projects
    projectsTitle: "Proyectos",
    projectsButton: "Ver",
    //footer
    footerTitle: "Contacto",
    footerContent:
      "Si deseas conocer un poco mas acerca de mi perfil, y te gustan mis proyectos, aqui te dejo algunas vias de comunicacion adicionales. Gracias por visitar mi sitio web personal!",
      copyright: "Todos los derechos reservados",
  },

  english: {
    //navlinks
    home: "Home",
    about: "About me",
    resume: "Resume",
    projects: "Projects",
    contact: "Contact",
    //profile
    hello: "Hello! I am ",
    subtitle: "Full Stack Web and Mobile Application Developer",
    //hireResumeButtons
    contactButton: "Contact me",
    cvButton: "Download CV",
    cvPdf: "CV_GUIDO_ELIGGI_ENGLISH.pdf",
    //about-me
    aboutMeTitle: "About me",
    aboutMeContent:
      "I am from the city of La Plata, Argentina and I am a lawyer by profession. Since I was a child I have always been interested in technology, mainly because of the creative and innovative power that technological tools enjoy, however, I had never dared to take the leap. After having worked for a few years in relation to my activity, in 2022, I decided to make a professional change. At that time, I obviously leaned towards technology, first doing free basic programming and Frontend Development courses to explore, and since I liked it so much, I decided that this would be the new direction I wanted to give my life, so I started studying Fullstack developer career at Coderhouse. Today I am looking for my first work experience in the IT field. I am an autonomous, self-taught, responsible person with a great desire to learn. I feel very comfortable working in a team as well as independently.",
    //resume
    resumeTitle: "Resume",
    resumeItemsContent: [
      {
        title: "Education",
        icon: <FaUserGraduate />,
        content: "•Nov.2022 -Present: Backend -Coderhouse.",
        content2: "•Sep.2022 -Nov.2022: Reactjs -Coderhouse.",
        content3: "•Jul.2022 -Sep.2022: Javascript -Coderhouse.",
        content4: "•April 2022 -June 2022: Web Developer -Coderhouse.",
        content5: "•2009 -2018: Lawyer - National University of La Plata.",
        open: false,
      },
      {
        title: "Skills",
        icon: <MdOutlineComputer />,
        content: "•Frontend: HTML, CSS, JAVASCRIPT, REACTJS, SASS, FIREBASE.",
        content2: "•Backend: NODEJS, EXPRESS, TYPESCRIPT, MYSQL, MONGODB.",
        open: false,
      },
    ],
    //projects
    projectsTitle: "Projects",
    projectsButton: "See",
    //footer
    footerTitle: "Contact",
    footerContent:
      "If you want to know a little more about my profile, and you like my projects, here are some additional ways of communication. Thank you for visiting my personal website",
    copyright: "All rights reserved",
  },
};

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  const [texts, setTexts] = useState(languages[language]);

  const handleLanguageToSpanish = (e) => {
    setLanguage("spanish");
    setTexts(languages.spanish);
  };
  const handleLanguageToEnglish = (e) => {
    setLanguage("english");
    setTexts(languages.english);
  };
  const data = { texts, handleLanguageToSpanish, handleLanguageToEnglish };
  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export { LangProvider };

export default LangContext;
