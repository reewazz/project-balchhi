import React from "react";
import { Rating } from "@mui/material";
import DoubleQuotesLIcon from "remixicon-react/DoubleQuotesLIcon"
import DoubleQuotesRIcon from "remixicon-react/DoubleQuotesRIcon"

function Testimonial({ name, image,review }) {
  return (
    <div className="testimonial">
      <div className="about">
        <img src={image} alt={`${name}`} />
        <h3>{name}</h3>
        <em>Full Stack Web Developer</em>
        {/* <Rating name="read-only" value={4} readOnly /> */}
      </div>
      <p><i className="icon"><DoubleQuotesLIcon /></i> 
        {/*  */}
        {review}
        <i className="icon"><DoubleQuotesRIcon /></i> 
      </p>
    </div>
  );
}

export default Testimonial;
