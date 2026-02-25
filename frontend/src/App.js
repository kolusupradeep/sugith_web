import React from "react";
import "@/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

