
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Pages/Hero/Hero";
import CoreBeliefs from "./Pages/CoreBeliefs/CoreBeliefs";
import Location from "./Pages/Location/Location";
import Activities from "./Pages/Activities/Activities";
import Gallery from "./components/Gallery/Gallery";
import YearlyActivities from "./Pages/YearlyActivities/YearlyActivities";
import Footer from "./components/Footer/Footer";
import Officials from "./Pages/Officials/Officials";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/beliefs" element={<CoreBeliefs />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/location" element={<Location />} />
          <Route path="/yearly-activities" element={<YearlyActivities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/officials" element={<Officials />} />
        </Routes>

        <div id="beliefs">
          <CoreBeliefs />
        </div>
        <div id="activities">
          <Activities />
        </div>
        <div id="yearly-activities">
          <YearlyActivities />
        </div>
        <div id="officials">
          <Officials />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="location">
          <Location />
        </div>
      

        <Footer />
      </div>
    </Router>
  );
}

export default App;
