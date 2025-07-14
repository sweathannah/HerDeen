import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a certain amount
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px down
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="fixed bottom-6 right-6 z-50"> {/* Fixed position, adjust as needed */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            bg-[#721d63] text-white p-3 rounded-full shadow-lg
            hover:bg-[#5b216d] focus:outline-none focus:ring-2 focus:ring-[#721d63] focus:ring-opacity-75
            transition-all duration-300 ease-in-out
          "
          aria-label="Scroll to top" // Good for accessibility
        >
          {/* You can use an SVG icon here for a better visual */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;