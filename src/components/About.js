import React from "react";
import Btn from "./Button";
import about from "../images/about.jpg";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <div className="about_container" id="about__container">
      <div className="container__">
        <div
          className="image"
          data-aos={"fade-up"}
        >
          <img src={about} alt="balchhi_image" />
        </div>
        <div
          className="content"
          data-aos={"fade-up"}
          data-aos-duration="900"
          data-aos-easing
        >
          <div className="title">
            <Typography component={"h1"} variant="h1">
              <b>About</b>
              <span>
                {" "}
                <b>Us</b>
              </span>
            </Typography>
          </div>
          <Typography component="p" variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nostrum sunt, vel esse ipsum odio? Iusto a ipsum soluta possimus
            pariatur fuga voluptas iste nulla ipsa, tempore nam molestiae sint
            odit vitae aliquid nesciunt!
          </Typography>
          <Typography component="p" variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            alias animi repellat voluptas provident enim eius non dolorum quam
            nam, iusto aliquid illo quo laborum! Similique ipsum sint ad
            voluptatibus? Esse quibusdam repudiandae illo facilis natus officia.
          </Typography>
          <Btn text={"Learn More"}></Btn>
        </div>
      </div>
    </div>
  );
}
