"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Custom Tailwind-like Colors based on CSS Theme ---
const PRIMARY_BLACK = "#0d1a20";
const SECONDARY_TEAL = "#1c5e6a";
const PRIMARY_LIGHT = "#f9f9f9";
const NEUTRAL_FOREGROUND = "#171717";
const ACCENT_GREEN = "rgb(20, 83, 45)";

// --- Icon Map for Professional Unicode Symbols ---
const ICON_MAP = {
    // Timeline Dots
    "foundation": "🤝", // Handshake
    "vision": "✨", // Sparkle/Vision
    "values": "💎", // Diamond/Core
    "uae": "🗺️", // Map/Local focus

    // Stats Grid
    "accuracy": "✅", // Check/Accuracy
    "clients": "👥", // Users/Clients
    "experience": "🗓️", // Calendar/Years
    "support": "📞", // Phone/Support

    // Core Values & Features
    "precision": "🔬", // Microscope/Detail
    "integrity": "🔒", // Lock/Security
    "foresight": "💡", // Lightbulb/Idea
    "tax": "💰", // Money/Tax
    "regulatory": "🏛️", // Bank/Regulation
    "freezone": "🏗️", // Building/Construction/Setup
};

// Image Content Block with Overlay Text (No change needed)
const ImageContentBlock = ({ imageUrl, title, description, overlayPosition = "bottom", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
    >
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className={`absolute ${overlayPosition === "bottom" ? "bottom-0" : "top-0"} left-0 right-0 p-6 text-white`}>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-200 leading-relaxed">{description}</p>
        </div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
    </motion.div>
);

// Split Content Layout (Shadows removed previously)
const SplitContentLayout = ({ imageUrl, title, content, reverse = false, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true, amount: 0.3 }}
        className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
    >
        <div className="flex-1">
            <div 
                className="h-64 md:h-80 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url('${imageUrl}')` }}
            />
        </div>
        <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-black" style={{ color: PRIMARY_BLACK }}>{title}</h3>
            <div className="space-y-3 text-gray-700">
                {content}
            </div>
        </div>
    </motion.div>
);

// Interactive Stats Grid (Shadows removed, Icons updated)
const StatsGrid = ({ stats, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
        {stats.map((stat, index) => (
            <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 text-center border border-gray-200"
            >
                <div className="text-3xl mb-2">{ICON_MAP[stat.icon]}</div>
                <div className="text-2xl font-black mb-1" style={{ color: SECONDARY_TEAL }}>{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </motion.div>
        ))}
    </motion.div>
);

// Floating Image Gallery (Responsive, Shadows removed)
const FloatingImageGallery = ({ images, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative h-96 md:h-[450px]" 
    >
        {images.slice(0, 3).map((image, index) => ( 
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: delay + index * 0.2 }}
                whileHover={{ scale: 1.05, z: 20 }}
                className="absolute rounded-xl overflow-hidden border-4 border-white transition-all duration-300 w-32 h-40 md:w-48 md:h-64 lg:w-60 lg:h-80"
                style={{
                    ...(index === 0 && { top: '10%', left: '5%', zIndex: 10 }),
                    ...(index === 1 && { top: '35%', left: '35%', zIndex: 20, transform: 'rotate(5deg)' }),
                    ...(index === 2 && { bottom: '5%', right: '5%', zIndex: 30, transform: 'rotate(-5deg)' }),
                }}
            >
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${image.url}')` }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2">
                    <p className="text-xs font-semibold md:text-sm">{image.caption}</p>
                </div>
            </motion.div>
        ))}
    </motion.div>
);


// Timeline Dot with Animation (Shadows removed)
const TimelineDot = ({ iconKey, color = SECONDARY_TEAL, index = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
        style={{ backgroundColor: color }}
        className="h-14 w-14 absolute left-3 md:left-2 flex items-center justify-center rounded-full border-4 border-white z-30"
        viewport={{ once: true }}
    >
        <span className="text-2xl" role="img" aria-label="Timeline Icon">{ICON_MAP[iconKey]}</span>
    </motion.div>
);

// --- Main Component ---
const AboutPageTimeline = () => {
    const containerRef = useRef(null);
    const timelineRef = useRef(null);
    const [timelineHeight, setTimelineHeight] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (timelineRef.current) {
            setTimelineHeight(timelineRef.current.clientHeight);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // Updated timelineData with professional icon keys
    const timelineData = [
        {
            title: "Our Foundation",
            iconKey: "foundation",
            content: (
                <div className="space-y-8">
                    <SplitContentLayout
                        imageUrl="/images/img3.jpg"
                        title="Strategic Partnership"
                        content={
                            <>
                                <p className="text-lg leading-relaxed">
                                    We transcend traditional accounting. We are your dedicated financial command center, fusing **seasoned human judgment** with the precision of **AI-driven insights** for superior results.
                                </p>
                            </>
                        }
                        delay={0.1}
                    />
                </div>
            )
        },
        {
            title: "Vision & Purpose",
            iconKey: "vision",
            content: (
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ImageContentBlock
                            imageUrl="/images/img1.jpg"
                            title="Our Mission"
                            description="Deliver flawless accuracy and proactive financial intelligence to keep your business not just compliant, but highly competitive."
                            overlayPosition="bottom"
                            delay={0.1}
                        />
                        <ImageContentBlock
                            imageUrl="/images/img.jpg"
                            title="Our Vision"
                            description="Become the most reliable and innovative financial partner empowering owner-managed businesses across the UAE."
                            overlayPosition="bottom"
                            delay={0.3}
                        />
                    </div>
                    
                    <StatsGrid
                        stats={[
                            { icon: "accuracy", value: "99%", label: "Accuracy Rate" },
                            { icon: "clients", value: "200+", label: "Clients Served" },
                            { icon: "experience", value: "15+", label: "Years Experience" },
                            { icon: "support", value: "24/7", label: "Support" }
                        ]}
                        delay={0.5}
                    />
                </div>
            )
        },
        {
            title: "Core Values",
            iconKey: "values",
            content: (
                <div className="space-y-8">
                    <FloatingImageGallery
                        images={[
                            { url: "/images/image3.jpg", caption: "Precision in Every Detail" },
                            { url: "/images/image4.jpg", caption: "Uncompromising Integrity" },
                            { url: "/images/image3.jpg", caption: "Strategic Foresight" },
                            { url: "/images/image4.jpg", caption: "Continuous Innovation" }
                        ]}
                        delay={0.1}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
                        {[
                            { title: "Precision", icon: "precision", desc: "Flawless attention to detail in all compliance and reporting." },
                            { title: "Integrity", icon: "integrity", desc: "Operating with the highest ethical standards and transparency." },
                            { title: "Foresight", icon: "foresight", desc: "Proactive advice that turns financial data into future strategy." }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="bg-white rounded-xl p-6 text-center border border-gray-100"
                            >
                                <div className="text-4xl mb-4">{ICON_MAP[value.icon]}</div>
                                <h4 className="font-black text-xl mb-3" style={{ color: PRIMARY_BLACK }}>{value.title}</h4>
                                <p className="text-gray-600 text-sm">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: "UAE Advantage",
            iconKey: "uae",
            content: (
                <SplitContentLayout
                    imageUrl="/images/image3.jpg"
                    title="Local Mastery, Global Standards"
                    reverse={true}
                    content={
                        <>
                            <div className="space-y-4">
                                {[
                                    { icon: "tax", title: "VAT & Corporate Tax Readiness", desc: "Navigating complex UAE tax frameworks is our core strength." },
                                    { icon: "regulatory", title: "Regulatory Compliance", desc: "Full adherence to local Economic Substance Regulations and AML requirements." },
                                    { icon: "freezone", title: "Free Zone Expertise", desc: "Specialized setup and maintenance for all UAE Free Zones." }
                                ].map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-2xl flex-shrink-0" style={{ color: SECONDARY_TEAL }}>{ICON_MAP[feature.icon]}</span>
                                        <div>
                                            <h6 className="font-bold text-lg" style={{ color: NEUTRAL_FOREGROUND }}>{feature.title}</h6>
                                            <p className="text-gray-600 text-sm">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    }
                    delay={0.1}
                />
            )
        },
    ];

    const customButtonClass = "px-8 py-3 rounded-tl-full rounded-tr-full rounded-br-full";

    return (
        <>
            <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div style={{ backgroundColor: PRIMARY_LIGHT }} className="min-h-screen">

                {/* Hero Section */}
                <section
                    style={{
                        backgroundColor: PRIMARY_BLACK,
                        backgroundImage: `url('/images/image3.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="relative text-white pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-black/70"></div>
                    <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top_right,_rgba(28,94,106,0.6)_0%,_transparent_50%)]"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
                        >
                            <span className="block">
                                The <span style={{ color: SECONDARY_TEAL }}>BAC</span> Story
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-3xl font-light text-gray-200 max-w-5xl mx-auto leading-relaxed"
                        >
                            Your **Strategic Financial Engine** in the UAE: Combining Human Expertise with Intelligent Technology for **Unmatched Growth**.
                        </motion.p>
                    </div>
                </section>

                <hr className="my-0 border-gray-200" />

                {/* Timeline Section */}
                <section ref={containerRef} className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div ref={timelineRef} className="relative">
                            {/* Static Background Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300 rounded-full" />

                            {/* Animated Progress Line (Shadows removed) */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 overflow-hidden rounded-full">
                                <motion.div
                                    style={{
                                        height: heightTransform,
                                        opacity: opacityTransform,
                                        background: `linear-gradient(to bottom, ${SECONDARY_TEAL}, ${PRIMARY_BLACK})`
                                    }}
                                    className="w-full"
                                />
                            </div>

                            {timelineData.map((item, index) => (
                                <div key={index} className="flex justify-start py-16 md:py-24">
                                    {/* Timeline Dot (Sticky Column) */}
                                    <div className="relative z-20 w-24 md:w-36 flex-shrink-0">
                                        {/* The dot itself remains sticky at the start of the item */}
                                        <div className="sticky top-28"> 
                                            <TimelineDot iconKey={item.iconKey} index={index} />
                                        </div>
                                    </div>

                                    {/* Content Block (Title scrolls) */}
                                    <div className="relative w-full">
                                        
                                        {/* Title for Desktop */}
                                        <h3 
                                            style={{ color: PRIMARY_BLACK }} 
                                            className="hidden md:block text-4xl font-black tracking-tight mb-8"
                                        >
                                            {item.title}
                                        </h3>

                                        {/* Mobile Title */}
                                        <h3 style={{ color: PRIMARY_BLACK }} className="md:hidden block text-2xl mb-6 text-left font-extrabold">
                                            {item.title}
                                        </h3>
                                        {item.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Final CTA (Shadows removed) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-center mt-32"
                        >
                            <div style={{ background: `linear-gradient(to right, ${PRIMARY_BLACK}, ${SECONDARY_TEAL})` }} className="rounded-3xl p-12 md:p-16 text-white">
                                <h3 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Ready to Transform Your Finances?</h3>
                                <p className="text-gray-200 mb-8 text-xl max-w-3xl mx-auto">
                                    Get a tailored consultation and start building a stable, growth-focused future with our UAE-centric expertise.
                                </p>
                                <button
                                    style={{ color: PRIMARY_BLACK, backgroundColor: PRIMARY_LIGHT }}
                                    className={`${customButtonClass} font-extrabold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.05]`}
                                >
                                    Schedule a Consultation
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default AboutPageTimeline;