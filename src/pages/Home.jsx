// src/pages/Home.jsx
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='font-[DM Sans]'>
        <header className='bg-[#A6C2A1] lg:px-[3rem] px-[1rem] py-[1rem]'>
            <nav className='flex justify-between items-center'>
              <img src="/images/logo.png" alt="HerDeen Logo"  className='w-[8rem] h-[5rem]'/>
              <button className='bg-[#1E3D38] text-white font-normal text-[1rem] lg:px-[1.8rem] px-[0.8rem] py-[0.7rem] rounded-[0.6rem]'>
                Join the Waitlist
              </button>
            </nav>
            <article className='mx-auto text-center font-bold lg:w-[45rem] w-[18rem]'>
              <h1 className='text-[#1E3D38] font-[Source Serif 4] lg:text-[3rem] text-[2rem] my-[1rem] font-bold'>
                Balance Your Deen & Dunya: One Day at a Time
              </h1>
              <p className='text-[#6B7280] font-normal'>
                HerDeen is coming soon with the easiest way to to stay consistent in worship, plan your day with ease, and grow in faith, peace, and purpose. Be the first to know.
              </p>
              <button className='bg-[#1E3D38] text-white font-normal text-[1rem] lg:px-[2rem] px-[0.8rem] py-[0.7rem] rounded-[0.6rem] lg:mt-[1.5rem] mt-[1rem]'>
                Join the Waitlist Now
              </button>
              <div className='mx-auto items-center flex flex-row mt-[2.2rem] lg:gap-[1.5rem] gap-[1rem] w-fit'>
                <img src="/images/subscripers.svg" alt="Hereen Subscribers" className='lg:w-[13rem]  w-[8rem]' />
                <p className='text-[#6B7280] font-medium lg:text-[1rem] text-[0.7rem] text-left lg:w-[20rem] w-[15rem]'>
                  100+ sisters already on board. Don’t miss your chance to be among them
                </p>
              </div>
            </article>
        </header>
        <main>

        </main>
      </section>
    </>
  )
}

export default Home
