import React from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function Hero() {
  return (
    <div className="hero__container">
      <div className="about">
        <p>Welcome to balchhi</p>
        <h2>Probably best place in the town</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          quibusdam dolorum nulla magni consequatur nihil eaque similique aut
          voluptatem cupiditate.
        </p>
        <button>
          <a href="https://www.youtube.com/watch?v=wTULrEWmNqs"><PlayCircleIcon className="icon"/></a>
          Watch video
        </button>
      </div>
      <div className="image">
        <img
          src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/223693971_380502276838067_1097718401283390176_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=f16-WyMKzVIAX9Xhfbx&_nc_ht=scontent.fktm3-1.fna&oh=00_AT9t1bEZ7y9p9pQiiMsSG805OC_Nl8P9tLS2YkD0EKXmLQ&oe=62AACF31"
          alt="balchhi"
        />
      </div>
    </div>
  );
}

export default Hero;
