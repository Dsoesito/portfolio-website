import { useState } from "react";
import "./Resume.css";

const Resume = () => {
  const [showABAL, setShowABAL] = useState(false);
  const [showROP, setShowROP] = useState(false);
  const [showChatime, setShowChatime] = useState(false);

  const showABALHandler = () => {
    setShowABAL(!showABAL);
  };

  const showROPHandler = () => {
    setShowROP(!showROP);
  };

  const showChatimeHandler = () => {
    setShowChatime(!showChatime);
  };

  return (
    <header id="resume">
      <div className="resume__education">
        <p>EDUCATION</p>
        <hr className="resume__lineTop" />
        <div className="resume__job">
          <div className="resume__info">
            <div className="resume__company">
              <p>University of Guelph</p>
            </div>
            <div className="resume__title">
              <p>Bachelor of Landscape Architecture • 2021</p>
            </div>
            <div className="resume__duration">
              <p>Graduated with Deans Honours List</p>
            </div>
            <div className="resume__duration">
              <p>Cumulative GPA: 82%</p>
            </div>
            {/* <hr className="resume__lineBottom" /> */}
            <div className="resume__spacer" />
          </div>
        </div>
      </div>
      <div className="resume__container">
        <p>WORK EXPERIENCE</p>
        <hr className="resume__lineTop" />
        <div className="resume__job">
          <div className="resume__info">
            <div className="resume__company">
              <p>Alexander Budrevics & Associates Limited</p>
            </div>
            <div className="resume__title">
              <p>Landscape Designer</p>
            </div>
            <div className="resume__duration">
              <p>April 2021 - Present </p>
            </div>
            {showABAL && <hr className="resume__lineInside" />}
          </div>
          {!showABAL && (
            <button className="resume__detailsButton" onClick={showABALHandler}>
              Show More
            </button>
          )}
          {showABAL && (
            <div className="resume__responsibilities">
              <ul>
                <li>
                  <p>
                    Coordinated and managed ~20 projects/year up to $1M in
                    revenue with team of 30+ industry consultants, focused on
                    designing commercial and industrial landscape sites while
                    monitoring and tracking progress of end-to-end development
                    projects
                  </p>
                </li>
                <li>
                  <p>
                    Defined the project’s vision and objectives as well as
                    co-create the art of the possible and draft the initial
                    designs given the project’s guardrails, inclusive of budget,
                    city by-laws, and sustainability metrics, with the client
                    and the Sr Landscape Designer
                  </p>
                </li>
                <li>
                  <p>
                    Prepared detailed cost estimate sheets outlining itemized
                    list of materials and costs to complete project for client
                    approval
                  </p>
                </li>
                <li>
                  <p>
                    Conducted quality assurance (QA) checks through development
                    to ensure final build matches design standards; wrote Change
                    Orders (COs) for partnering contractors to reconcile and
                    rebuild components that did not pass QA
                  </p>
                </li>
                <li>
                  <p>
                    Assisted in training 3 intern Landscape Technicians to
                    ensure company standards/practices are met when preparing
                    packages
                  </p>
                </li>
              </ul>
            </div>
          )}
          {showABAL && (
            <button className="resume__detailsButton" onClick={showABALHandler}>
              Hide
            </button>
          )}
        </div>
        <hr className="resume__lineBottom" />
        <div className="resume__job">
          <div className="resume__info">
            <div className="resume__company">
              <p>Region of Peel</p>
            </div>
            <div className="resume__title">
              <p>Landscape Design Intern</p>
            </div>
            <div className="resume__duration">
              <p>April 2019 - August 2019 </p>
            </div>
            {showROP && <hr className="resume__lineInside" />}
          </div>
          {!showROP && (
            <button className="resume__detailsButton" onClick={showROPHandler}>
              Show More
            </button>
          )}
          {showROP && (
            <div className="resume__responsibilities">
              <ul>
                <li>
                  <p>
                    Planned, organized, and delivered 300 40-min advisory
                    sessions with private residence owners across the Greater
                    Toronto Area
                  </p>
                </li>
                <li>
                  <p>
                    Co-facilitated discovery sessions to assess clients’
                    existing water usage systems and co-create the ideal
                    architectural design to optimize water efficiency resulting
                    in cost savings for both the client and the Region of Peel
                    due to more efficient water usage
                  </p>
                </li>
                <li>
                  <p>
                    Recorded and continuously updated Client Relationship
                    Management (CRM) tool to provide real-time information and
                    insights to the business, allowing for appropriate
                    communications and follow-ups
                  </p>
                </li>
              </ul>
            </div>
          )}
          {showROP && (
            <button className="resume__detailsButton" onClick={showROPHandler}>
              Hide
            </button>
          )}
        </div>
        <hr className="resume__lineBottom" />
        <div className="resume__job">
          <div className="resume__info">
            <div className="resume__company">
              <p>Chatime</p>
            </div>
            <div className="resume__title">
              <p>Barista/Tearista</p>
            </div>
            <div className="resume__duration">
              <p>September 2018 - April 2021 </p>
            </div>
            {showChatime && <hr className="resume__lineInside" />}
          </div>
          {!showChatime && (
            <button
              className="resume__detailsButton"
              onClick={showChatimeHandler}
            >
              Show More
            </button>
          )}
          {showChatime && (
            <div className="resume__responsibilities">
              <ul>
                <li>
                  <p>
                    Provided seamless service to 400+ customers daily by
                    preparing, serving, & invoicing food & beverages handling
                    $2,500+
                  </p>
                </li>
                <li>
                  <p>
                    Worked with team of 20 to maintain, operate, and
                    continuously improve services through routine inventory
                    checks of food & beverage supply, machinery, and ancillary
                    supplies while fulfilling in-person, phone, and online
                    orders
                  </p>
                </li>
              </ul>
            </div>
          )}
          {showChatime && (
            <button
              className="resume__detailsButton"
              onClick={showChatimeHandler}
            >
              Hide
            </button>
          )}
        </div>
        {/* <hr className="resume__lineBottom" /> */}
        <div className="resume__spacer" />
      </div>
    </header>
  );
};

export default Resume;
