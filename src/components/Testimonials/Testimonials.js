import AOS from "aos";
import React, { useEffect } from "react";
import Testimonial from "./Testimonial";
import gaire from "../../images/gaire.jpg";
import sarthak from "../../images/laxman.png";
import riwaj from "../../images/riwaj.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation,Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

function Testimonials() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="Testimonials__container" data-aos="zoom-in-up">
      <div className="container_">
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          pagination={{clickable:true}}
          modules={[Pagination,Navigation,Autoplay]}
          observeParents = {true}
          observer = {true}
          loop = {true}
          autoplay = {true}
        >
          <SwiperSlide>
            <Testimonial name={"Riwaj Neupane"} image={riwaj} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial name={"Suraj Gaire"} image={gaire} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial name={"Laxman Rai"} image={sarthak} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
