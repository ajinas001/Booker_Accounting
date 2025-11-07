import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaYoutube, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-teal-900 text-white border-t  rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section - Logo and Description */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-md"
        >
          <div className="flex items-center gap-3 mb-3">
            
          <div className=" flex items-center justify-center overflow-hidden">
                        <Image
                          src="/images/LogoLight.png"
                          alt="Booker Accounting Company Logo"
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      </div>
          </div>
          <p className="text-sm text-gray-50 leading-relaxed">
            Booker refers to the global organization of accounting and consultancy firms,
            providing trusted financial services with integrity and innovation.
          </p>
        </motion.div>

        {/* Right Section - Links */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-start md:items-center gap-8 text-sm font-medium"
        >
          {["Home","About Us", "Services", "Blog", "Contact Us",].map(
            (link, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ x: 3 }}
                className="hover:underline text-gray-50 hover:text-gray-900 transition-colors"
              >
                {link}
              </motion.a>
            )
          )}
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        custom={2}
        className="max-w-7xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6"
      >
        <p className="text-sm text-gray-50 leading-relaxed max-w-2xl text-center md:text-left">
          Booker refers to the global organization and may refer to one or more of
          the member firms of Booker Global Limited, each of which is a separate legal entity.
          Booker Global Limited, a company limited by guarantee, does not provide services to clients.
        </p>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { icon: <FaFacebookF size={18} />, href: "#" },
            { icon: <FaXTwitter size={18} />, href: "#" },
            { icon: <FaLinkedinIn size={18} />, href: "#" },
            { icon: <FaYoutube size={18} />, href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className=" bg-secondary border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center  hover:text-black hover:bg-white transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
