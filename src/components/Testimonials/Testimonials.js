import AOS from "aos";
import React, { useEffect } from "react";
import Testimonial from "./Testimonial";
import gaire from "../../images/gaire.jpg";
import sarthak from "../../images/laxman.png";
import riwaj from "../../images/riwaj.jpg";

function Testimonials() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="Testimonials__container" data-aos="zoom-in-up">
      <div className="container_">
        <Testimonial name={"Riwaj Neupane"} image={riwaj} />
        <Testimonial name={"Suraj Gaire"} image={gaire} />
        <Testimonial name={"Laxman Rai"} image={sarthak} />
      </div>
    </div>
  );
}

export default Testimonials;
