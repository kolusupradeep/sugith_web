import React from "react";
import "@/App.css";
import StunningHeader from "./components/StunningHeader";
import StunningHero from "./components/StunningHero";
import TrendingCourses from "./components/TrendingCourses";
import KeyFeaturesStats from "./components/KeyFeaturesStats";
import StunningTestimonials from "./components/StunningTestimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <StunningHeader />
      <StunningHero />
      <TrendingCourses />
      <KeyFeaturesStats />
      <StunningTestimonials />
      <Footer />
    </div>
  );
}

export default App;

