import React from "react";
import { ContactUs, Hero, AboutUs, Slider, Footer } from "./components";
// import ParallexSlider from "./components/ParallexSlider";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper overflow-hidden ">
      <Hero />
      <Slider />
      {/* <ParallexSlider></ParallexSlider> */}
      {/* <ParallexSlider></ParallexSlider> */}
      {/* <ParallexSlider></ParallexSlider> */}
      {/* <ParallexSlider></ParallexSlider> */}
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
