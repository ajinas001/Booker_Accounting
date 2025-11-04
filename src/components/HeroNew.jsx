"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroNew() {
  return (
    <section className="bg-secondary text-primary py-20  flex flex-col items-center">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mt-2 md:mt-12"
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Your strategic partner for <br /> business success
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          With years of experience across various industries, our dedicated team is
          committed to driving growth and operational excellence.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full"
      >
        {/* Image 1 */}
        <div className="relative overflow-hidden rounded-2xl h-[380px] sm:h-[420px]">
          <Image
            src="/images/img1.jpg"
            alt="Team member 1"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-2xl h-[380px] sm:h-[420px]">
          <Image
            src="/images/img2.jpg"
            alt="Team meeting"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden rounded-2xl h-[380px] sm:h-[420px]">
          <Image
            src="/images/img3.jpg"
            alt="Professional worker"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
