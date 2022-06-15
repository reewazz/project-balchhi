import { useState } from "react";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import "./App.scss";

function App() {
  const [toggleState, settoggleState] = useState(1);

  const toggleMode = (index) => {
    settoggleState(index);
  };
  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
          <a href="#">
            {" "}
            <img
              src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/277554159_536567404564886_8179199460324938164_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HvB9sWhIMvkAX9ML4R7&_nc_ht=scontent.fktm7-1.fna&oh=00_AT_MBSDpRCrl5XUcwgkA7RL3HF0o_yO1KAJ8dmwIVqEpTg&oe=62ABD65E"
              alt=""
            />
          </a>
        </div>
        <div className="mid">
          <a href="#">
            <div
              className={toggleState === 1 ? "btn active" : "btn"}
              onClick={() => toggleMode(1)}
            >
              Home
            </div>
          </a>
          <a href="#">
            <div
              className={toggleState === 2 ? "btn active" : "btn"}
              onClick={() => toggleMode(2)}
            >
              Service
            </div>
          </a>
          <a href="#">
            <div
              className={toggleState === 3 ? "btn active" : "btn"}
              onClick={() => toggleMode(3)}
            >
              About Us
            </div>
          </a>
          <a href="#">
            <div
              className={toggleState === 4 ? "btn active" : "btn"}
              onClick={() => toggleMode(4)}
            >
              Contact
            </div>
          </a>
        </div>
        <a href="#">
          <div className="contactBtn">Contact Us</div>
        </a>
      </div>
      <Hero />
      <Facilities />
    </div>
  );
}

export default App;
