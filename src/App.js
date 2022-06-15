import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Navbar from "./components/Navbar";
import "./App.scss";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Facilities />
      <h1>
        What out <span style={{ color: "orangered" }}>Customer</span> say!
      </h1>
      <Testimonials />
    </>
  );
}

export default App;
