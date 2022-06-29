import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import {ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Theme/Theme";
import {Typography} from "@mui/material"

function App() {
  // console.log(window.innerWidth)
  return (
    <>
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Hero />
      <Facilities />
      <About />
      <Typography variant="h1" component={"h1"} style={{ textAlign: "center",fontSize:"3rem", marginTop: "60px", fontWeight: 600 }}>
        What our <span style={{ color: "orangered" }}>Customer</span> say!
      </Typography>
      <Testimonials />
      <Gallery />
      <Map />
      <Footer />
    </ThemeProvider>

    </>
  );
}

export default App;
