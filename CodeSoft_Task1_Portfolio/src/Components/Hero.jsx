import React from 'react';
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { IoMdHand } from "react-icons/io";

const Hero = () => {
return (
<section id='hero' >
<div className='min-h-screen lg:grid lg:grid-cols-2 items-center'>
        <div className='p-3 flex flex-col gap-3  '>
            {/* Image */}
            <div className='lg:hidden mb-5 '>
                  <img src='pi-1.png' className='md:w-full max-w-96 '></img>
            </div>
            {/* Name and Description */}
            <p className='md:text-5xl text-3xl md:text-nowrap font-heading font-semibold text-gray-600'>Aarthi Subedar👋</p>
            <p className='lg:text-2xl text-xl text-gray-500 font-longContent'>Passionate about building responsive web applications and creating exceptional user experiences.
              Proficient in HTML, CSS, JavaScript, React, and experienced with Java and the Spring Framework for backend development.
            </p>
            {/* Social Media Links */}
            <div className='flex gap-10 mt-10'>
                <a href='https://github.com/AarthiSubedar' aria-label='GitHub'>
                  <VscGithubAlt className='text-3xl hover:text-purple-500 hover:-translate-y-1 scale-105 duration-200 ' />
                </a>
                <a href='https://www.linkedin.com/in/subedar-aarthi/' aria-label='LinkedIn'>
                  <SlSocialLinkedin className='text-3xl hover:text-purple-500 hover:-translate-y-1 scale-105 duration-200' />
                </a>
                <a href='https://www.instagram.com/aarthi_209_/' aria-label='Instagram'>
                  <FaInstagram className='text-3xl hover:text-purple-500 hover:-translate-y-1 scale-105 duration-200' />
                </a>
            </div>
        </div>
        {/* Image */}
        <div className='hidden lg:flex lg:flex-col lg:items-end'>
              <img src='pi-1.png' className='md:w-full max-w-96 '></img>
        </div>
    </div>
</section>
  );
};

export default Hero;
