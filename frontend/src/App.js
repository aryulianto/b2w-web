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
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

function App() {
  const basename = process.env.NODE_ENV === 'production' ? 
    (process.env.PUBLIC_URL || '') : '';

  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;