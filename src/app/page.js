'use client';

import React, { useState } from 'react';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MainAchievements from '@/components/Stats';
import HomeAboutTimeline from '@/components/About';
import Services from '@/components/Services';
import IndustriesSection from '@/components/Industry';
import Whychoose from '@/components/Whychoose';
import MainVisionSection from '@/components/Values';
import ContactSection from '@/components/ContactSection';
import FloatingMenuButton from '@/components/FloatingMenuButton';

const BookerAccountingWebsite = () => {


  return (
    <div className="min-h-screen bg-primary text-foreground">
      <Navbar />

      <HeroSection />
      <MainAchievements />
      <HomeAboutTimeline />
      <Services />
      <IndustriesSection />
      <Whychoose />
      <MainVisionSection />
      <ContactSection />

      <FloatingMenuButton />
      <Footer />
    </div>
  );
};

export default BookerAccountingWebsite;
