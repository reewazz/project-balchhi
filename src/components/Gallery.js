import React,{useEffect} from "react";
import "react-multi-carousel/lib/styles.css";
import about from "../images/about.jpg";
import hero from "../images/hero.jpg";
import hero1 from "../images/hero1.jpg";
import Aos from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-fade"
import { Typography } from "@mui/material";

const images = [about, hero, hero1, hero, about];

function Gallery() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);


  return (
    <div className="gallery__container" data-aos="fade-left">
      <div className="about">
        <Typography variant="h1" component={"h1"}>
          Our <span style={{ color: "orangered" }}>popular</span> places
        </Typography>
        <Typography variant="p" component={"p"}>Our target is to provide you with a best quality service</Typography>
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
          spaceBetween= {10}
          navigation = {true}
          modules={[Navigation,EffectFade]}
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
