import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function OneFirm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-primary text-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-medium mb-24"
        >
          One Firm. Every Step.
          <br />
          <span className="text-textsecondary">With a Stategic Edge</span>
        </motion.h1>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32"
        >
          <motion.p  variants={itemVariants}
            className="text-base md:text-lg leading-relaxed">
            From start to finish we guide your business through every stage of
            its lifecycle whether you’re starting up, scaling, restructuring, or
            winding down. With deep expertise in UAE and international markets,
            we ensure your journey is smooth, compliant, and strategically
            sound.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="w-3 h-3 rounded-full bg-[#9b8b8f]"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-end"
        >
          <motion.div variants={iconVariants} className="flex justify-center">
            <svg
              className="w-32 h-32 md:w-40 md:h-40"
              viewBox="0 0 200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 120 L40 80 L160 80 L160 120 M60 80 L60 60 L140 60 L140 80 M80 100 L120 100 M100 100 L100 120"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
              <circle cx="90" cy="100" r="4" fill="#e97f7f" />
              <path
                d="M50 120 L50 140 L150 140 L150 120"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <motion.div variants={iconVariants} className="flex justify-center">
            <svg
              className="w-32 h-32 md:w-40 md:h-40"
              viewBox="0 0 200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="40"
                y="40"
                width="120"
                height="80"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="40"
                y1="60"
                x2="160"
                y2="60"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
              <line
                x1="40"
                y1="80"
                x2="160"
                y2="80"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
              <line
                x1="40"
                y1="100"
                x2="160"
                y2="100"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
              <line
                x1="80"
                y1="40"
                x2="80"
                y2="120"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
              <line
                x1="120"
                y1="40"
                x2="120"
                y2="120"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <motion.div variants={iconVariants} className="flex justify-center">
            <svg
              className="w-32 h-32 md:w-40 md:h-40"
              viewBox="0 0 200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="40"
                y="70"
                width="40"
                height="50"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="90"
                y="50"
                width="40"
                height="70"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="140"
                y="60"
                width="30"
                height="60"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="50"
                cy="40"
                r="8"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="160"
                cy="45"
                r="8"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="30"
                y1="120"
                x2="180"
                y2="120"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <motion.div variants={iconVariants} className="flex justify-center">
            <svg
              className="w-32 h-32 md:w-40 md:h-40"
              viewBox="0 0 200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="120"
                y="30"
                width="15"
                height="90"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="100"
                y="50"
                width="15"
                height="70"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="80"
                y="40"
                width="15"
                height="80"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="60"
                y="60"
                width="15"
                height="60"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="40"
                y="70"
                width="15"
                height="50"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <rect
                x="140"
                y="45"
                width="20"
                height="75"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="30"
                y1="120"
                x2="170"
                y2="120"
                stroke="#d4a5b0"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <motion.div variants={iconVariants} className="flex justify-center">
            <svg
              className="w-32 h-32 md:w-40 md:h-40"
              viewBox="0 0 200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 120 Q60 80, 80 90 T120 85 T160 95 L160 120 Z"
                stroke="#d4a5b0"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M45 110 Q55 100, 65 105 T85 100 T105 108"
                stroke="#d4a5b0"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M110 105 Q120 98, 130 102 T150 100"
                stroke="#d4a5b0"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
