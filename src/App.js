import React from "react";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import "./App.scss";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Facilities />
      <About />
    </div>
  );
}

export default App;
