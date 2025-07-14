// src/components/FAQSection.jsx
import React from 'react';
import FAQItem from './FAQItem'; // Import the individual FAQ item component

const faqData = [
  {
    question: "What's HerDeen?",
    answer: "HerDeen is more than an app—it's your digital companion for living intentionally as a Muslimah, with Allah at the center of every plan and habit."
  },
  {
    question: "Is HerDeen Free to use?",
    answer: "Initially, HerDeen will offer a free tier with core features, and premium features will be available through a subscription. Details will be announced closer to launch."
  },
  {
    question: "What happens when I join HerDeen waitlist?",
    answer: "By joining the waitlist, you'll be among the first to know about our launch, get exclusive early access, and receive updates on our progress and features."
  },
  {
    question: "Will my information be secure?",
    answer: "Absolutely. We prioritize your privacy and data security. All your information is encrypted and handled with the utmost care, adhering to strict data protection standards."
  },
  {
    question: "Is HerDeen only for practicing Muslim?",
    answer: "HerDeen is designed to support every Muslimah on her journey, regardless of her current level of practice. It's a tool for growth and connection within the community."
  },
];

const FAQSection = () => {
  return (
    <section className="py-[6.25rem] px-4 md:px-8 lg:px-16 bg-[#F8F6F9] bg-[url('/images/wavy.svg')]" id='FAQs'> 
      <div className="w-fit mx-auto text-center mb-12">
        <h2 className="text-[1.6rem] md:text-5xl font-bold text-[2B0E30] mb-4">Got Any Question?</h2>
        <p className="text-[#444444] text-lg max-w-[25.5rem] ">
          We're here to answer all. Here are some frequently asked questions for HerDeen.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;