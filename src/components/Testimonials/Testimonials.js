import AOS from "aos";
import React, { useEffect } from "react";
import Testimonial from "./Testimonial";
import gaire from "../../images/gaire.jpg";
import sarthak from "../../images/sarthak.jpg";
import riwaj from "../../images/riwaj.jpg";

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="Testimonials__container" data-aos="fade-up">
      <div className="container_">
        <Testimonial name={"Riwaj Neupane"} image={riwaj} />
        <Testimonial name={"Suraj Gaire"} image={gaire} />
        <Testimonial name={"Sarthak Shakya"} image={sarthak} />
      </div>
    </div>
  );
}

export default Testimonials;
