import React from "react";
import Testimonial from "./Testimonial";
import gaire from "../../images/gaire.jpg";
import laxman from "../../images/laxman.png";
import riwaj from "../../images/riwaj.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";

function Testimonials() {
  return (
    <div className="Testimonials__container" data-aos="fade-up">
      <div className="container_">
        <Swiper
          slidesPerView={
            window.innerWidth > 768 ? 2 : 1
          }
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
