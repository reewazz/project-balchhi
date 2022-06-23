import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ArrowLeft from "remixicon-react/ArrowLeftFillIcon";
import ArrowRight from "remixicon-react/ArrowRightFillIcon";
import about from "../images/about.jpg";
import hero from "../images/hero.jpg";
import hero1 from "../images/hero1.jpg";
import Aos from "aos";
import { Button } from "@mui/material";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

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

  console.log(count);

  return (
    <div className="gallery__container" data-aos="fade-left">
      <div className="about">
        <h1>
          Our <span style={{ color: "orangered" }}>popular</span> places
        </h1>
        <p>Our target is to provide you with a best quality service</p>
      </div>
      <div className="gallery">
          {images.slice(initial, final).map((image, index) => {
            return (
              <div className="image-container">
                <img src={image} key={index} alt={image} />
              </div>
            );
          })}
      </div>
      <div className="button">
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
          disabled={count === 2}
        >
          <ArrowRight className={toggle === 2 ? "btn active" : "btn"} />
        </Button>
      </div>
    </div>
  );
}

export default Gallery;
