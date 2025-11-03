"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" mt-20 bg-neutral-200 min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16">
      {/* Left Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-semibold text-[#2E2E2E] leading-tight mb-6">
          Insurance <br /> Coverage You <br /> Can Count On
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Wherever and whenever you need. <br />
          It’s our job to protect you and what matters to you most.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#046A53] text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-[#035E49] transition"
        >
          Contact Us
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
     <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="mt-8 md:mt-0 grid grid-cols-2 grid-rows-3 gap-3 max-w-md w-full max-h-[65vh]"
>
  {/* Row 1 - Left Image */}
  <div className="aspect-square rounded-tl-[50%] rounded-br-[50%] overflow-hidden bg-secondary flex items-center justify-center">
    <Image
      src="/images/buisines2.png"
      alt="Business Image 1"
      width={500}
      height={500}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Row 1 - Right Color Block */}
  <div className="aspect-square rounded-bl-[50%] bg-[#B7A7F6]" />

  {/* Row 2 - Left Image */}
  <div className="aspect-square rounded-tr-[50%] rounded-br-[50%] overflow-hidden bg-gray-300 flex items-center justify-center">
    
  </div>

  {/* Row 2 - Right Image */}
  <div className="aspect-square overflow-hidden rounded-full flex items-center justify-center bg-secondary">
    <Image
      src="/images/buisines1.png"
      alt="Business Image 3"
      width={500}
      height={500}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Row 3 - Left Color Block with Image Overlay */}
  <div className="aspect-square relative rounded-bl-[50%] overflow-hidden bg-[#F9D74E]">
    <Image
      src="/images/buisines2.png"
      alt="Business Image 4"
      width={500}
      height={500}
      className="object-cover w-full h-full opacity-80"
    />
  </div>

  {/* Row 3 - Right Color Block */}
  <div className="aspect-square bg-[#B7A7F6] rounded-tr-[50%]" />
</motion.div>

    </section>
  );
}
