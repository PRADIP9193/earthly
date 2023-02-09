import React from "react";
import { ContactUs, Hero, AboutUs, Slider, Footer } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper overflow-hidden ">
      <Hero />
      <Slider />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
