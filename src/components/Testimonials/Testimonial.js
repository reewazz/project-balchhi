import React from "react";
import { Rating } from "@mui/material";
import DoubleQuotesLIcon from "remixicon-react/DoubleQuotesLIcon"
import DoubleQuotesRIcon from "remixicon-react/DoubleQuotesRIcon"
import {Typography} from "@mui/material"

function Testimonial({ name, image,review }) {
  return (
    <div className="testimonial">
      <div className="about">
        <img src={image} alt={`${name}`} />
        <Typography variant="h3" component={"h3"}>{name}</Typography>
        <Typography component={"p"} variant="em">Full Stack Web Developer</Typography>
        {/* <Rating name="read-only" value={4} readOnly /> */}
      </div>
      <Typography variant="p" component={"p"}><i className="icon"><DoubleQuotesLIcon /></i> 
        {/*  */}
        {review}
        <i className="icon"><DoubleQuotesRIcon /></i> 
      </Typography>
    </div>
  );
}

export default Testimonial;
