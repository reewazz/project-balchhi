import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Hero() {
  return (
    <div className="hero__container">
      <div className="custom-shape-divider-top-1655666485">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

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
          <img
            src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/277805480_540913967463563_5831049813952961112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=_oMDXFvIbOgAX-cz6Zj&_nc_oc=AQnEkOVf_9CDGJrOQihQ6OKLmwAVOZc4sKvjqcG5MDpEtnscQNacDzJSucwHWs9zCIozs-H2Ek5QLRIT-YybKVdy&tn=9O6XPRlpe1UyW1Nz&_nc_ht=scontent.fktm3-1.fna&oh=00_AT8UviGoR5eC6NUGqbaM6gvJzk9rxUGb8dQphT4g64gHeA&oe=62B341E4"
            alt="balchhi"
          />
        </div>
        {/* <div className="custom-shape-divider-top-1655707445">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div> */}
        <div class="custom-shape-divider-top-1655708468">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
      </div>
    </div>
  );
}

export default Hero;
