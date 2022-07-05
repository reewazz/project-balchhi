import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const NavigateToHome = () => {
    navigate("/");
  };

  return (
    <div
      className="notFound__container"
      data-aos="fade-up"
      data-aos-delay={300}
      data-aos-easing="ease-in-out"
    >
      <h1>404</h1>
      <p>...oops! something is missing</p>
      <Button onClick={NavigateToHome}>Home</Button>
    </div>
  );
}

export default NotFound;
