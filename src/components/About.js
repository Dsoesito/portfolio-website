import profile from "../images/Daniel.jpg";
import downloadIcon from "../images/download-icon.png";
import resume from "../images/Soesito_Daniel_Resume.pdf";
import eyeIcon from "../images/eye.png";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <header id="about">
      <div className="about__container">
        <div>
          <img className="about__picture" src={profile} alt="Daniel Soesito" />
        </div>
        <div className="about__text">
          <p className="about__heading">SO, WHO IS DANIEL?</p>
          <p className="about__blurb">
            My name is Daniel Soesito and I am an aspiring full stack developer,
            that is completely self-taught. I graduated from the University of
            Guelph in Ontario Canada with a Bachelor of Landscape Architecture
            in April of 2021 and have been working full time as a Landscape
            Designer ever since. I taught myself how to code, at first as a fun
            pass-time, but before I knew it, I began to fall in love with
            programming!
          </p>
          <br />
          <p className="about__blurb">
            I started teaching myself Python, and though I enjoyed it, I soon
            came to crave some “design” aspects. I decided to look in to web
            development, both front and back end. I realized what I truly loved
            was not the “landscape” portion of my field, but rather, the
            “design” portion. Full stack web development has allowed me to
            fulfill those cravings in both the front end (designing web pages)
            and back end (designing the data systems).
          </p>
          <br />
          <p className="about__blurb">
            I have come a long way from the beginning and have made a lot of
            projects since then. This website is a compilation of some of my
            best work, so please, stay a while, check it out, and feel free to
            get in contact with me at any time!
          </p>
          <div className="about__info">
            <div className="about__details">
              <p className="about__header">Contact Details</p>
              <p className="about__address">
                <span>Daniel Soesito</span>
                <br />
                <span>dsoesito@outlook.com</span>
                <br />
                <span>+1 647-459-5330</span>
                <br />
                <span>
                  <a
                    className="about__link"
                    href="https://github.com/Dsoesito"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Github
                  </a>
                </span>
                <br />
                <span>
                  <a
                    className="about__link"
                    href="https://www.linkedin.com/in/daniel-soesito/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LinkedIn
                  </a>
                </span>
              </p>
            </div>
            <div className="about__download">
              <button
                onClick={() => navigate("resume")}
                className="about__buttonView"
              >
                <img className="about__eye" src={eyeIcon} alt="view resume" />
                View Resume
              </button>
              <hr className="about__hr" />
              <a href={resume} download className="about__button">
                <img
                  className="about__icon"
                  src={downloadIcon}
                  alt="download resume"
                />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;
