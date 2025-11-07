'use client'

import React, { useState, useEffect } from 'react';
import { X, ChevronDown, ArrowRight, Phone, Mail, MapPin, CheckCircle, TrendingUp, Shield, Briefcase, Calculator, BarChart3, Building2, ShoppingCart, Laptop, Truck, Heart, GraduationCap, Factory } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Getintouch from '@/components/Getintouch';
import Services from '@/components/Services';
import Whychoose from '@/components/Whychoose';
import Industries from '@/components/Industries';
import Faqs from '@/components/Faqs';
import IndustriesSection from '@/components/Industry';
import HomeAboutTimeline from '@/components/About';
import MainAchievements from '@/components/Stats';
import HeroSection from '@/components/HeroSection';
import ContactSection from '@/components/ContactSection';
import FloatingMenuButton from '@/components/FloatingMenuButton';
import Values from '@/components/Values';
import MainVisionSection from '@/components/Values';
import { Users, FileText, BarChart2, Menu } from 'lucide-react';
import { BlogCard } from './blog/page';






// --- Static Data ---
const COMPANY_INFO = {
  name: 'Booker Accounting',
  contact: {
    address: 'R364 Al Wasl Building, Unique World Business Center, Office 12 (3rd floor), Opp. Civil Defence, Al Karama, Dubai',
    phone: '+971 56 767 8156',
    email: 'info@bookeraccounting.com',
  },
  // ADDED: Video URL for Hero Background
  heroVideoUrl: './images/waves.svg', // Placeholder Burj Khalifa video
};

const MOCK_POSTS = [
  {
    id: 1,
    title: "Six Critical Ad Creative Mistakes Every Marketer Makes",
    author: "Swetha Venkateswaran",
    role: "Content Writer @ Pixis",
    date: "5 November, 2025",
    // Changed to placeholder URL for universal runnability. You should use your local path: /images/img3.jpg
    imageUrl: "./images/img.jpg",
    category: "Ad Creative",
    color: "bg-indigo-600", // Replaced bg-secondary
    icon: FileText
  },
  {
    id: 2,
    title: "18 ChatGPT Prompts for Ad Creative and Copywriting That Actually Improve Performance",
    author: "Colin Campbell",
    role: "Head of Content @ Pixis",
    date: "4 November, 2025",
    // Changed to placeholder URL for universal runnability. You should use your local path: /images/image4.jpg
    imageUrl: "./images/image3.jpg",
    category: "Ad Creative",
    category2: "Performance",
    color: "bg-teal-500",
    icon: Users
  },
  {
    id: 3,
    title: "How to Build a Testing Cadence for Scaling in Performance Marketing",
    author: "William Lewis Eldredge",
    role: "Director - Customer Success @ Pixis",
    date: "31 October, 2025",
    // Changed to placeholder URL for universal runnability. You should use your local path: /images/image3.jpg
    imageUrl: "./images/image4.jpg",
    category: "Performance Marketing",
    color: "bg-emerald-500",
    icon: BarChart2
  },
];



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



      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />


      {/* Hero Section - Using Deep Dark Blue/Teal Theme */}
      {/* Hero Section - Streamlined Modern Design */}
      <HeroSection />
      {/* <section id="home" className=" font-sans relative overflow-hidden min-h-screen flex items-center bg-dark-primary text-white">

     
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

     
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/90 via-dark-primary/70 to-transparent z-10"></div>

    
        <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">

            
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-md text-cyan-300 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-cyan-400/20 mb-6 sm:mb-8 animate-fade-in">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>UAE's Trusted Accounting Partner</span>
              </div>

             
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-black leading-[1.1] tracking-tight mb-6 sm:mb-8">
                <span className="block text-white italic">A Strategic Force</span>
                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-secondary animate-gradient">
                  Behind Your Numbers
                </span>
              </h1>

            
              <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 sm:mb-10 max-w-2xl leading-relaxed">
                Expert accounting & tax solutions that help Dubai businesses grow with confidence
              </p>

            

            </div>
          </div>
        </div>

       
      </section> */}
      {/* Stats  */}
      <MainAchievements />


      {/* about */}
      <HomeAboutTimeline />

      {/* Services Section */}
      <Services />

      {/* Industries Section */}
      {/* <Industries /> */}
      <IndustriesSection />
      {/* Why Choose Us */}
      <Whychoose />
      {/* Values Section */}
      <MainVisionSection />

      <div className="bg-gray-100 p-8 sm:p-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Latest Insights
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            All the posts you need to succeed.
          </p>
        </header>

        <div className="max-w-7xl mx-auto">
          {/* Blog Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Read More Button */}
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-block text-lg font-semibold w-fit px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-gray-800 text-gray-800  transition-all duration-300"
            >
              View All Blogs
            </a>
          </div>
        </div>
      </div>



      <ContactSection />

      {/* FAQ Section */}
      {/* <Faqs /> */}

      {/* Contact Section */}
      {/* <Getintouch /> */}
      <FloatingMenuButton />
      <Footer />
    </div>
  );
};

export default BookerAccountingWebsite;
