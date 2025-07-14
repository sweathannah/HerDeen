// src/components/WaitlistForm.jsx
import React, { useState } from 'react';

const WaitlistForm = ({
  variant = 'default', // Add a variant prop with a default value
  showImage = true, // Add a prop to control image visibility
  imageSrc = "/images/users.svg", // Prop for image source
  imageAlt = "herDeen Subscribers" // Prop for image alt text
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSftWsDKJuqY3n7cPdYpTL0hZROf3oKyCsIZxGr-1tIKXZIblQ/formResponse'; 
  const GOOGLE_FORM_EMAIL_FIELD_NAME = 'entry.1661478065'; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    const formData = new FormData();
    formData.append(GOOGLE_FORM_EMAIL_FIELD_NAME, email);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setMessage('Thank you for joining the waitlist!');
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Failed to join the waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine base classes for the container based on variant
  const containerClasses = `flex flex-col relative ${variant === 'default' ? 'items-start' : 'items-start'} lg:mt-[4rem] mt-[5rem]`;

  // Determine classes for the input wrapper based on variant
  const inputWrapperClasses = `
    rounded-[1rem] border-[#62206E] border-[1px] border-solid shadow-lg
    ${variant === 'default' ? 'w-full max-w-2xl px-[1rem] py-[0.5rem] flex lg:flex-row flex-col items-center' : 'bg-white lg:w-[33.75rem] px-[2rem] flex-grow flex lg:flex-row flex-col justify-between items-center'}
  `;
  // Determine classes for the button container
  const buttonContainerClasses = `
    ${variant === 'default' ? 'hidden lg:flex bg-[#721d63] text-white rounded-[0.8rem] px-6 py-3 text-sm font-medium whitespace-nowrap ml-4' : 'bg-[#721d63] text-white rounded-[0.8rem] px-6 py-3 text-sm font-medium whitespace-nowrap text-center'}
  `;
  return (
    <div className={containerClasses}>
      {showImage && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`z-10 absolute ${variant === 'default' ? '-top-14' : '-top-12 lg:ml-[9rem] w-auto h-auto'}`}
        />
      )}
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        {/* Input Wrapper */}
        <div className={inputWrapperClasses}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow py-[1.2rem] px-[1.5rem] text-[#444444] focus:outline-none bg-transparent w-full lg:w-auto"
            required
          />
          {/* Conditional rendering of the button inside the input wrapper for default variant */}
          {variant === 'default' && (
            <button
              type="submit"
              className={buttonContainerClasses}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Join the Waiting List Now'}
            </button>
          )}
        </div>

        {/* Button for compact variant (outside the input wrapper) and Mobile Default */}
        {(variant === 'compact' || variant === 'default') && ( // Both variants might need this
          <button
            type="submit"
            className={`
              ${variant === 'compact' ? 'mt-4 w-full max-w-xs' : 'lg:hidden mt-4 w-full max-w-sm'} // Adjusting width for compact vs default mobile
              flex bg-[#721d63] text-white rounded-[0.8rem] px-5 py-3 text-sm font-medium whitespace-nowrap text-center justify-center
            `}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join the Waiting List Now'}
          </button>
        )}
      </form>

      {message && (
        <p className="mt-4 text-sm text-gray-700 text-center " >{message}</p>
      )}
    </div>
  );
};

export default WaitlistForm;