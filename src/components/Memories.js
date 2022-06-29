import React from "react";
import "react-multi-carousel/lib/styles.css";
import one from "../images/memories/1.jpg";
import two from "../images/memories/2.jpg";
import three from "../images/memories/3.jpg";
import four from "../images/memories/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-fade";
import { Typography } from "@mui/material";

const images = [one,two,three,four];

function Memories() {
  return (
    <div className="gallery__container" data-aos="fade-up">
      <div className="about">
        <Typography variant="h1" component={"h1"}>
          Our <span style={{ color: "orangered" }}>Memories</span>
        </Typography>
        <Typography variant="p" component={"p"}>
          Create some beautiful memories at balchhi.
        </Typography>
      </div>
      <div className="swiperContainer">
        <Swiper
          breakpoints={{
            425:{
              slidesPerView:1,
              spaceBetween:5
            },
            768:{
              slidesPerView:3,
              spaceBetween:10
            }
          }}
          className="mySwiper"
          slidesPerView={3}
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

export default Memories;
