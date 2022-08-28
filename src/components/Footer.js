import github from "../images/github-logo.png";
import linkedin from "../images/linkedin-logo.png";
import upArrow from "../images/up-arrow.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__down">
        <a href="#home">
          <img className="footer__arrow" src={upArrow} alt="" />
        </a>
      </div>
      <div className="footer__icons">
        <span>
          <a
            href="https://github.com/Dsoesito"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="footer__logo" src={github} alt="github" />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/daniel-soesito/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="footer__logo" src={linkedin} alt="github" />
          </a>
        </span>
      </div>
      <div className="footer__text">
        <p>
          Made by <span className="footer__name">Daniel Soesito</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
