import React from "react";
import { animateScroll, Link } from "react-scroll";

function MobileNavLinks() {
  return (
    <div className="mobileNavContainer">
      <div className="mobileNav">
        <Link
          smooth={true}
          onClick={animateScroll.scrollToTop}
          className="link"
          to=""
        >
          Home
        </Link>
        <Link
          className="link"
          to="facilities__container"
          smooth={true}
          duration={1000}
          offset={-100}
        >
          Service
        </Link>
        <Link
          to="about__container"
          smooth={true}
          duration={1000}
          offset={-150}
          className="link"
        >
          About Us
        </Link>
        <Link
          to="map__container"
          smooth={true}
          duration={2000}
          className="link"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default MobileNavLinks;
