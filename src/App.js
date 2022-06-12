import "./App.scss";
function App() {
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
            <div>Home</div>
          </a>
          <a href="#">
            <div>Service</div>
          </a>
          <a href="#">
            <div>About Us</div>
          </a>
          <a href="#">
            <div>Contact</div>
          </a>
        </div>

        <a href="#">
          <div className="contactBtn">Contact Us</div>
        </a>
      </div>
    </div>
  );
}

export default App;
