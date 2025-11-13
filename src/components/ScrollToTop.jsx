"use client";
import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 bg-white text-teal-600 rounded-2xl shadow-lg p-3 transition-all duration-300 hover:bg-teal-600 hover:text-white ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FiArrowUpRight  size={20} />
    </button>
  );
};

export default ScrollToTop;
