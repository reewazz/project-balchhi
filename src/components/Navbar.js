import React from "react";
import UpdateScrollPosition from "../Hooks/UpdateScrollPosition";
import balchhiLogo from "../images/balchhiLogo.jpg";
import { Link, animateScroll } from "react-scroll";
import { useMediaQuery } from "@material-ui/core";
import { motion } from "framer-motion";
import MenuFillIcon from "remixicon-react/MenuFillIcon"

export default function Navbar() {
  const [isopen, setIsopen] = React.useState(true);
  let scrollPosition = UpdateScrollPosition();
  console.log(scrollPosition);

  const media = useMediaQuery("(max-width:425px)");

  const variants = {
    open: { opacity: 1,y:"10%" },
    closed: { opacity:0,y:0 },
  };

  return (
    <div className={scrollPosition > 27 ? "nav shadow" : "nav"}>
      {!media ? (
        <div className={scrollPosition > 27 ? "nav shadow" : "nav"}>
          <div className="container">
            <div className="logo">
              <a href="/">
                {" "}
                <img src={balchhiLogo} alt="logo" />
              </a>
            </div>
            <div className="mid">
              <Link smooth={true} onClick={animateScroll.scrollToTop} to = "">
                <div className={scrollPosition < 627 ? "btn active" : "btn"}>
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
                    scrollPosition >= 627 && scrollPosition < 947
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
                    scrollPosition >= 947 && scrollPosition < 2500
                      ? "btn active"
                      : "btn"
                  }
                >
                  About Us
                </div>
              </Link>
              <Link to="map__container" smooth={true} duration={2000}>
                <div className={scrollPosition >= 2500 ? "btn active" : "btn"}>
                  Contact
                </div>
              </Link>
            </div>
            <a href="/">
              <div className="contactBtn">Contact Us</div>
            </a>
          </div>
        </div>
      ) : (
        <motion.nav
          animate={isopen ? "open" : "closed"}
          variants={variants}
        > 
          <MenuFillIcon/>
        </motion.nav>
      )}
    </div>
  );
}
