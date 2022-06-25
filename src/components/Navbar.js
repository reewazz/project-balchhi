import React, { useState } from "react";
import UpdateScrollPosition from "../Hooks/UpdateScrollPosition";
import balchhiLogo from "../images/balchhiLogo.jpg";
import { Link, animateScroll } from "react-scroll";

export default function Navbar() {
  const [toggleState, settoggleState] = useState(1);

  let scrollPosition = UpdateScrollPosition();

  const toggleMode = (index) => {
    settoggleState(index);
  };

  return (
    <div className={scrollPosition > 27 ? "nav shadow" : "nav"}>
      <div className="container">
        <div className="logo">
          <a href="/">
            {" "}
            <img src={balchhiLogo} alt="logo" />
          </a>
        </div>
        <div className="mid">
          <Link smooth={true} onClick={animateScroll.scrollToTop}>
            <div
              className={toggleState === 1 ? "btn active" : "btn"}
              onClick={() => toggleMode(1)}
            >
              Home
            </div>
          </Link>
          <Link
            to="facilities__container"
            smooth={true}
            duration={1000}
            offset={-100}
          >
            <div
              className={toggleState === 2 ? "btn active" : "btn"}
              onClick={() => toggleMode(2)}
            >
              Service
            </div>
          </Link>
          <Link
            to="about__container"
            smooth={true}
            duration={1000}
            offset={-150}
          >
            <div
              className={toggleState === 3 ? "btn active" : "btn"}
              onClick={() => toggleMode(3)}
            >
              About Us
            </div>
          </Link>
          <Link to="map__container" smooth={true} duration={2000}>
            <div
              className={toggleState === 4 ? "btn active" : "btn"}
              onClick={() => toggleMode(4)}
            >
              Contact
            </div>
          </Link>
        </div>
 
        <a href="/">
          <div className="contactBtn">Contact Us</div>
        </a>
      </div>
    </div>
  );
}
