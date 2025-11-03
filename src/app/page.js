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
import HomeAboutTimeline from '@/components/About';

// --- Static Data ---
const COMPANY_INFO = {
  name: 'Booker Accounting',
  contact: {
    address: 'R364 Al Wasl Building, Unique World Business Center, Office 12 (3rd floor), Opp. Civil Defence, Al Karama, Dubai',
    phone: '+971 56 767 8156',
    email: 'info@bookeraccounting.com',
  },
  // ADDED: Video URL for Hero Background
  heroVideoUrl: './videos/video5.mp4', // Placeholder Burj Khalifa video
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
      <section id="home" className=" font-sans relative overflow-hidden min-h-screen flex items-center bg-dark-primary text-white">

        {/* Video Background */}
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://placehold.co/1920x1080/0d1a20/1c5e6a?text=Loading"
            src={COMPANY_INFO.heroVideoUrl}
          />
        </div>

        {/* Gradient Overlay - Enhanced for video visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/90 via-dark-primary/70 to-transparent z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-md text-cyan-300 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-400/20 mb-6 sm:mb-8 animate-fade-in">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>UAE's Trusted Accounting Partner</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-black leading-[1.1] tracking-tight mb-6 sm:mb-8">
                <span className="block text-white italic">A Strategic Force</span>
                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-secondary animate-gradient">
                  Behind Your Numbers
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                Expert accounting & tax solutions that help Dubai businesses grow with confidence
              </p>

              {/* CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
                <a 
                  href="#contact" 
                  className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center transform hover:scale-105 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="#services" 
                  className="group bg-white/5 backdrop-blur-md text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-semibold border border-white/20 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                >
                  <span>Our Services</span>
                </a>
              </div> */}

              {/* Stats Row - Responsive Grid */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl">
                {[
                  { value: "15+", label: "Years", icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { value: "500+", label: "Clients", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { value: "8+", label: "Industries", icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { value: "99%", label: "Compliance", icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> }
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="group relative bg-white/5 backdrop-blur-md px-3 sm:px-4 py-4 sm:py-5 rounded-xl border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text text-white bg-gradient-to-br from-cyan-400 to-teal-400">
                        {stat.value}
                      </div>
                      <div className="text-white opacity-60 group-hover:opacity-100 transition-opacity">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div> */}

            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Whychoose />

      {/* about */}
      <HomeAboutTimeline/>

      {/* Services Section */}
      <Services />

      {/* Industries Section */}
      <Industries />

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
