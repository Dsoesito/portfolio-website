import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import ThankYou from "./pages/ThankYou";
import ResumeView from "./pages/ResumeView";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="resume" element={<ResumeView />} />
        <Route path="thankyou" element={<ThankYou />} />
      </Routes>
    </div>
  );
};

export default App;
