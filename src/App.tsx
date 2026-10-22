/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { ProjectEstimator } from './components/ProjectEstimator.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState<string>('');
  const [customMessage, setCustomMessage] = useState<string>('');
  const [customBudget, setCustomBudget] = useState<string>('');

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pre-fill contact form from service selection
  const handleSelectServiceForProject = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setCustomMessage(`I am interested in partnering with Avengix for ${serviceTitle}. We'd like to discuss specifications and milestone deliverables.`);
    handleNavigate('contact');
  };

  // Pre-fill contact form from case study or project click
  const handleStartProjectWithTitle = (title?: string) => {
    if (title) {
      setCustomMessage(`We are interested in building an architecture similar to: ${title}.`);
    }
    handleNavigate('contact');
  };

  // Pre-fill from Scope Configurator
  const handleTransferScope = (summary: string, budgetRange: string) => {
    setCustomMessage(summary);
    setCustomBudget(budgetRange);
    handleNavigate('contact');
  };

  // Observe active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'projects', 'process', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with 3D AI Core and Orbital Rings */}
        <HeroSection
          onExploreServices={() => handleNavigate('services')}
          onStartProject={() => handleNavigate('contact')}
        />

        {/* Services Section matching uploaded layout */}
        <ServicesSection
          onSelectServiceForProject={handleSelectServiceForProject}
        />

        {/* About Section with Engineering Terminal & Standards */}
        <AboutSection onStartProject={() => handleNavigate('contact')} />

        {/* Selected Work / Architecture Case Studies */}
        <ProjectsSection onStartProject={handleStartProjectWithTitle} />

        {/* Process & Delivery Timeline */}
        <ProcessSection />

        {/* Interactive Scope Configurator */}
        <ProjectEstimator onTransferScope={handleTransferScope} />

        {/* FAQ Section */}
        <FaqSection onContactClick={() => handleNavigate('contact')} />

        {/* Validated Contact Section */}
        <ContactSection
          initialService={selectedService}
          initialMessage={customMessage}
          initialBudget={customBudget}
        />
      </main>

      {/* Polish Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
