import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import hero from "../images/hero1.jpg";
import { Typography } from "@mui/material";
import { Modal } from "@mui/material";
import "animate.css";

function Hero() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="hero__container">
      <div className="container">
        <div className="about">
          <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
          <div className="blob1 animate__animated animate__pulse animate__infinite	infinite"></div>
          {/* <em>Welcome to balchhi,</em> */}
          <Typography variant="p" component={"p"}>
            Welcome to balchhi,
          </Typography>
          {/* <h1>Probably The Best In The Town!</h1> */}
          <Typography variant="h1" component={"h1"}>
            Probably The Best In The Town!
          </Typography>
          {/* <p>
            We connect like a family with best food.
          </p> */}
          <Typography component={"p"} variant="p">
            {" "}
            We connect like a family with best food.
          </Typography>

          <button onClick={handleClick}>
            {/* <a
              href="https://www.youtube.com/watch?v=wTULrEWmNqs"
              target={"_blank"}
              rel="noreferrer"
            > */}
            <PlayCircleIcon className="icon" style={{ color: "orangered" }} />
            {/* </a> */}
            <Typography> Watch video</Typography>
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-video"
          >
            <iframe
              src="https://www.youtube.com/embed/wTULrEWmNqs"
              width={"1200px"}
              height={"800px"}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              id="modal-modal-video"
              frameborder="0"
              title="balchhi_video"
            ></iframe>
          </Modal>
          {/* <div className="blob animate__animated animate__pulse animate__infinite	infinite"></div>
          <div className="blob1 animate__animated animate__pulse animate__infinite	infinite"></div> */}
        </div>

        <div className="image">
          <img src={hero} alt="balchhi" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
