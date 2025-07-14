// src/pages/Home.jsx
import React, { useState } from 'react';
import FAQSection from '../components/faq_section';
import WaitlistForm from '../components/WaitlistForm'; 

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
                  <a href="#Home" className='block py-2 '>Home</a>
                  <span className='shooting-star-underline'></span>
                </li>
                <li className='list-none relative group'>
                  <a href="#About" className='block py-2'>About</a>
                  <span className='shooting-star-underline'></span>
                </li>
                <li className='list-none relative group'>
                  <a href="#Features" className='block py-2'>Feature</a>
                  <span className='shooting-star-underline'></span>
                </li>
                <li className='list-none relative group'>
                  <a href="#FAQs" className='block py-2'>FAQs</a>
                  <span className='shooting-star-underline'></span>
                </li>
                <li className='list-none relative group'>
                  <a href="#Contact" className='block py-2'>Contact</a>
                  <span className='shooting-star-underline'></span>
                </li>
              </ul>
            </nav>
            <a href="#Join">
              <button className='bg-[#FFFFFF] text-[#721d63] rounded-[0.625rem] px-[1.5rem] py-[0.9rem] font-medium text-[1rem]'>
                Join the Waitlist
              </button>
            </a>
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
                    <a href="#Home" className='block'>Home</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                  <li className='list-none relative group'>
                    <a href="#About" className='block'>About</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                  <li className='list-none relative group'>
                    <a href="#Feature" className='block'>Feature</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                  <li className='list-none relative group'>
                    <a href="#FAQs" className='block'>FAQs</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                  <li className='list-none relative group'>
                    <a href="#Contact" className='block'>Contact</a>
                    <span className='shooting-star-underline'></span>
                  </li>
                </ul>
              </nav>
              <div className='mt-8 text-end'>
                <a href="#Join">
                  <button className='bg-[#62206E] text-white rounded-[0.625rem] px-[0.2rem] py-[0.6rem] font-medium text-[1rem] w-full max-w-[200px]'>
                      Join the Waitlist
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='lg:py-[3.75rem] lg:px-[6.25rem] p-[1.56rem] flex lg:flex-row flex-col' id='Home'>
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
            <WaitlistForm />
            
          </article>
          
          <article>
            <img src="/images/hero2.png" alt="" />
          </article>
        </section>
        <section className='lg:px-[6.25rem] px-[1.56rem] flex flex-row items-center' id='About'>
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
        <section className='lg:py-[3.75rem] lg:px-[6.25rem] p-[1.56rem] flex flex-col items-center lg:mx-auto lg:text-center text-start' id='Features'>
          <article className='lg:w-[48rem] lg:mb-[6.25rem] mb-[2rem]'>
            <h2 className='text-[2B0E30] font-bold lg:text-[3rem] text-[2.2rem]'>
              What You’ll Find Inside
            </h2>
            <p className='text-[#444444] font-normal text-[1rem] mt-[0.5rem]'>
              HerDeen is more than an app, it’s your digital companion for living intentionally as a Muslimah, with Allah at the center of every plan and habit
            </p>
          </article>
          <article className='flex flex-row flex-wrap gap-[2.5rem] mx-auto'>
            <div className='lg:w-[22rem] w-full bg-[#FFFFFF] rounded-[0.75rem] p-[1.5rem] text-start'>
              <img src="/images/points.svg" alt="Point Icon" className='mb-[3rem] bg-[#F2EAF3] p-[0.75rem] rounded-[0.625rem]'/>
              <h3 className='text-[#2B0E30] font-semibold text-[1.5rem] mb-[0.2rem]'>
                Salah & Qur’an Reminder
              </h3>
              <p className='text-[#333333] font-normal text-[1rem]'>
                Stay consistent with smart alerts that respect your schedule and flow.
              </p>
            </div>
            <div className='lg:w-[22rem] w-full bg-[#FFFFFF] rounded-[0.75rem] p-[1.5rem] text-start'>
              <img src="/images/points.svg" alt="Point Icon" className='mb-[3rem] bg-[#D6BCDB] p-[0.75rem] rounded-[0.625rem]'/>
              <h3 className='text-[#2B0E30] font-semibold text-[1.5rem] mb-[0.2rem]'>
                AI Day Planner
              </h3>
              <p className='text-[#333333] font-normal text-[1rem]'>
                Organize your day around prayer, not the other way around.
              </p>
            </div>
            <div className='lg:w-[22rem] w-full bg-[#FFFFFF] rounded-[0.75rem] p-[1.5rem] text-start'>
              <img src="/images/points2.svg" alt="Point Icon" className='mb-[3rem] bg-[#7A288A] p-[0.75rem] rounded-[0.625rem]'/>
              <h3 className='text-[#2B0E30] font-semibold text-[1.5rem] mb-[0.2rem]'>
                HerQur’an Journey
              </h3>
              <p className='text-[#333333] font-normal text-[1rem]'>
                Track your memorization and Muraja’ah effortlessly.
              </p>
            </div>
            <div className='lg:w-[22rem] w-full bg-[#FFFFFF] rounded-[0.75rem] p-[1.5rem] text-start'>
              <img src="/images/points2.svg" alt="Point Icon" className='mb-[3rem] bg-[#62206E] p-[0.75rem] rounded-[0.625rem]'/>
              <h3 className='text-[#2B0E30] font-semibold text-[1.5rem] mb-[0.2rem]'>
                Modest Wall
              </h3>
              <p className='text-[#333333] font-normal text-[1rem]'>
                A space to share modest outfits, book gems, wins, and du’as.
              </p>
            </div>
            <div className='lg:w-[22rem] w-full bg-[#FFFFFF] rounded-[0.75rem] p-[1.5rem] text-start'>
              <img src="/images/points2.svg" alt="Point Icon" className='mb-[3rem] bg-[#491853] p-[0.75rem] rounded-[0.625rem]'/>
              <h3 className='text-[#2B0E30] font-semibold text-[1.5rem] mb-[0.2rem]'>
                Ghusl & Menstrual Guide
              </h3>
              <p className='text-[#333333] font-normal text-[1rem]'>
                Faith-aligned support for cycle tracking and spiritual hygiene
              </p>
            </div>
            <div className='lg:w-[22rem] w-full bg-[#FFFFFF] rounded-[0.75rem] p-[1.5rem] text-start'>
              <img src="/images/points2.svg" alt="Point Icon" className='mb-[3rem] bg-[#2B0E30] p-[0.75rem] rounded-[0.625rem]'/>
              <h3 className='text-[#2B0E30] font-semibold text-[1.5rem] mb-[0.2rem]'>
                Islamic Book Library
              </h3>
              <p className='text-[#333333] font-normal text-[1rem]'>
                Explore different books, review, and track your spiritual reads.
              </p>
            </div>
          </article>
        </section>
        <section className='lg:py-[3.75rem] lg:px-[6.25rem] p-[1.56rem] flex flex-col items-center lg:mx-auto lg:text-center text-start'>
          <article className='lg:w-[48rem] lg:mb-[6.25rem] mb-[2rem]'>
            <h2 className='text-[2B0E30] font-bold lg:text-[3rem] text-[2.2rem] text-center'>
              Words from the Community
            </h2>
          </article>
          <article className='lg:flex hidden flex-col mx-auto'>
            <div className='bg-[#491853] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start ml-[20rem]'>
              <div>
                <img src="/images/Halima.jpg" alt="Halima Picture" className='w-[3.37rem] h-[3.37rem] rounded-full' />
              </div>
              <div className='text-[#FFFFFF] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Halimah Ibrahim
                </h4>
                <p className='mb-[1rem] '>
                  ~ 35 years
                </p>
                <p className='w-[17.3rem]'>
                  As a revert, I’m always looking for guidance and sisterhood to improve my life. HerDeen feels like both.
                </p>
              </div>
            </div>
            <div className='bg-[#FAE0FF] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start'>
              <div>
                <img src="/images/fatima.jpg" alt="Fatima Picture" className='w-[3.37rem] h-[3.37rem] rounded-full' />
              </div>
              <div className='text-[#000000] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Fatimah Muhammed
                </h4>
                <p className='mb-[1rem] '>
                  ~ 28 years
                </p>
                <p className='w-[17.3rem]'>
                  Can’t wait to use the AI planner. I need this kind of peace in my life. And also be part of sisterhood community.
                </p>
              </div>
            </div>
            <div className='bg-[#F3AFAF] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start ml-[26rem]'>
              <div>
                <img src="/images/aisha.jpg" alt="Aaisha Picture" className='w-[4rem] h-[4rem] rounded-full' />
              </div>
              <div className='text-[#000000] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Aisha Ibrahim
                </h4>
                <p className='mb-[1rem] '>
                  ~ 21 years
                </p>
                <p className='w-[17.3rem]'>
                  I’ve always wanted something like this, something that helps me stay on track without judgment.
                </p>
              </div>
            </div>
            <div className='bg-[#37123E] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start ml-[7rem]'>
              <div>
                <img src="/images/bushroh.jpg" alt="Bushroh's Picture" className='w-[3.37rem] h-[3.37rem] rounded-full' />
              </div>
              <div className='text-[#ffffff] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Bushroh Khalid
                </h4>
                <p className='mb-[1rem] '>
                  ~ 22 years
                </p>
                <p className='w-[17.3rem]'>
                  HerDeen would’ve helped me stay consistent with my Qur’an memorization. I keep starting and stopping because I feel so disorganized.
                </p>
              </div>
            </div>
            <div className='bg-[#7A288A] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start ml-[33rem]'>
              <div>
                <img src="/images/zainab.jpg" alt="Zainab Picture" className='w-[4rem] h-[4rem] rounded-full' />
              </div>
              <div className='text-[#ffffff] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Zainab Danlami
                </h4>
                <p className='mb-[1rem] '>
                  ~ 35 years
                </p>
                <p className='w-[17.3rem]'>
                  I love that it includes a menstrual and ghusl tracker. During my cycle, I often lose momentum. This would help me stay connected spiritually.
                </p>
              </div>
            </div>
          </article>
          <article className='lg:hidden flex flex-row flex-wrap justify-center gap-[0.75rem] '>
            <div className='bg-[#491853] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row items-start gap-[1.25rem] text-start mx-[0.2rem]'>
              <div>
                <img src="/images/Halima.jpg" alt="Halima Picture" className='w-[3.37rem] h-[3.37rem] rounded-full' />
              </div>
              <div className='text-[#FFFFFF] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Halimah Ibrahim
                </h4>
                <p className='mb-[1rem] '>
                  ~ 35 years
                </p>
                <p className='w-[17.3rem]'>
                  As a revert, I’m always looking for guidance and sisterhood to improve my life. HerDeen feels like both.
                </p>
              </div>
            </div>
            <div className='bg-[#FAE0FF] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start mx-[0.2rem]'>
              <div>
                <img src="/images/fatima.jpg" alt="Fatima Picture" className='w-[3.37rem] h-[3.37rem] rounded-full' />
              </div>
              <div className='text-[#000000] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Fatimah Muhammed
                </h4>
                <p className='mb-[1rem] '>
                  ~ 28 years
                </p>
                <p className='w-[17.3rem]'>
                  Can’t wait to use the AI planner. I need this kind of peace in my life. And also be part of sisterhood community.
                </p>
              </div>
            </div>
            <div className='bg-[#F3AFAF] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start mx-[0.2rem]'>
              <div>
                <img src="/images/aisha.jpg" alt="Aaisha Picture" className='w-[4rem] h-[4rem] rounded-full' />
              </div>
              <div className='text-[#000000] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Aisha Ibrahim
                </h4>
                <p className='mb-[1rem] '>
                  ~ 21 years
                </p>
                <p className='w-[17.3rem]'>
                  I’ve always wanted something like this, something that helps me stay on track without judgment.
                </p>
              </div>
            </div>
            <div className='bg-[#37123E] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start mx-[0.2rem]'>
              <div>
                <img src="/images/bushroh.jpg" alt="Bushroh's Picture" className='w-[3.37rem] h-[3.37rem] rounded-full' />
              </div>
              <div className='text-[#ffffff] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Bushroh Khalid
                </h4>
                <p className='mb-[1rem] '>
                  ~ 22 years
                </p>
                <p className='w-[17.3rem]'>
                  HerDeen would’ve helped me stay consistent with my Qur’an memorization. I keep starting and stopping because I feel so disorganized.
                </p>
              </div>
            </div>
            <div className='bg-[#7A288A] p-[1.5rem] rounded-[1rem] shadow-lg flex flex-row w-fit items-start gap-[1.25rem] text-start mx-[0.2rem]'>
              <div>
                <img src="/images/zainab.jpg" alt="Zainab Picture" className='w-[4rem] h-[4rem] rounded-full' />
              </div>
              <div className='text-[#ffffff] font-semibolds text-[0.77rem]'>
                <h4 className='text-[1.156rem]'>
                  Zainab Danlami
                </h4>
                <p className='mb-[1rem] '>
                  ~ 35 years
                </p>
                <p className='w-[17.3rem]'>
                  I love that it includes a menstrual and ghusl tracker. During my cycle, I often lose momentum. This would help me stay connected spiritually.
                </p>
              </div>
            </div>
          </article>
        </section>
        <section className="flex flex-col justify-center lg:bg-[url('/images/experience.svg')] bg-[url('/images/experience2.svg')] bg-cover bg-center lg:py-[12.626rem] py-[5rem] text-center items-center text-[#FFFFFF]" id='Join' >
          <div className='lg:w-[50.25rem] w-[22.5rem]'>
            <h2 className='font-bold text-[2.6rem]'>
              Be the First to Experience HerDeen
            </h2>
            <p className='lg:text-[1.25rem] text-[1rem] px-[1rem] font-normal mb-[3.7rem]'>
              We’re launching soon, in shaa Allah. Join our waitlist and be the first to access the app, receive behind-the-scenes updates, and enjoy early user rewards
            </p>
            <div className='flex flex-col relative items-start lg:mt-[4rem] mt-[5rem]'>
              <img src="/images/subscribers2.svg" alt="herDeen Subscribers" className='mt-[2rem] z-50 absolute -top-20' />
              <div className='flex lg:flex-row flex-col gap-[1rem] mx-auto w-fit'>
                <div className='rounded-[1rem] border-[#62206E] bg-white border-[1px] lg:w-[33.75rem] px-[2rem] border-solid justify-between items-center shadow-lg flex lg:flex-row flex-col'>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow py-[1.2rem] px-[1.5rem] text-[#444444] focus:outline-none bg-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#721d63] text-white rounded-[0.8rem] px-6 py-3 text-sm font-medium whitespace-nowrap text-center"
                >
                  Join the Waiting List Now
                </button> 
              </div>
              {/* <button
                  type="submit"
                  className="lg:hidden flex bg-[#721d63] text-white rounded-[0.8rem] px-[5rem] py-[1rem] text-sm font-medium whitespace-nowrap mx-auto my-[1.5rem] w-full text-center"
                >
                  Join the Waiting List Now
                </button> */}
            </div>
          </div>
        </section>

        <FAQSection />

        <section className='bg-[#F2EAF3] py-[5rem] lg:px-[6.25rem] px-[1.56rem] flex flex-col justify-center items-center text-center '>
          <h3 className='text-[#2B0E30] font-bold text-[2.6rem] mb-[1.5rem]'>
            Follow the Journey
          </h3>
          <p className='text-[#333333] font- text-[1.125rem] lg:w-[44.19rem]'>
            We’re building HerDeen with heart, dua, and your feedback. Connect with us on social to get real-time updates and behind-the-scenes progress
          </p>
          <div className='mt-[2.125rem] flex flex-row gap-[0.8rem]'>
            <a href="#">
              <img src="/images/facebook.svg" alt="Facebook Icon" />
            </a>
            <a href="#">
              <img src="/images/x.svg" alt="Twitter Icon" />
            </a>
            <a href="#">
              <img src="/images/IG.svg" alt="IG iIcon" />
            </a>
          </div>
        </section>

        <footer className='bg-[#FDF9FF] lg:px-[6.25rem] px-[1.56rem] lg:pt-[6.25rem] pt-[4rem] pb-[3.75rem] text-[#444444] font-normal'>
          <section className='lg:gap-[6.25rem] gap-[2rem] flex flex-row flex-wrap lg:pb-[3.125rem] border-b-[#D6BCDB] border-b-[1px] border-solid'>
            <div className='flex flex-col max-w-[32rem] lg:pb-[0] pb-[2rem] lg:border-b-0 border-b-[#D6BCDB] border-b-[1px] border-solid'>
              <a href="#">
                <img src="/images/logo2.svg" alt="HerDeen's Logo" />
              </a>
              <p className='text-[1rem] mt-[1.5rem]'>
                HerDeen is more than an app, it’s your digital companion for living intentionally as a Muslimah, with Allah at the center of every plan and habit.
              </p>
            </div>
            <div className='flex flex-col lg:gap-[1.5rem] gap-[0.4rem] w-[12.5rem]'>
              <h4 className='text-[#62206E] text-[1.25rem] font-bold'>
                Sections
              </h4>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Feature</a>
              <a href="#">FAQs</a>
            </div>
            <div className='flex flex-col lg:gap-[1.5rem] gap-[0.6rem] lg:pb-[0] pb-[2rem] lg:border-b-0 border-b-[#D6BCDB] border-b-[1px] border-solid' id='Contact'>
              <h4 className='text-[#62206E] text-[1.25rem] font-bold'>
                Contact Us
              </h4>
              <a href="mailto:contact@herdeen.com" className='flex gap-[0.75rem] items-center'>
                <img src="/images/mail.svg" alt="Mail Icon" />
                <span>contact@herdeen.com</span>
              </a>
              <a href="tel:+8035700214" className='flex gap-[0.75rem] items-center'>
                <img src="/images/tel.svg" alt="Phone Icon" />
                <span>+234 803 5700 214</span>
              </a>
              <a href="#" className='flex gap-[0.75rem] items-center'>
                <img src="/images/location.svg" alt="Location Icon" />
                <span>Ilorin, Nigeria.</span>
              </a>
            </div>
          </section>
          <section  className='lg:justify-between flex flex-row flex-wrap lg:pt-[3.125rem] pt-[2rem]'>
           <p>© 2025 HerDeen</p>
           <p>All Rights Reserved | <a href="#" className='text-[#62206E] underline'>Terms and Conditions | Privacy Policy </a></p> 
          </section>
        </footer>
      </section>
    </>
  );
};

export default Home;