import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import hero from "../images/hero1.jpg";
import "animate.css";

function Hero() {
  return (
    <div className="hero__container">
      <div className="container">
        <div className="about">
          <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
          <div className="blob1 animate__animated animate__pulse animate__infinite	infinite"></div>
          <p>Welcome to balchhi</p>
          <h1>Probably The Best In The Town!</h1>
          <p>We Connect Like a Family With Best Food In The Town.</p>

          <button>
            <a
              href="https://www.youtube.com/watch?v=wTULrEWmNqs"
              target={"_blank"}
              rel="noreferrer"
            >
              <PlayCircleIcon className="icon" />
            </a>
            Watch video
          </button>
          <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
          <div className="blob1 animate__animated animate__pulse animate__infinite	infinite"></div>
        </div>

        <div className="image">
          <img src={hero} alt="balchhi" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
