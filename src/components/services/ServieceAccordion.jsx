// components/ServiceAccordion.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Use a simple icon library like lucide-react

export default function ServiceAccordion({ title, detail }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="border-b border-gray-200">
            {/* Header/Title */}
            <motion.header
                className="flex justify-between items-center py-4 px-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition duration-200 rounded-t-lg"
                onClick={toggleOpen}
                initial={false}
                animate={{ backgroundColor: isOpen ? '#e5e7eb' : '#f9fafb' }} // bg-gray-200 when open
            >
                <h3 className="text-lg font-medium text-gray-800 flex items-center">
                    <span className="text-green-500 mr-3">✓</span> {title}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={20} className="text-gray-500" />
                </motion.div>
            </motion.header>

            {/* Content Body */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden bg-white px-4 pt-2 pb-4 text-gray-600"
                    >
                        <p>{detail}</p>
                        {/* Add more detailed list items, case studies, or links here */}
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
}