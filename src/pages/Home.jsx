// src/pages/Home.jsx
import React, { useState } from 'react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className='font-[Poppins]'>
        <section>
          <header className='bg-[#721d63] px-[6.25rem] py-[2rem] justify-between items-center lg:flex hidden'>
            <img src="/images/logo.svg" alt="HerDeen Logo" />
            <nav className='text-white font-normal text-[1rem] gap-[2rem]'>
              <ul className='flex gap-4'>
                <li className='list-none relative group'>
                  <a href="#" className='block py-2 '>Home</a>
                  <span className='shooting-star-underline'></span>
                </li>
                <li className='list-none relative group'>
                  <a href="#" className='block py-2'>About</a>
                  <span className='shooting-star-underline'></span>
                </li>
                <li className='list-none relative group'>
                  <a href="#" className='block py-2'>Feature</a>
                  <span className='shooting-star-underline'></span>
                </li>
                <li className='list-none relative group'>
                  <a href="#" className='block py-2'>FAQs</a>
                  <span className='shooting-star-underline'></span>
                </li>
                <li className='list-none relative group'>
                  <a href="#" className='block py-2'>Contact</a>
                  <span className='shooting-star-underline'></span>
                </li>
              </ul>
            </nav>
            <button className='bg-[#FFFFFF] text-[#721d63] rounded-[0.625rem] px-[1.5rem] py-[0.9rem] font-medium text-[1rem]'>
              Join the Waitlist
            </button>
          </header>

          {/* Mobile Header (Hamburger Menu) */}
          <header className='lg:hidden flex bg-[#721d63] p-5 justify-between items-center relative z-20'>
            <img src="/images/logo.svg" alt="HerDeen Logo" className='h-8' />
            <button onClick={toggleMenu} className='focus:outline-none'>
              <img
                src={isMenuOpen ? "/images/close.svg" : "/images/menu.svg"}
                alt={isMenuOpen ? "Menu close" : "Menu open"}
                className='h-6 w-6 transition-transform duration-300'
              />
            </button>
          </header>

          {/* Overlay for when sidebar is open */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-[#D6BCDB] bg-opacity-50 z-10 lg:hidden"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Sidebar for small and medium screens */}
          <div
            className={`
              fixed top-0 right-0 h-full w-64 mt-[4.5rem] bg-white text-[#444444]
              transform transition-transform duration-500 ease-in-out
              lg:hidden z-20
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className='py-[2rem] px-[1.56rem]'>
              <nav>
                <ul className='flex flex-col gap-[0.75rem] text-[1rem] font-normal items-end'>
                  <li className='list-none relative group'>
                    <a href="#" className='block'>Home</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                  <li className='list-none relative group'>
                    <a href="#" className='block'>About</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                  <li className='list-none relative group'>
                    <a href="#" className='block'>Feature</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                  <li className='list-none relative group'>
                    <a href="#" className='block'>FAQs</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                  <li className='list-none relative group'>
                    <a href="#" className='block'>Contact</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                </ul>
              </nav>
              <div className='mt-8 text-end'>
                  <button className='bg-[#62206E] text-white rounded-[0.625rem] px-[0.2rem] py-[0.6rem] font-medium text-[1rem] w-full max-w-[200px]'>
                      Join the Waitlist
                  </button>
              </div>
            </div>
          </div>
        </section>
        <section className='lg:py-[3.75rem] lg:px-[6.25rem] p-[1.56rem] flex lg:flex-row flex-col'>
          <article className='lg:my-[6.759rem] my-[1rem]'>
            <h1 className='lg:text-[3rem] text-[2rem]  text-[#2B0E30] font-black lg:w-[42rem]'>
              Balance Your Deen & Dunya: One Day at a Time
            </h1>
            <p className='text-[1rem] font-normal text-[#444444] my-[0.75rem]'>
              HerDeen is coming soon with the easiest way to to stay consistent in worship, plan your day with ease, and grow in faith, peace, and purpose. Be the first to know.
            </p>
            <p className='text-[0.8rem] font-normal text-[#444444]'>
              100+ sisters already on board. Don’t miss your chance to be among them
            </p>
            <div className='flex flex-col relative items-start lg:mt-[4rem] mt-[5rem]'>
              <img src="/images/users.svg" alt="herDeen Subscribers" className='mt-[2rem] z-50 absolute -top-20' />
              <div className='rounded-[1rem] border-[#62206E] border-[1px] w-full px-[2rem] border-solid justify-between items-center shadow-lg flex lg:flex-row flex-col'>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow py-[1.2rem] px-[1.5rem] text-[#444444] focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="lg:flex hidden bg-[#721d63] text-white rounded-[0.8rem] px-6 py-3 text-sm font-medium whitespace-nowrap ml-[8.3rem]"
                >
                  Join the Waiting List Now
                </button> 
              </div>
              <button
                  type="submit"
                  className="lg:hidden flex bg-[#721d63] text-white rounded-[0.8rem] px-[5rem] py-[1rem] text-sm font-medium whitespace-nowrap mx-auto my-[1.5rem] w-full text-center"
                >
                  Join the Waiting List Now
                </button>
            </div>
            
          </article>
          
          <article>
            <img src="/images/hero2.png" alt="" />
          </article>
        </section>
        <section className='lg:px-[6.25rem] px-[1.56rem] flex flex-row items-center'>
          <img src="/images/why.svg" alt="# ladies smiling" className='lg:inline hidden' />
          <div>
            <h2 className='lg:text-[3.6rem] text-[3rem] font-bold text-gradient'>
              Why HerDeen?
            </h2>
            <p className='text-[#444444] font-normal text-[1.1rem]'>
              Life is full. Between school, work, family, and personal goals—it’s easy for Ibadah to take the backseat. Many Muslim women struggle with:
            </p>
            <ul className='py-[1.5rem] px-[3rem] text-[#444444] font-normal text-[1rem]'>
              <li className='list-disc'>
                Feeling disconnected from spiritual routines
              </li>
              <li className='list-disc'>
                Finding time for consistent Salah or Tilawah
              </li>
              <li className='list-disc'>
                Lacking tools that combine planning and worship
              </li>
              <li className='list-disc'>
                Wanting a faith-based, non-judgmental system
              </li>
            </ul>
            <p className='text-[#444444] font-normal text-[1.1rem]'>
              HerDeen is more than an app, it’s your digital companion for living intentionally as a Muslimah, with Allah at the center of every plan and habit.
            </p>
          </div>
        </section>
        <section className='lg:py-[3.75rem] lg:px-[6.25rem] p-[1.56rem] flex flex-col items-center lg:mx-auto lg:text-center text-start'>
          <article className='lg:w-[48rem] lg:mb-[6.25rem] mb-[2rem]'>
            <h2 className='text-[#2B0E30] font-bold lg:text-[3rem] text-[2.2rem]'>
              How It Works
            </h2>
            <p className='text-[#444444] font-normal text-[1rem] mt-[0.5rem]'>
              HerDeen is designed to gently guide you through your day while keeping your Deen at the center. No pressure, no overwhelm, just peaceful progress, one habit at a time.
            </p>
          </article>
          <article className='lg:flex hidden flex-col gap-[4rem] w-full'>
            <div className='flex flex-row gap-[3.75rem] mx-auto ml-[23rem] w-fit'>
              <img src="/images/deengoals.svg" alt="A doodle of a girl writing her goals" className='pt-[2rem]' />
              <img src="/images/divider.svg" alt="A purple divider" />
              <div className='flex flex-col text-[1.25rem] text-start w-[25rem]'>
                <h3 className='bg-[#62206E] text-[#F2EAF3] w-[3.125rem] h-[3.125rem] rounded-full font-medium items-center flex justify-center mb-[1rem]'>1
                </h3>
                <h4 className='text-[#2B0E30] font-semibold'>
                  Set Your Deen Goals
                </h4>
                <p className='text-[1rem] font-normal text-[#444444]'>
                  Choose spiritual goals that truly matter to you—like praying all five daily Salah, reciting or memorizing the Qur’an, giving Sadaqah regularly or journaling your reflections.
                </p>
              </div>
            </div>
            <div className='flex flex-row gap-[3.75rem] mx-auto mr-[22.3rem] w-fit'>
              <div className='flex flex-col text-[1.25rem] text-end items-end w-[25rem]'>
                <h3 className='bg-[#62206E] text-[#F2EAF3] w-[3.125rem] h-[3.125rem] rounded-full font-medium items-center flex justify-center mb-[1rem]'>
                  2
                </h3>
                <h4 className='text-[#2B0E30] font-semibold'>
                  Plan Your Day with the AI Planner
                </h4>
                <p className='text-[1rem] font-normal text-[#444444]'>
                  Let HerDeen help you organize both Deen and Dunya. The smart planner schedules tasks around Salah, your calendar, and daily energy flow—so you stay balanced and stress-free
                </p>
              </div>
              <img src="/images/divider.svg" alt="A purple divider" />
              <img src="/images/writing.svg" alt="A doodle of a pen and paper" className='pt-[2rem]' />
            </div>
            <div className='flex flex-row gap-[3.75rem] mx-auto ml-[23rem] w-fit'>
              <img src="/images/calender.svg" alt="A doodle of a calendar" className='pt-[2rem]' />
              <img src="/images/divider.svg" alt="A purple divider" />
              <div className='flex flex-col text-[1.25rem] text-start w-[25rem]'>
                <h3 className='bg-[#62206E] text-[#F2EAF3] w-[3.125rem] h-[3.125rem] rounded-full font-medium items-center flex justify-center mb-[1rem]'>
                  3
                </h3>
                <h4 className='text-[#2B0E30] font-semibold'>
                  Get Gentle Daily Reminders
                </h4>
                <p className='text-[1rem] font-normal text-[#444444]'>
                  Stay connected to your faith with kind nudges throughout your day, from Salah times and adhkar to Qur’an verses, du’as, sunnah acts, and heartfelt reflections to uplift your soul.
                </p>
              </div>
            </div>
            <div className='flex flex-row gap-[3.75rem] mx-auto mr-[22.3rem] w-fit'>
              <div className='flex flex-col text-[1.25rem] text-end items-end w-[25rem]'>
                <h3 className='bg-[#62206E] text-[#F2EAF3] w-[3.125rem] h-[3.125rem] rounded-full font-medium items-center flex justify-center mb-[1rem]'>
                  4
                </h3>
                <h4 className='text-[#2B0E30] font-semibold'>
                  Connect with a Supportive Community
                </h4>
                <p className='text-[1rem] font-normal text-[#444444]'>
                  You’re not alone on this journey. Share, learn, and grow with other Muslimahs who understand your path.
                </p>
              </div>
              <img src="/images/divider.svg" alt="A purple divider" />
              <img src="/images/community.svg" alt="A doodle of muslimahs" className='pt-[2rem]' />
            </div>
          </article>
          <article className='lg:hidden flex flex-col gap-[1.5rem]'>
            <div className='bg-[#FFFFFF] shadow-lg p-[0.75rem] w-full rounded-[0.75rem]'>
              <img src="/images/deengoals.svg" alt="A doodle of a girl writing her goals" />
              <div className='flex flex-col text-[1.2rem] text-start'>
                <h3 className='bg-[#62206E] text-[#F2EAF3] w-[3.125rem] h-[3.125rem] rounded-full font-medium items-center flex justify-center mb-[1rem]'>1
                </h3>
                <h4 className='text-[#2B0E30] font-semibold'>
                  Set Your Deen Goals
                </h4>
                <p className='text-[0.8rem] font-normal text-[#444444] mt-[0.2rem]'>
                  Choose spiritual goals that truly matter to you, like praying all five daily Salah, reciting or memorizing the Qur’an, giving Sadaqah regularly or journaling your reflections.
                </p>
              </div>
            </div>
            <div className='bg-[#FFFFFF] shadow-lg p-[0.75rem] w-full rounded-[0.75rem]'>
              <img src="/images/writing.svg" alt="A doodle of a pen and paper" />
              <div className='flex flex-col text-[1.2rem] text-start'>
                <h3 className='bg-[#62206E] text-[#F2EAF3] w-[3.125rem] h-[3.125rem] rounded-full font-medium items-center flex justify-center mb-[1rem]'>2
                </h3>
                <h4 className='text-[#2B0E30] font-semibold'>
                  Plan Your Day with the AI Planner
                </h4>
                <p className='text-[0.8rem] font-normal text-[#444444] mt-[0.2rem]'>
                  Let HerDeen help you organize both Deen and Dunya. The smart planner schedules tasks around Salah, your calendar, and daily energy flow—so you stay balanced and stress-free
                </p>
              </div>
            </div>
            <div className='bg-[#FFFFFF] shadow-lg p-[0.75rem] w-full rounded-[0.75rem]'>
              <img src="/images/calender.svg" alt="A doodle of a calendar" />
              <div className='flex flex-col text-[1.2rem] text-start'>
                <h3 className='bg-[#62206E] text-[#F2EAF3] w-[3.125rem] h-[3.125rem] rounded-full font-medium items-center flex justify-center mb-[1rem]'>3
                </h3>
                <h4 className='text-[#2B0E30] font-semibold'>
                  Get Gentle Daily Reminders
                </h4>
                <p className='text-[0.8rem] font-normal text-[#444444] mt-[0.2rem]'>
                  Stay connected to your faith with kind nudges throughout your day, from Salah times and adhkar to Qur’an verses, du’as, sunnah acts, and heartfelt reflections to uplift your soul.
                </p>
              </div>
            </div>
            <div className='bg-[#FFFFFF] shadow-lg p-[0.75rem] w-full rounded-[0.75rem]'>
              <img src="/images/community.svg" alt="A doodle of muslimahs" />
              <div className='flex flex-col text-[1.2rem] text-start'>
                <h3 className='bg-[#62206E] text-[#F2EAF3] w-[3.125rem] h-[3.125rem] rounded-full font-medium items-center flex justify-center mb-[1rem]'>4
                </h3>
                <h4 className='text-[#2B0E30] font-semibold'>
                  Connect with a Supportive Community
                </h4>
                <p className='text-[0.8rem] font-normal text-[#444444] mt-[0.2rem]'>
                  You’re not alone on this journey. Share, learn, and grow with other Muslimahs who understand your path.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className='lg:py-[3.75rem] lg:px-[6.25rem] p-[1.56rem] flex flex-col items-center lg:mx-auto lg:text-center text-start'>
          <article className='lg:w-[48rem] lg:mb-[6.25rem] mb-[2rem]'>
            <h2 className='text-[2B0E30] font-bold lg:text-[3rem] text-[2.2rem]'>
              What You’ll Find Inside
            </h2>
            <p className='text-[#444444] font-normal text-[1rem] mt-[0.5rem]'>
              HerDeen is more than an app, it’s your digital companion for living intentionally as a Muslimah, with Allah at the center of every plan and habit
            </p>
          </article>
          <article className='flex flex-row flex-wrap gap-[2.5rem]'>

          </article>
        </section>
      </section>
    </>
  );
};

export default Home;