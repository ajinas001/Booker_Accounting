"use client";
import React from 'react';
import { Layers, TrendingUp, Compass, Globe } from 'lucide-react';

// Define the colors consistent with your service component
// Note: SECONDARY_COLOR and DARK_BG are now only used for text accents and images.
const SECONDARY_COLOR = 'bg-cyan-800'; 
const ACCENT_COLOR_TEXT = 'text-cyan-600';
const NEUTRAL_BG = 'bg-[#f5f5f0]';
const DARK_BG = 'bg-secondary';

// Placeholder Image Paths (Update these to your working URLs)
const Image1Path = '/images/image4.jpg'; 
const Image2Path = '/images/partner_trust.jpg';
const Image3Path = '/images/growth_uae.jpeg';

const AboutUsFlow = () => {
    
    // Core Identity Content Block (Clean/Plain Design)
    const CoreIdentity = () => (
        <div className={`p-8 md:p-12  text-gray-900  min-h-[400px]`}>
            <h2 className="text-4xl md:text-5xl font-light mb-4">Who We Are </h2>
            <p className="text-lg leading-relaxed mb-6">
                Our team is more than just a group of accountants; we are a strategic unit. We combine expert minds with the power of cutting-edge AI Tools to ensure accuracy and drive measurable results.
            </p>
            <div className="flex items-center space-x-3 mt-8">
                <Layers size={30} className={ACCENT_COLOR_TEXT} />
                <p className="font-semibold text-gray-700 text-sm">
                    Client-first mindset, local insight, and lasting relationships based on trust.
                </p>
            </div>
        </div>
    );

    // Mission & Vision Content Block (Clean/Plain Design)
    const MissionVision = () => (
        <div className={`p-8 md:p-12  text-gray-900  min-h-[400px]`}>
            <h2 className="text-4xl md:text-5xl font-light mb-4">Our Mission & Vision </h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h3>
            <p className="text-sm text-gray-700">
                To deliver brilliance through expert financial insights, maintain perfect balance (compliance), and build strong foundations for confident, sustainable growth.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2">Our Vision</h3>
            <p className="text-sm text-gray-700">
                To become the most trusted and forward-thinking financial partner, empowering businesses through expert accounting, strategic advisory, and AI-driven innovation.
            </p>
        </div>
    );
    
    // Selling Points Content Block (Clean/Plain Design)
    const SellingPoints = () => (
        <div className={`p-8 md:p-12  text-gray-900  min-h-[400px]`}>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Why Partner With Us </h2>
            <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                    <TrendingUp size={24} className={ACCENT_COLOR_TEXT} />
                    <div>
                        <strong className="text-lg">Specialized UAE Focus:</strong>
                        <p className="text-sm text-gray-700">We are purpose-built to serve privately owned companies and entrepreneurs in the UAE, focusing on profitability and strategic tax planning.</p>
                    </div>
                </li>
                <li className="flex items-start space-x-3">
                    <Globe size={24} className={ACCENT_COLOR_TEXT} />
                    <div>
                        <strong className="text-lg">Proven Local Expertise:</strong>
                        <p className="text-sm text-gray-700">Offering deep local knowledge and a comprehensive understanding of business regulations and compliance throughout Uae.</p>
                    </div>
                </li>
                <li className="flex items-start space-x-3">
                    <Compass size={24} className={ACCENT_COLOR_TEXT} />
                    <div>
                        <strong className="text-lg">Customized Solutions:</strong>
                        <p className="text-sm text-gray-700">We implement tailored accounting, bookkeeping, and tax strategies designed specifically for your business needs.</p>
                    </div>
                </li>
            </ul>
        </div>
    );

    // Image Component with custom styling (Kept Dynamic)
    const ImageBlock = ({ src, alt, borderRadius }) => (
        <div className={`overflow-hidden shadow-2xl relative ${borderRadius} group`}>
             <img 
                src={src} 
                alt={alt}
                // Important: Using w-full/h-full ensures the image fills the container
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]  group-hover:grayscale-0"
                style={{ minHeight: '400px' }} 
                // Fallback in case image fails to load (Critical for production)
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x600/1e3a8a/ffffff?text=BAC+Visual+Placeholder" }}
            />
            {/* Dynamic Styling Overlays */}
            <div className={`absolute inset-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="absolute inset-4  rounded-2xl pointer-events-none"></div>
        </div>
    );


    return (
        <section className={`${NEUTRAL_BG} py-20 px-4 md:px-8`}>
            
            {/* Header */}
            <header className="max-w-7xl mx-auto text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-4">
                    The <span className="font-semibold"><span className='text-secondary'>BAC</span> Difference</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
                    A Strategic Force Behind Your Numbers: Driven by expertise. Focused on strategy. Committed to your growth.
                </p>
            </header>

            <div className="max-w-7xl mx-auto space-y-20">

                {/* --- Section 1: Who We Are (Content Left, Image Right) --- */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    <div className="lg:w-1/2">
                        <CoreIdentity />
                    </div>
                    <div className="lg:w-1/2">
                        <ImageBlock 
                            src={Image1Path}
                            alt="Abstract image representing AI and strategic thinking"
                            borderRadius="rounded-[70px] rounded-tl-none"
                        />
                    </div>
                </div>

                {/* --- Section 2: Mission & Vision (Image Left, Content Right) --- */}
                <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
                    <div className="lg:w-1/2">
                        <MissionVision />
                    </div>
                    <div className="lg:w-1/2">
                        <ImageBlock 
                            src={Image2Path}
                            alt="Professionals collaborating on a financial partnership"
                            borderRadius="rounded-[70px] rounded-tr-none"
                        />
                    </div>
                </div>

                {/* --- Section 3: Why Partner With Us (Content Left, Image Right) --- */}
                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    <div className="lg:w-1/2">
                        <SellingPoints />
                    </div>
                    <div className="lg:w-1/2">
                        <ImageBlock 
                            src={Image3Path}
                            alt="Chart representing business growth and success in a modern city (UAE)"
                            borderRadius="rounded-[70px] rounded-bl-none"
                        />
                    </div>
                </div>

            </div>

             {/* Final CTA - Consistent Style */}
             <div className="text-center mt-20 max-w-7xl mx-auto">
                <button className={`w-fit px-12 py-4 rounded-tl-full rounded-tr-full rounded-br-full border-2 border-white ${DARK_BG} text-white text-lg font-light hover:opacity-90 transition-opacity`}>
                    Schedule Your Strategic Consultation
                </button>
            </div>
        </section>
    );
};

export default AboutUsFlow;