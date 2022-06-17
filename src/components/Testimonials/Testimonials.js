import React from "react";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <div className="Testimonials__container">
      <Testimonial
        name={"Sarthak Shakya"}
        image={
          "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/279135403_3258733924452493_3028116323200885955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_cDkQei1glQAX8DKEmh&_nc_ht=scontent.fktm3-1.fna&oh=00_AT8675oegmbhqqnYXS1e3-mL4UZ-uTBKkDHJWCQvla6aeg&oe=62AF7676"
        }
      />
      <Testimonial
        name={"Riwaj Neupane"}
        image={
          "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/277440212_3247043102206836_8134264958233514386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jO10aLjNupUAX8mTSxB&tn=U2KQb0CGnqNaCW3r&_nc_ht=scontent.fktm3-1.fna&oh=00_AT9EgujjTN1pVa25UCChCQryBMUk5q3AR22b2tQMDX3Fcg&oe=62AEF413"
        }
      />
      <Testimonial
        name={"Suraj Gaire"}
        image={
          "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/277584819_3211368542474917_8359344236602525081_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=T-aE7zw21QgAX8XJGFa&_nc_ht=scontent.fktm3-1.fna&oh=00_AT-vw-mD3U6PMkKFpAfUeECvXsQ_0ij0d49OMHH6cPXwrA&oe=62B0C2B8"
        }
      />
    </div>
  );
}

export default Testimonials;
