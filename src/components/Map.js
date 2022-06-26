import React from "react";
import AOS from "aos";
import { Typography } from "@mui/material";

export default function Map() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="map_container" id="map__container" data-aos="fade-right">
      <div className="content">
        <Typography variant="h1" component={"h1"}>
          Contact <span> Us</span>
        </Typography>
        <Typography>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt cum
          expedita dolor, est, ab sequi et debitis corporis consequuntur quos
          officia dicta exercitationem culpa!
        </Typography>
      </div>
      <div className="wrapper">
        <div className="map__content left">
          <div className="icons">
            <div className="grid_item">
              <i className="ri-map-pin-line"></i>
                {" "}
                <b>Address :</b>{" "}
              <span>
              </span>
              <p>Tilottama -5 ,Manigram</p>

            </div>
            <div className="grid_item">
              <i className="ri-phone-line"></i>
              <span>
                {" "}
                <b>Call Us :</b>{" "}
              </span>
              <p>9804409022</p>
            </div>
            <div className="grid_item">
              <i className="ri-mail-line"></i>
              <span>
                {" "}
                <b>Email :</b>{" "}
              </span>
              <p>balchhiresort@gmail.com</p>
            </div>
            <div className="grid_item">
              <i className="ri-links-line"></i>
              <span>
                {" "}
                <b>Connect us at :</b>{" "}
              </span>
              <div className="icons">
                <a href="https://www.facebook.com/Balchhireosrt/">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/balchhiresort/">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://web.whatsapp.com/">
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="map">
              <iframe
                width="500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.016934147103!2d83.47514371506024!3d27.623992182826473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685151b893a11%3A0x17e1d6499ce964!2sBalchhi%20Resort%20And%20Agro%20Farm%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1655878480303!5m2!1sen!2snp"
                height="300"
                style={{ border: "1px solid grey",borderRadius:"5px" }}
                loading="lazy"                
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
