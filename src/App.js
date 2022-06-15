import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Navbar from "./components/Navbar";
import "./App.scss";
import About from "./components/About";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Facilities />
      <About />

      <h1 style={{ textAlign: "center" }}>
        What our <span style={{ color: "orangered" }}>Customer</span> say!
      </h1>
      <Testimonials />
    </>
  );
}

export default App;
