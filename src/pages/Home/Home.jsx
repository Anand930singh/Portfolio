import React, { useEffect, useRef } from "react";
import BluePlanet from "../../Asets/Svgs/blue_planet.png";
import Branch from "../../Asets/Svgs/git-branch-collaboration.svg";
import AboutCard from "../../components/about_card/AboutCard";
import Traceline from "../../components/traceline/Traceline";
import Skill from "../../components/skills/Skill";
import Projects from "../Projects/Projects";
import Education from "../../components/education_card/Education";
import Achievements from "../../components/achievements/Achievements";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import "./Home.css";

function Home() {
  const containerRefs = {
    aboutCardRef: useRef(null),
    projectsRef: useRef(null),
    skillCardRef: useRef(null),
  };
  const fadeInClass = "fade-in";
  const fadeOutClass = "fade-out";

  useEffect(() => {
    const handleScroll = () => {
      Object.values(containerRefs).forEach((containerRef) => {
        let isCenter = false;
        if (containerRef.current) {
          const { top, bottom } = containerRef.current.getBoundingClientRect();
          const windowCenter = window.innerHeight / 2;

          if (top < windowCenter && bottom > windowCenter) {
            // Element is in the center of the window
            if (!isCenter) {
              containerRef.current.classList.add(fadeInClass);
              containerRef.current.classList.remove(fadeOutClass);
              isCenter = true;
            }
          } else {
            // Element is outside the center of the window
            containerRef.current.classList.remove(fadeInClass);
            containerRef.current.classList.add(fadeOutClass);
            isCenter = false;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRefs]);

  return (
    <div className="home_body">
      <div className="contacts">
        <a
          href="https://www.linkedin.com/in/anand-kumar-singh-b46a3b229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaLinkedin size={"1.5rem"} />
          </div>
        </a>
        <a href="https://github.com/Anand930singh" target="_blank" rel="noopener noreferrer">
          <div>
            <FaGithubSquare size={"1.5rem"} />
          </div>
        </a>
        <a
          href="https://www.instagram.com/anandsingh4729/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <FaInstagram size={"1.5rem"} />
          </div>
        </a>
        <a href="mailto:anand2002king@gmail.com">
          <div>
            <FaMailBulk size={"1.5rem"} />
          </div>
        </a>
      </div>

      <div className="planet_svg">
        <div>
          <img src={BluePlanet} alt="error" />
        </div>
      </div>
      <div className="cardsContainer">
        <div className="aboutCardContain" ref={containerRefs.aboutCardRef}>
          <div className="traceLineContain">{<Traceline />}</div>
          <div className="branchContain">
            <img src={Branch} alt="error" />
          </div>
          <div>
            <AboutCard />
          </div>
        </div>
        <div className="aboutCardContain" ref={containerRefs.projectsRef}>
          <div className="traceLineContain">
            <Traceline />
          </div>
          <div className="projectsContainer">
            <div className="projectHead"></div>
            <div className="projectCards">
              <Projects />
            </div>
          </div>
        </div>
        <div className="aboutCardContain" ref={containerRefs.skillCardRef}>
          <div className="traceLineContain">
            <Traceline />
          </div>
          <div className="branchContain">
            <img src={Branch} alt="error" />
          </div>
          <div className="skillCardHome">
            <Skill />
          </div>
        </div>
        <div className="aboutCardContain" ref={containerRefs.skillCardRef}>
          <div className="traceLineContain">
            <Traceline />
          </div>
          {/* <div className="branchContain">
            <img src={Branch} alt="error" />
          </div> */}
          <div className="skillCardHome">
            <Education />
          </div>
        </div>
        <div className="aboutCardContain" ref={containerRefs.skillCardRef}>
          <div className="traceLineContain">
            <Traceline />
          </div>
          {/* <div className="branchContain">
            <img src={Branch} alt="error" />
          </div> */}
          <div className="skillCardHome">
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
