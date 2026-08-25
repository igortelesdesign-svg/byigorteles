/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DesignerWhoCodes } from './components/DesignerWhoCodes';
import { SelectedWork } from './components/SelectedWork';
import { AboutSection } from './components/AboutSection';
import { ToolboxSection } from './components/ToolboxSection';
import { PlaygroundSection } from './components/PlaygroundSection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#07090D] text-[#F5F7FA] selection:bg-[#168BFF]/30 selection:text-[#00D5FF] relative font-sans">
        {/* Subtle Interactive Custom Cursor (Desktop) */}
        <CustomCursor />

        {/* Sticky Minimalist Header */}
        <Header />

        {/* Main Content Sections */}
        <main id="main-content">
          {/* 00 - Asymmetric Hero with Portrait & Clean Narrative */}
          <Hero />

          {/* 01 - Selected Work (Featured Projects & Deep Case Studies) */}
          <SelectedWork />

          {/* Core Concept: Designer Who Codes Interactive Split */}
          <DesignerWhoCodes />

          {/* 02 - About Me, 3 Pillars of Capabilities & Career Evolution */}
          <AboutSection />

          {/* 03 - Technical & Creative Toolbox */}
          <ToolboxSection />

          {/* 04 - Playground & Creative Lab */}
          <PlaygroundSection />

          {/* Experience & Sectors */}
          <ClientsSection />

          {/* 05 - Contact & Direct Outreach */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Utilities */}
        <BackToTop />
        <PWAInstallPrompt />
      </div>
    </LanguageProvider>
  );
}
