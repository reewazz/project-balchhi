import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Map from "../components/Map";
import {ThemeProvider } from "@material-ui/core/styles";
import Theme from "../Theme/Theme"
import {Typography} from "@mui/material"
import Memories from "../components/Memories";

function Home() {
  // console.log(window.innerWidth)
  return (
    <>
    <ThemeProvider theme={Theme}>
      <Navbar />
      <Hero />
      <Memories/>
      <Facilities />
      <About />
      <Typography variant="h1" component={"h1"} style={{ textAlign: "center",fontSize: window.innerWidth > 768 ? "3rem" : "2.7em", marginTop: "60px", fontWeight: 600, maxWidth: window.innerWidth > 768 ? "auto" : "80vw", margin: "0 auto" }}>
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

export default Home;
