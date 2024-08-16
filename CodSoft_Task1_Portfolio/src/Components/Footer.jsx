import React from 'react'
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section id='Footer' className='pt-24 '>
      <div className='bg-purple-50 p-10'>
          <div>
            <p className='text-5xl font-semibold text-gray-700 font-heading text-center'>Aarthi Subedar</p>
          </div>
          <div className='flex gap-10  mt-10 justify-center'>
            <a href='#About' className='text-2xl  text-gray-800 font-longContent '>About</a>
            <a href='#projects' className='text-2xl text-gray-800 font-longContent '>Projects</a>
          </div>
          <div className='flex gap-10 mt-10 items-center justify-center '>
              <a href='https://github.com/AarthiSubedar?tab=repositories' aria-label='GitHub'>
                <VscGithubAlt className='text-4xl bg-neutral-800 hover:bg-black p-2 rounded-lg text-white ' />
              </a>
              <a href='https://www.linkedin.com/in/subedar-aarthi/' aria-label='LinkedIn'>
                <SlSocialLinkedin className='text-4xl bg-neutral-800 hover:bg-black p-2 rounded-lg text-white ' />
              </a>
              <a href='https://www.instagram.com/aarthi_209_/' aria-label='Instagram'>
                <FaInstagram className='text-4xl bg-neutral-800  hover:bg-black p-2 rounded-lg text-white' />
              </a>
          </div>
          <div>
            <p className='text-xl text-gray-600 text-center font-longContent mt-20'>Copyrights © 2024 All rights reserved | Aarthi Subedar</p>
          </div>
      </div>
    </section>
  )
}

export default Footer