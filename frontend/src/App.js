import React from "react";
import "@/App.css";
import PremiumHeader from "./components/PremiumHeader";
import PremiumHero from "./components/PremiumHero";
import UltimateCourses from "./components/UltimateCourses";
import FeaturesStats from "./components/FeaturesStats";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <PremiumHeader />
      <PremiumHero />
      <UltimateCourses />
      <FeaturesStats />
      <Footer />
    </div>
  );
}

export default App;

