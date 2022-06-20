import React from "react";
import {
  BreakfastDining,
  LocalParking,
  WorkOutline,
} from "@mui/icons-material";
import Btn from "./Button";

const Facilities = () => {

  return (
    <div className="facilities__container">
      <div className="container">
      <div className="about">
        <h3>Our <span className="span">Facilities</span> for you</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          mollitia iusto eligendi? Pariatur, accusantium? Itaque explicabo culpa
          quas laudantium. Iste, nobis.
        </p>
        <Btn text= {"Contact Now"}/>
      </div>
      <div className="facilities">
        <div>
          {/* <WifiFillIcon className="icon" /> */}
          <i className="ri-wifi-fill icon"></i>
          <p>Free Wifi</p>
        </div>
        <div>
          <BreakfastDining className="icon"/>
          <p>Breakfast</p>
        </div>
        <div>
          <LocalParking className="icon"/>
          <p>Parking</p>
        </div>
        <div>
          <WorkOutline className="icon"/>
          <p>Working Space</p>
        </div>
        <div>
          <i className="fa-solid fa-bolt-lightning icon"></i>
          <p>24hr electricity</p>
        </div>
        <div>
          <i className="fa-solid fa-person-swimming icon"></i>
          <p>Swimming Pool</p>
        </div>
        <div>
          <i className="fa-solid fa-utensils icon"></i>
          <p>Dinner</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Facilities;
