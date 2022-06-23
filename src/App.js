import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Navbar from "./components/Navbar";
import "./App.css"
import About from "./components/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Map from "./components/Map";

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
      <Gallery />
      <Map />
      <Footer />
    </>
  );
}

export default App;
