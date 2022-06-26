import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import about from "../images/about.jpg";
import hero from "../images/hero.jpg";
import hero1 from "../images/hero1.jpg";
import pokhari from "../images/pokhari.jpg";
import Aos from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-fade";
import { Typography } from "@mui/material";

const images = [about, hero, hero1, hero, about];

function Gallery() {
  const [initial, setInitial] = useState(0);
  const [count, setCount] = useState(0);
  const [final, setFinal] = useState(3);
  const [toggle, setToggle] = useState(2);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const slidePrev = (index) => {
    setInitial(initial !== 0 ? initial - 1 : initial);
    setFinal(final > 3 ? final - 1 : final);
    setCount((prev) => prev - 1);
    setToggle(index);
  };

  const slideNext = (index) => {
    setInitial((prev) => prev + 1);
    setFinal((prev) => prev + 1);
    setCount(count + 1);
    setToggle(index);
  };

  // console.log(count);

  return (
    <div className="gallery__container" data-aos="fade-left">
      <div className="about">
        <Typography variant="h1" component={"h1"}>
          Our <span style={{ color: "orangered" }}>popular</span> places
        </Typography>
        <Typography variant="p" component={"p"}>
          Our target is to provide you with a best quality service
        </Typography>
      </div>
      <div className="swiperContainer">
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, EffectFade]}
        >
          {images.map((image, i) => {
            return (
              <SwiperSlide key={image} className="swiperSlide">
                <div key={i} className="image-container">
                  <img src={image} alt={`{${i} -image}`} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="button">
        <Button
          onClick={() => slidePrev(1)}
          className={toggle === 1 ? " btn active" : "btn"}
          disabled={initial === 0}
        >
          <ArrowLeft className={toggle === 1 ? "btn active" : "btn"} />
        </Button>
        <Button
          onClick={() => slideNext(2)}
          className={toggle === 2 ? "btn active" : "btn"}
          disabled={count === 3}
        >
          <ArrowRight className={toggle === 2 ? "btn active" : "btn"} />
        </Button>
      </div> */}
    </div>
  );
}

export default Gallery;
