import netflixClonePic from "../images/netflixclone-screenshot.png";
import blogPic from "../images/blog-screenshot.png";
import instagramClonePic from "../images/instagramclone-screenshot.png";
import jackedAFPic from "../images/jackedAF-screenshot.png";
import landingPagePic from "../images/landingpage-screenshot.png";

import "./Projects.css";

const Projects = () => {
  return (
    <header id="projects">
      <div className="projects__container">
        <p>PROJECTS</p>
        <div className="projects">
          <span className="projects__project">
            <a
              className="projects__link"
              href="https://www.danielsoesito-instaclone.online/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects__picture"
                src={instagramClonePic}
                alt="instagram clone"
              />
            </a>
            <div className="projects__text">
              <p className="projects__title">Instagram Clone</p>
              <p className="projects__tools">
                React.JS, Next.JS, HTML, Tailwind Css, Firebase v9, Recoil,
                Faker.io API, Hostinger, Vercel
              </p>
              <p className="projects__description">
                Social media clone I built to mimic the popular image sharing
                platform “Instagram”. Feel free to sign in with you Gmail
                account and post your own picture/comments, but please do NOT
                post anything inappropriate!
              </p>
              <a
                className="projects__github"
                href="https://github.com/Dsoesito/instaclone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </span>
          <hr className="projects__lineVert" />
          <span className="projects__project">
            <a
              className="projects__link"
              href="http://djangoblog-env.eba-awppdmnx.ca-central-1.elasticbeanstalk.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects__picture"
                src={blogPic}
                alt="personal blog"
              />
            </a>
            <div className="projects__text">
              <p className="projects__title">Personal Blog</p>
              <p className="projects__tools">
                Django, Python, HTML, CSS, AWS (Elastic Beanstalk, EC2)
              </p>
              <p className="projects__description">
                Personal blog I made at the beginning of my coding journey to
                log my learning on a weekly basis! Feel free to check it out and
                post some comments on a blog posts as I am still updating it
                every week!
              </p>
              <a
                className="projects__github"
                href="https://github.com/Dsoesito/Personal-Blog"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </span>
        </div>
        <hr className="projects__lineVertHidden" />
        <hr className="projects__line" />
        <div className="projects">
          <span className="projects__project">
            <a
              className="projects__link"
              href="https://netflixclone-ad599.web.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects__picture"
                src={netflixClonePic}
                alt="netflix clone"
              />
            </a>
            <div className="projects__text">
              <p className="projects__title">Netflix Clone</p>
              <p className="projects__tools">
                React.JS, HTML, CSS, Firebase v9, Stripe, NextAuth, Redux, TMDB
                API
              </p>
              <p className="projects__description">
                Website clone I made to mimic the Netflix site, with fully
                functional stripe payment authentication connected. Feel free to
                make your own account with fake email and passwords, OR login
                with my fake credentials (daniel@gmail.com | 123456789).
              </p>
              <a
                className="projects__github"
                href="https://github.com/Dsoesito/netflixclone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </span>
          <hr className="projects__lineVert" />
          <span className="projects__project">
            <a
              className="projects__link"
              href="https://dsoesito.github.io/Jacked-AF/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects__picture"
                src={jackedAFPic}
                alt="workout app"
              />
            </a>
            <div className="projects__text">
              <p className="projects__title">Work Out Planner</p>
              <p className="projects__tools">
                React.JS, HTML, CSS, Firebase v9, Redux
              </p>
              <p className="projects__description">
                Workout builder app I made that allows users to view a plethora
                of exercises (based on body part/movement pattern) and add them
                to a total workout plan. Users can add individual exercises and
                their desired number of sets and delete exercises/sets as they
                go through their work out!
              </p>
              <a
                className="projects__github"
                href="https://github.com/Dsoesito/Jacked-AF"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </span>
        </div>
        <hr className="projects__lineVertHidden" />
        <hr className="projects__line" />
        <div className="projects">
          <span className="projects__project">
            <a
              className="projects__link"
              href="https://dsoesito.github.io/landing-page/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="projects__picture"
                src={landingPagePic}
                alt="landing page"
              />
            </a>
            <div className="projects__text">
              <p className="projects__title">Landing Page</p>
              <p className="projects__tools">
                JavaScript, HTML, CSS, OpenWeather API
              </p>
              <p className="projects__description">
                Web browser landing page that shows times, current local weather
                (assuming you allow location services on your browser), and
                customized messages. This app is a combination of two apps
                (landing page and weather app) that I made, and I use it every
                day on all my web browsers!
              </p>
              <a
                className="projects__github"
                href="https://github.com/Dsoesito/landing-page"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </span>
          {/* <hr className="projects__lineVert" /> */}
        </div>
        <hr className="projects__line" />
        <hr className="projects__lineVertHidden" />
      </div>
    </header>
  );
};

export default Projects;
