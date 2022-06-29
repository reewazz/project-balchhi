import React from "react";
import "react-multi-carousel/lib/styles.css";
import about from "../images/about.jpg";
import hero from "../images/hero.jpg";
import hero1 from "../images/hero1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-fade";
import { Typography } from "@mui/material";

const images = [about, hero, hero1, hero, about];

function Gallery() {
  return (
    <div className="gallery__container" data-aos="fade-up">
      <div className="about">
        <Typography variant="h1" component={"h1"}>
          Our <span style={{ color: "orangered" }}>popular</span> places
        </Typography>
        <Typography variant="p" component={"p"}>
          Our target is to provide you with a best quality service.
        </Typography>
      </div>
      <div className="swiperContainer">
        <Swiper
          className="mySwiper"
          slidesPerView={window.innerWidth > 992 ? 3 : 1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, EffectFade]}
        >
          {images.map((image, i) => {
            return (
              <SwiperSlide key={i} className="swiperSlide">
                <div key={i} className="image-container">
                  <img src={image} alt={`{${i} -image}`} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </div>
  );
}

export default Gallery;
