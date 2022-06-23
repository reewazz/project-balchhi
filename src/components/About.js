import React, { useEffect } from "react";
import Btn from "./Button";
import AOS from "aos";
import about from "../images/about.jpg";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about_container"  id="about__container">
      <div className="container__">
        <div className="image" data-aos = {"fade-up-right"} data-aos-duration = {900}>
          <img src={about} alt="balchhi_image" />
        </div>
        <div className="content" data-aos = {"fade-up-left"} data-aos-duration = "900" data-aos-easing>
          <div className="title">
            <h1>
              <b>About</b>
              <span>
                {" "}
                <b>Us</b>
              </span>
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nostrum sunt, vel esse ipsum odio? Iusto a ipsum soluta possimus
            pariatur fuga voluptas iste nulla ipsa, tempore nam molestiae sint
            odit vitae aliquid nesciunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            alias animi repellat voluptas provident enim eius non dolorum quam
            nam, iusto aliquid illo quo laborum! Similique ipsum sint ad
            voluptatibus? Esse quibusdam repudiandae illo facilis natus officia.
          </p>
          <Btn text={"Learn More"}></Btn>
        </div>
      </div>
    </div>
  );
}
