import React, { useState } from "react";
import UpdateScrollPosition from "../Hooks/UpdateScrollPosition";
import balchhiLogo from "../images/balchhiLogo.jpg";
import { Link, animateScroll } from "react-scroll";

export default function Navbar() {
  let scrollPosition = UpdateScrollPosition();
  console.log(scrollPosition);

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
              className={scrollPosition < 627 ? "btn active" : "btn"}
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
              className={
                scrollPosition >= 627 && scrollPosition < 965
                  ? "btn active"
                  : "btn"
              }
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
              className={
                scrollPosition >= 965 && scrollPosition < 2550
                  ? "btn active"
                  : "btn"
              }
            >
              About Us
            </div>
          </Link>
          <Link to="map__container" smooth={true} duration={2000}>
            <div
              className={scrollPosition >= 2550 ? "btn active" : "btn"}
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
