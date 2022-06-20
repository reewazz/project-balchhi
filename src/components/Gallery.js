import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Gallery() {
  return (
    <div className="gallery__container">
      <div className="about">
        <h1>Our popular places</h1>
        <p>Our target is to provide you with a best quality service</p>
      </div>
      <div className="gallery">
        <Carousel responsive={responsive}>
          <img
            src="https://images.unsplash.com/photo-1655726274521-baa049e629d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1655439191538-6bcd275e61ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1655365225179-fbc453d3bd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1655439191993-1e257b9a376a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          {/* </div> */}
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
