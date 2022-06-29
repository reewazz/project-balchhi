import React from "react";

export default function Footer() {
  return (
    <div className="footer_container">
      <div className="wrapper">
        <div className="left">
          <h3>Balchhi Resort</h3>
          <p>
            This is a resort where you get a lots of extra choice & comfortable
            memorable tour.
          </p>
          <div className="icons">
            <a href="https://www.facebook.com/Balchhireosrt/">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="https://www.instagram.com/balchhiresort/">
              <i className="ri-instagram-line"></i>
            </a>
              <i className="ri-whatsapp-line"></i>
          </div>
          <div className="copyright">
            
          </div>
        </div>

        <div className="right">
          <div className="home">
            <b>Home</b>
            <ul>
                <li>Booking</li>
                <li>Facilities</li>
                <li>Location</li>
                <li>Service</li>
            </ul>
          </div>
          <div className="About">
            <b>About Us</b>
            <ul>
                <li>FAQ</li>
                <li>Company</li>
                <li>Statistic</li>
            </ul>
          </div>
          <div className="Help">
            <b>Help</b>
            <ul>
                <li>How it Work?</li>
                <li>Desk Help</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }} className="made">
        <p>
        <span>Copyright &copy; 2022 Balchhi. All Right Reserved</span>
          Made with{" "}
          <span style={{ color: "red", fontSize: "1rem" }}>&hearts;</span> by
          <a href="https://theboringschool.org" target="_blank" rel="noreferrer">The Boring School</a>
        </p>
      </div>
    </div>
  );
}
