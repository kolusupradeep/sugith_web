import React from "react";
import "@/App.css";
import PremiumHeader from "./components/PremiumHeader";
import PremiumHero from "./components/PremiumHero";
import EliteCourses from "./components/EliteCourses";
import FeaturesStats from "./components/FeaturesStats";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <PremiumHeader />
      <PremiumHero />
      <EliteCourses />
      <FeaturesStats />
      <Footer />
    </div>
  );
}

export default App;

