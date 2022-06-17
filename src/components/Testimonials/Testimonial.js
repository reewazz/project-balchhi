import React from "react";

function Testimonial({ name, image }) {
  return (
    <div className="testimonial">
      <img src={image} alt="riwaj" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat vel
        possimus ut consequatur? Soluta laborum expedita, ad,
      </p>
    </div>
  );
}

export default Testimonial;
