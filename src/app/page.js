'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin, CheckCircle, TrendingUp, Shield, Users, Briefcase, FileText, Calculator, BarChart3, Building2, ShoppingCart, Laptop, Truck, Heart, GraduationCap, Factory } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Getintouch from '@/components/Getintouch';
import Services from '@/components/Services';
import Whychoose from '@/components/Whychoose';
import Industries from '@/components/Industries';
import Values from '@/components/Values';
import Faqs from '@/components/Faqs';
import IndustriesSection from '@/components/Industry';
import HomeAboutTimeline from '@/components/About';
import HeroSection from '@/components/HeroSection';

// --- Static Data ---
const COMPANY_INFO = {
  name: 'Booker Accounting',
  contact: {
    address: 'R364 Al Wasl Building, Unique World Business Center, Office 12 (3rd floor), Opp. Civil Defence, Al Karama, Dubai',
    phone: '+971 56 767 8156',
    email: 'info@bookeraccounting.com',
  },
  // ADDED: Video URL for Hero Background
  heroVideoUrl: './videos/video4.mp4', // Placeholder Burj Khalifa video
};



// --- Main Component ---
const BookerAccountingWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);



  // Scroll handler for Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <div className="min-h-screen bg-light-primary text-foreground">
      <style jsx global>{`
        /* Global CSS based on user's preference for Next.js setup */
        :root {
          --color-primary-black: #0d1a20;
          --color-secondary: #1c5e6a;
          --color-primary: #f9f9f9;
        }

        /* Define Tailwind custom utilities using CSS variables */
        .bg-dark-primary { background-color: var(--color-primary-black); }
        .bg-light-primary { background-color: var(--color-primary); }
        .text-accent { color: var(--color-secondary); }
        .bg-accent { background-color: var(--color-secondary); }

        /* General Body Styling */
        body {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          background: var(--color-primary);
          color: #171717;
        }

        /* Essential styles for the video background to cover the section */
        .video-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
        }

        .video-container video {
            min-width: 100%; 
            min-height: 100%;
            width: auto;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
      `}</style>


      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />


      {/* Hero Section - Using Deep Dark Blue/Teal Theme */}
      {/* Hero Section - Streamlined Modern Design */}
      <HeroSection/>

      {/* Why Choose Us */}
      <Whychoose />

      {/* about */}
      <HomeAboutTimeline/>

      {/* Services Section */}
      <Services />

      {/* Industries Section */}
      {/* <Industries /> */}
      <IndustriesSection />
      {/* Values Section */}
      <Values />

      {/* FAQ Section */}
      {/* <Faqs /> */}

      {/* Contact Section */}
      {/* <Getintouch /> */}

      <Footer />
    </div>
  );
};

export default BookerAccountingWebsite;
