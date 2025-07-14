// src/components/WaitlistForm.jsx
import React, { useState } from 'react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSftWsDKJuqY3n7cPdYpTL0hZROf3oKyCsIZxGr-1tIKXZIblQ/formResponse'; 
  const GOOGLE_FORM_EMAIL_FIELD_NAME = 'entry.1661478065'; 

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    // Create a FormData object to send the data
    const formData = new FormData();
    formData.append(GOOGLE_FORM_EMAIL_FIELD_NAME, email);

    try {
      const response = await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Forms direct submission to avoid CORS errors in browser
        body: formData,
      });

      // Since mode is 'no-cors', response.ok will always be false.
      // We assume success if no network error occurred.
      setMessage('Thank you for joining the waitlist!');
      setEmail(''); // Clear the input field
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Failed to join the waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col relative items-start lg:mt-[4rem] mt-[5rem]'>
      <img src="/images/users.svg" alt="herDeen Subscribers" className='z-10 absolute -top-10 ' /> 
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center"> 
        <div className='rounded-[1rem] border-[#62206E] border-[1px] w-full max-w-2xl px-[0.5rem] py-[0.5rem] border-solid shadow-lg flex lg:flex-row flex-col items-center'>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow py-[1.2rem] px-[1.5rem] text-[#444444] focus:outline-none bg-transparent w-full lg:w-auto"
            required 
          />
          {/* Desktop Button */}
          <button
            type="submit"
            className="hidden lg:flex bg-[#721d63] text-white rounded-[0.8rem] px-6 py-3 text-sm font-medium whitespace-nowrap ml-4" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Joining...' : 'Join the Waiting List Now'}
          </button>
        </div>
        {/* Mobile Button (outside the inner div for better responsiveness) */}
        <button
          type="submit"
          className="lg:hidden flex bg-[#721d63] text-white rounded-[0.8rem] px-5 py-3 text-sm font-medium whitespace-nowrap mt-4 w-full max-w-sm text-center justify-center" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Join the Waiting List Now'}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
};

export default WaitlistForm;