import React, { useEffect } from "react";
import Btn from "./Button";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="about_container" data-aos={"fade-right"}>
      <div className="container__">
        <div className="image">
          <img
            src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.6435-9/167895536_308163557405273_1002174637336758035_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=yAT07SQH7zoAX_FNhB3&tn=9O6XPRlpe1UyW1Nz&_nc_ht=scontent.fktm3-1.fna&oh=00_AT-avSxNatxNQFVWBHzl-clWsX-pqADYRukGFfjRZOzfVw&oe=62D45C41"
            alt=""
          />
        </div>
        <div className="content">
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
