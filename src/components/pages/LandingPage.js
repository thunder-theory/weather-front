import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import BackgroundImage from "../../assets/images/bg.png";

export default function LandingPage() {
  return (
    <header style={HeaderStyle}>
      <h1 className="main-title text-center">Weather Scheduler</h1>
      <div className="buttons text-center">
        <Link to="/login">
          <button className="primary-button">로 그 인</button>
        </Link>
        <Link to="/register">
          <button className="primary-button" id="reg_btn">
            <span>회 원 가 입</span>
          </button>
        </Link>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
