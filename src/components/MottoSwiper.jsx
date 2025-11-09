import React from 'react';

// Custom SVG Icon Component for 'Build' (Represents growth/structure)
const BuildIcon = ({ color = 'white' }) => (
  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* A simple geometric building block / process indicator */}
    <path d="M7 16V12L12 7L17 12V16H15V14H9V16H7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="18" width="18" height="3" rx="1.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 4V7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Custom SVG Icon Component for 'Balance' (Represents stability/equilibrium)
const BalanceIcon = ({ color = 'white' }) => (
  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Classic scale icon for balance */}
    <path d="M12 3V21M3 15L21 15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 15L9 9M17 15L15 9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10.5 19L13.5 19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Custom SVG Icon Component for 'Brilliance' (Represents ideas/light/innovation)
const BrillianceIcon = ({ color = 'white' }) => (
  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized lightbulb with a spark */}
    <path d="M12 2C9.23858 2 7 4.23858 7 7C7 9.09705 7.82869 11.2366 9.42845 12.8364L10.7412 14.1491C11.5204 14.9284 12.4939 16 12 16C12.4939 16 13.4674 14.9284 14.2466 14.1491L15.5594 12.8364C17.1591 11.2366 17.9878 9.09705 17.9878 7C17.9878 4.23858 15.7592 2 13 2H12Z" stroke={color} strokeWidth="1.5"/>
    <path d="M14 16L14 18M10 16L10 18M12 20L12 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="6" y="18" width="12" height="4" rx="2" stroke={color} strokeWidth="1.5"/>
    <path d="M16 16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


// Icon mapping
const iconMap = {
  'Build': BuildIcon,
  'Balance': BalanceIcon,
  'Brilliance': BrillianceIcon
};


// Main Component
const App = () => {
  // Define the content: 6 unique items
  const items = [
    { name: 'Build' },
    { name: 'Balance' },
    { name: 'Brilliance' },
    { name: 'Build' },
    { name: 'Balance' },
    { name: 'Brilliance' },
  ];

  // We duplicate the array multiple times to ensure a seamless, continuous loop
  // Total items: 6 * 4 = 24
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  // Custom CSS for the infinite scroll keyframes
  // Items length is 6, duplicatedItems is 24 (4 sets). We need to scroll 1/4 of the width (25%)
  const scrollingStyle = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      /* Scrolls one full set of the original 6 items (1/4 or 25% of the total track width) */
      100% { transform: translateX(-25%); } 
    }

    .scroller {
      animation: scroll 30s linear infinite;
    }
  `;

  // Correct calculation: Each item must take up 1/6th of the container width (16.666%)
  const itemWidthPercentage = (50 / items.length);

  return (
    <div className=" p-16 flex items-center justify-center bg-[#0e4a4a] font-inter">
      {/* Inject custom CSS for keyframes */}
      <style dangerouslySetInnerHTML={{ __html: scrollingStyle }} />

      {/* Main container with the visible boundary */}
      <div 
        className="w-full max-w-7xl overflow-hidden rounded-xl border border-white/30 shadow-2xl p-4 md:p-6"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} // Slightly transparent white overlay
      >
        {/* The scrolling track - setting width to 400% of container (4 sets of 6 items) */}
        <div 
          className="scroller flex flex-nowrap h-16 items-center" 
          style={{ width: `${(duplicatedItems.length / items.length) * 100}%` }}
        >
          {duplicatedItems.map((item, index) => {
            const IconComponent = iconMap[item.name];
            return (
              <div 
                key={index} 
                // Tighter spacing: increased icon margin slightly and kept px-4 on div
                className="flex items-center justify-center text-white text-xl md:text-4xl font-semibold px-4"
                // Each original item takes up 1/6th width (16.666%)
                style={{ flex: `0 0 ${itemWidthPercentage}%` }} 
              >
                {/* Logo Icon and Text */}
                <IconComponent color="white"/>
                <span className="whitespace-nowrap">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;