import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <header className='w-full h-[136px] bg-black py-8 text-white font-futura relative'>
        <div className='flex justify-between  container px-8 md:px-0 mx-auto w-full  lg:w-[980px] items-center'>
            <div className='font-futura text-4xl sm:text-7xl tracking-widest'>
                <span className='text-brand-primary-color'>Z</span>
                <span>ANDE</span>
            </div>
            <div className='hidden  lg:block'>
                <ul className='flex justify-between text-lg items-baseline space-x-28 font-light'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => {
                                return isActive ? "text-brand-primary-color hover:text-brand-primary-color font-extralight tracking-widest" : "hover:text-brand-primary-color font-extralight tracking-widest";
                            }}
                        > Home</NavLink>

                    </li>
                    <li>
                        <NavLink to="about-us" className={({ isActive }) => {
                                return isActive ? "text-brand-primary-color hover:text-brand-primary-color font-extralight tracking-widest" : "hover:text-brand-primary-color font-extralight tracking-widest";
                            }}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="testimonials" className={({ isActive }) => {
                                return isActive ? "text-brand-primary-color hover:text-brand-primary-color font-extralight tracking-widest" : "hover:text-brand-primary-color font-extralight tracking-widest";
                            }}>Testimonials</NavLink>
                    </li>
                </ul>
            </div>
            {isNavOpen && 
                <div className={`transition-transform duration-500 ease-out z-50 py-12  bg-black fixed left-0 right-0 top-[136px] lg:hidden ${
                    isNavOpen ? 'animate-slideInFromTop' : 'opacity-0'
                  }`}>
                    <ul className='flex justify-between flex-col space-y-8 text-lg items-baseline space-x-28 font-light'>
                        <li>
                            <NavLink to="/" className='hover:text-brand-primary-color font-extralight tracking-widest '>Home</NavLink>

                        </li>
                        <li>
                            <NavLink to="about-us" className='hover:text-brand-primary-color font-extralight tracking-widest'>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="testimonials" className='hover:text-brand-primary-color font-extralight tracking-widest'>Testimonials</NavLink>
                        </li>
                    </ul>
                </div>
            }

            <div className='block lg:hidden'>
                <div>
                    {
                        isNavOpen 
                        ?
                        <span onClick={() => {setIsNavOpen((prev) => !prev)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='sm:size-[50px] size-[30px]'  viewBox="0 -960 960 960" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </span>
                        :
                        <span onClick={() => {setIsNavOpen((prev) => !prev)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='sm:size-[50px] size-[30px]'   viewBox="0 -960 960 960" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </span>

                    }
                    
                    
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header