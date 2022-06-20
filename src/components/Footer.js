import React from "react";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="left">
        <h3>Balchhi Resort</h3>
        <p>
          This is a resort where you get a lots of extra choice & comfortable
          memorable tour.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/Balchhireosrt/">
            <i class="ri-facebook-fill"></i>
          </a>
          <a href="https://www.instagram.com/balchhiresort/">
            <i class="ri-instagram-line"></i>
          </a>
          <a href="#">
            <i class="ri-whatsapp-line"></i>
          </a>
        </div>
        <span>Copyright &copy; 2022 Balchhi. All Right Reserved</span>
      </div>
      <div className="right">
        <div className="home">
          <b>Home</b>
          <ul>
            <a href="#">
              <li>Booking</li>
            </a>
            <a href="#">
              <li>Facilities</li>
            </a>
            <a href="#">
              <li>Location</li>
            </a>
            <a href="#">
              <li>Service</li>
            </a>
          </ul>
        </div>
        <div className="About">
          <b>About Us</b>
          <ul>
            <a href="#">
              <li>FAQ</li>
            </a>
            <a href="#">
              <li>Company</li>
            </a>
            <a href="#">
              <li>Statistic</li>
            </a>
          </ul>
        </div>
        <div className="Help">
          <b>Help</b>
          <ul>
            <a href="#">
              <li>How it Work?</li>
            </a>
            <a href="#">
              <li>Desk Help</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
