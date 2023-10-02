import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/volcano.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> HIAPA-ES </h1>
        <h3>
          {" "}
          Herramientas de Inteligencia Artificial Para la Política Aplicada de
          El Salvador{" "}
        </h3>
        <Link to="/menu">
          <button> TRY DEMO </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
