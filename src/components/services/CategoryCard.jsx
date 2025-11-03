// components/CategoryCard.js
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

export default function CategoryCard({ title, icon }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer border border-gray-100"
            variants={itemVariants}
            whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" // subtle shadow lift
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => {
                // Smooth scroll to the relevant section (requires more setup in parent)
                // For now, it's a visual cue.
                console.log(`Navigating to ${title} section...`);
            }}
        >
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="mt-2 text-gray-500 text-sm">
                Explore our full suite of {title.toLowerCase()} services.
            </p>
        </motion.div>
    );
}