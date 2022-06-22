import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import hero from "../images/hero1.jpg";

function Hero() {
  return (
    <div className="hero__container">
      <div className="container">
        <div className="about">
          <p>Welcome to balchhi</p>
          <h1>Probably The Best In The Town!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            quibusdam dolorum nulla magni consequatur nihil eaque similique aut
            voluptatem cupiditate.
          </p>
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
        </div>
        <div className="image">
          <img src={hero} alt="balchhi" />
        </div>
        <div class="custom-shape-divider-top-1655708468">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>

          <div class="custom-shape-divider-top-1655708468">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
