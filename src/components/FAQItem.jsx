// src/components/FAQItem.jsx
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-[1.25rem] text-[#2B0E30]">{question}</h3>
        {/* You'll replace this with your actual SVG icons */}
        <span>{isOpen ? '—' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-[#444444] font-normal text-[1rem]">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;