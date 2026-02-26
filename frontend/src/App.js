import React from "react";
import "@/App.css";
import MinimalHeader from "./components/MinimalHeader";
import MinimalHero from "./components/MinimalHero";
import ProfessionalCourses from "./components/ProfessionalCourses";
import FeaturesStats from "./components/FeaturesStats";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MinimalHeader />
      <MinimalHero />
      <ProfessionalCourses />
      <FeaturesStats />
      <Footer />
    </div>
  );
}

export default App;

