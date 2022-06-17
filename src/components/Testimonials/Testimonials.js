import  AOS  from "aos";
import React, { useEffect } from "react";
import Testimonial from "./Testimonial";

function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration:2000
    })
  })

  return (
    
    <div className="Testimonials__container" data-aos = "fade-left">
      <Testimonial
        name={"Riwaj Neupane"}
        image={
          "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/277440212_3247043102206836_8134264958233514386_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jO10aLjNupUAX_J5FMQ&_nc_oc=AQmk9Dhi2RgMXLoJUlXv8C2mU4ZlAxz7KE_aJzqbkqfZ31lg613ccC8QwulDOdvFkNHSUIDSfZW0S4j9x-6UUAm4&tn=9O6XPRlpe1UyW1Nz&_nc_ht=scontent.fktm3-1.fna&oh=00_AT_hWq7GBAZdhdszRhUg6GX47WArzo_kBSMVsTP6p2dxqQ&oe=62B0EE53"
        }
      />
      <Testimonial
        name={"Suraj Gaire"}
        image={
          "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/249474439_3097737357171370_3191167055334800771_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MRB3rYOj7CgAX8SoSQc&_nc_ht=scontent.fktm3-1.fna&oh=00_AT8ZMF6lYGxJHPDnJSLI5J7JgV8n1EZP0BdxzO92yQ2EzQ&oe=62B07F6B"
        }
      />
      <Testimonial
        name={"Sarthak Shakya"}
        image={
          "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/279135403_3258733924452493_3028116323200885955_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_cDkQei1glQAX8MXlsJ&_nc_ht=scontent.fktm3-1.fna&oh=00_AT-D4-xJR0y7PKSREOUOKS6ZAHO0DZAHPsm3iz2gHmSYlA&oe=62AF7676"
        }
      />
    </div>
  );
}

export default Testimonials;
