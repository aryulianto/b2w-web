import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { CommunityMap } from "./components/CommunityMap";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <CommunityMap />
      <CarbonSavedSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;