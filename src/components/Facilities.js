import React from "react";
import WifiFillIcon from "remixicon-react/WifiFillIcon";
import {
  BreakfastDining,
  LocalParking,
  WorkOutline,
} from "@mui/icons-material";

const Facilities = () => {
  return (
    <div className="facilites__container">
      <div className="about">
        <h3>Our <span className="span">Facilities</span> for you</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          mollitia iusto eligendi? Pariatur, accusantium? Itaque explicabo culpa
          quas laudantium. Iste, nobis.
        </p>
        <button>Contact Now</button>
      </div>
      <div className="facilities">
        <div>
          <WifiFillIcon />
          <p>Free Wifi</p>
        </div>
        <div>
          <BreakfastDining />
          <p>Breakfast</p>
        </div>
        <div>
          <LocalParking />
          <p>Parking</p>
        </div>
        <div>
          <WorkOutline />
          <p>Working Space</p>
        </div>
        <div>
          <i className="fa-solid fa-bolt-lightning"></i>
          <p>24hr electricity</p>
        </div>
        <div>
          <i className="fa-solid fa-person-swimming"></i>
          <p>Swimming Pool</p>
        </div>
        <div>
          <i className="fa-solid fa-utensils"></i>
          <p>Dinner</p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
