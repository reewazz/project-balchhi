import React from "react";
import {
  BreakfastDining,
  LocalParking,
  WorkOutline,
} from "@mui/icons-material";
import Btn from "./Button";
import { Typography } from "@mui/material";

const Facilities = () => {

  return (
    <div className="facilities__container" id="facilities__container">
      <div className="container">
      <div className="about">
        {/* <h3>Our <span className="span">Facilities</span> for you</h3> */}
        <Typography variant="h3" component={"h2"}>Our <span className="span">Facilities</span> for you</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          mollitia iusto eligendi? Pariatur, accusantium? Itaque explicabo culpa
          quas laudantium. Iste, nobis.
        </Typography>
        <Btn text= {"Contact Now"}/>
      </div>
      <div className="facilities">
        <div>
          {/* <WifiFillIcon className="icon" /> */}
          <i className="ri-wifi-fill icon"></i>
          <Typography>Free Wifi</Typography>
        </div>
        <div>
          <BreakfastDining className="icon"/>
          <Typography>Breakfast</Typography>
        </div>
        <div>
          <LocalParking className="icon"/>
          <Typography>Parking</Typography>
        </div>
        <div>
          <WorkOutline className="icon"/>
          <Typography>Working Space</Typography>
        </div>
        <div>
          <i className="fa-solid fa-bolt-lightning icon"></i>
          <Typography>24hr electricity</Typography>
        </div>
        <div>
          <i className="fa-solid fa-person-swimming icon"></i>
          <Typography>Swimming Pool</Typography>
        </div>
        <div>
          <i className="fa-solid fa-utensils icon"></i>
          <Typography>Dinner</Typography>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Facilities;
