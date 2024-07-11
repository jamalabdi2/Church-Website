import React from "react";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Mission from "./Mission/Mission";

function Hero() {
  return (
    <div>
      <Navbar />
      <div id="About">
        <About />
      </div>

      <div id="mission">
        <Mission />
      </div>
    </div>
  );
}

export default Hero;
