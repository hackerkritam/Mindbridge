import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Features from './components/Features';
import Market from './components/Market';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Team />
      <Features />
      <Market />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;