import React from "react";
import { animateScroll, Link } from "react-scroll";
// import {slide as Menu} from "react-burger-menu"

function MobileNavLinks() {
  return (
    <div id="model-model-nav" className="mobileNavContainer">
      <div className="mobileNav" width={"300px"} height={"400px"}>
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
