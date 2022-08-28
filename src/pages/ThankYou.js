import "./ThankYou.css";
import { useNavigate } from "react-router-dom";
import check from "../images/checkmark.png";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thanks__container">
      <div className="thanks__content">
        <p className="thanks__text">THANK YOU!</p>
        <img className="thanks_check" src={check} alt="check mark"></img>
        <p className="thanks__message">Your message has been sent!</p>
        <p className="thanks__response">
          I will respond to your message ASAP! Have a great day!
        </p>
        <p className="thanks__redirect">
          Feel free to return to my portfolio by clicking
          <button onClick={() => navigate("/")} className="thanks__button">
            HERE
          </button>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
