import singapore from "../images/singapore.jpg";
import github from "../images/github-logo.png";
import linkedin from "../images/linkedin-logo.png";
import downArrow from "../images/down-arrow.png";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
  return (
    <header id="home">
      <div className="banner__container">
        <div className="banner__header">
          <ul>
            <a className="nav__button" href="#home">
              HOME
            </a>
            <a className="nav__button" href="#about">
              ABOUT
            </a>
            <a className="nav__button" href="#projects">
              PROJECTS
            </a>
            <a className="nav__button" href="#resume">
              RESUME
            </a>
            <a className="nav__button" href="#contact">
              CONTACT
            </a>
          </ul>
        </div>
        <img
          className="banner__img"
          src={singapore}
          alt="singapore background"
        />
        <div className="banner__title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome!")
                .pauseFor(1500)
                .deleteAll()
                .typeString("I am Daniel Soesito.")
                .start();
            }}
          />
        </div>
        <div className="banner__intro">
          <p>Aspiring full stack developer.</p>
        </div>
        <div className="banner__socials">
          <span>
            <a
              href="https://github.com/Dsoesito"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="banner__logo" src={github} alt="github" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/daniel-soesito/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="banner__logo" src={linkedin} alt="github" />
            </a>
          </span>
        </div>
        <div className="banner__down">
          <span>
            <a href="#about">
              <img className="banner__arrow" src={downArrow} alt="" />
            </a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Banner;
