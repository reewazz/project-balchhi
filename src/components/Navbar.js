import React, { useState } from "react";
import UpdateScrollPosition from "../Hooks/UpdateScrollPosition"
import balchhiLogo from "../images/balchhiLogo.jpg"

export default function Navbar() {
  const [toggleState, settoggleState] = useState(1);

  let scrollPosition = UpdateScrollPosition()
  console.log(scrollPosition)

  const toggleMode = (index) => {
    settoggleState(index);
  };

  return (
    <div className={scrollPosition > 27 ? "nav shadow" : "nav"}>
      <div className="container">

      <div className="logo">
        <a href="#">
          {" "}
          <img
            // src="https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/277554159_536567404564886_8179199460324938164_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OFvP6PeYyNsAX_C4_RU&_nc_ht=scontent.fktm3-1.fna&oh=00_AT-vMd66MLrS5-mbDnGlTVYIyF7vFpPowkwd41_EvoizFg&oe=62B1C51E"
            src={balchhiLogo}
            alt="logo"
          />
        </a>
      </div>
      <div className="mid">
        <a href="#">
          <div
            className={toggleState === 1 ? "btn active" : "btn"}
            onClick={() => toggleMode(1)}
          >
            Home
          </div>
        </a>
        <a href="#">
          <div
            className={toggleState === 2 ? "btn active" : "btn"}
            onClick={() => toggleMode(2)}
          >
            Service
          </div>
        </a>
        <a href="#">
          <div
            className={toggleState === 3 ? "btn active" : "btn"}
            onClick={() => toggleMode(3)}
          >
            About Us
          </div>
        </a>
        <a href="#">
          <div
            className={toggleState === 4 ? "btn active" : "btn"}
            onClick={() => toggleMode(4)}
          >
            Contact
          </div>
        </a>
      </div>

      <a href="#">
        <div className="contactBtn">Contact Us</div>
      </a>
    </div>
    </div>
  );
}
