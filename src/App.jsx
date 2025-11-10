import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import WhySection from './components/WhySection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="font-inter text-blue-900">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#0066FF] shadow-sm" />
            <span className="text-lg font-semibold">KavachAI</span>
          </div>
          <nav className="hidden gap-6 text-sm text-blue-800/80 md:flex">
            <a href="#about" className="hover:text-blue-900">About</a>
            <a href="#features" className="hover:text-blue-900">Features</a>
            <a href="#why" className="hover:text-blue-900">Why</a>
            <a href="#contact" className="hover:text-blue-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-[#0066FF] px-4 py-2 text-sm font-medium text-white shadow-sm">Request Demo</a>
        </div>
      </header>

      <main className="mt-16">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WhySection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
