import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { IoArrowDown } from "react-icons/io5";

const Hero = () => {
  return (
    <section id='hero' >
      <div className='min-h-screen lg:grid lg:grid-cols-2 items-center '>
        <div className='p-3 flex flex-col gap-3'>
          {/* Image */}
          <div className='lg:hidden mb-5'>
            <div className='blob'></div>
          </div>
          {/* Name and Description */}
          <p className='md:text-6xl text-3xl  font-heading font-semibold text-gray-600'>Aarthi Subedar👋</p>
          <p className='lg:text-2xl text-xl text-gray-500 font-longContent mb-10 '>
            Passionate about building responsive web applications and creating exceptional user experiences.
            Proficient in HTML, CSS, JavaScript, React, and experienced with Java and the Spring Framework for backend development.
          </p>
          {/* Social Media Links */}
          <div className='flex gap-10 '>
            <a href='https://github.com/AarthiSubedar?tab=repositories' aria-label='GitHub'>
              <VscGithubAlt className='text-3xl hover:text-purple-600 hover:-translate-y-1 duration-200' />
            </a>
            <a href='https://www.linkedin.com/in/subedar-aarthi/' aria-label='LinkedIn'>
              <SlSocialLinkedin className='text-3xl hover:text-purple-600 hover:-translate-y-1  duration-200' />
            </a>
            <a href='https://www.instagram.com/aarthi_209_/' aria-label='Instagram'>
              <FaInstagram className='text-3xl hover:text-purple-600 hover:-translate-y-1 duration-200' />
            </a>
          </div>
        </div>
        {/* Image */}
        <div className='hidden lg:flex lg:flex-col lg:items-end'>
          <div className='blob'></div>
        </div>
        {/* <div className='hidden lg:flex gap-2 mb-5 ml-3'>
            <p className='text-xl font-textContent text-gray-500 '>Scroll Down</p>
            <IoArrowDown className='text-2xl text-gray-600 animate-bounce ' ></IoArrowDown>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
