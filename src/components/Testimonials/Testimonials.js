import AOS from "aos";
import React, { useEffect } from "react";
import Testimonial from "./Testimonial";
import gaire from "../../images/gaire.jpg";
import laxman from "../../images/laxman.png";
import riwaj from "../../images/riwaj.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
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
          breakpoints={{
            425: {
              slidesPerView: 1,
            },
            768:{
              slidesPerView:3
            }
          }}
          slidesPerView={3}
          spaceBetween={5}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          observeParents={true}
          observer={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <Testimonial
              name={"Riwaj Neupane"}
              image={riwaj}
              review={
                "It was a great experience staying at balchhi,it felt like a home and the service was top notch."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"Suraj Gaire"}
              image={gaire}
              review={
                "It was a great experience staying at balchhi,it felt like a home and the service was top notch."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonial
              name={"Laxman Rai"}
              image={laxman}
              review={
                "It was a great experience staying at balchhi,it felt like a home and the service was top notch."
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
