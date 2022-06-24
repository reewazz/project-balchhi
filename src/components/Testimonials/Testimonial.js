import React from "react";
import { Rating } from "@mui/material";

function Testimonial({ name, image }) {
  return (
    <div className="testimonial">
      <div className="about">
        <img src={image} alt={`${name}`} />
        <h3>{name}</h3>
        <Rating name="read-only" value={4} readOnly />
      </div>
      <q>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel
        possimus ut consequatur? Soluta laborum expedita, ad
      </q>
    </div>
  );
}

export default Testimonial;
