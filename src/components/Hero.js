import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Hero() {
  return (
    <div className="hero__container">
      <div className="about">
        <p>Welcome to balchhi</p>
        <h1>Probably The Best In The Town!</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          quibusdam dolorum nulla magni consequatur nihil eaque similique aut
          voluptatem cupiditate.
        </p>
        <button>
          <a href="https://www.youtube.com/watch?v=wTULrEWmNqs">
            <PlayCircleIcon className="icon" />
          </a>
          Watch video
        </button>
      </div>
      <div className="image">
        <img
          src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/278630450_548050643416562_2256059587121369373_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qDAWCd1KX1sAX-F8tQD&_nc_ht=scontent.fktm10-1.fna&oh=00_AT-DuLPiPTdxH6AnGJfLTrP9JgrxnpK21uTwUZgeWoIDRA&oe=62AC3BA7"
          alt="balchhi"
        />
      </div>
    </div>
  );
}

export default Hero;
