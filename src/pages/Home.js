import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner1.avif";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Cooking Creations</h1>
        <p>One Recipe At A Time</p>
        <Link to="/menu">
          <button>Browse</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
