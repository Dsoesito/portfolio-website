import "./ResumeView.css";
import resumeImage from "../images/Soesito_Daniel_Resume.png";
import { useNavigate } from "react-router-dom";

const ResumeView = () => {
  const navigate = useNavigate();

  return (
    <div className="resumeView__container">
      <div>
        <img className="resumeView__box" src={resumeImage} alt="resume" />
      </div>
      <p className="resumeView__redirect">
        Feel free to return to my portfolio by clicking
        <button onClick={() => navigate("/")} className="resumeView__button">
          HERE
        </button>
      </p>
    </div>
  );
};

export default ResumeView;
