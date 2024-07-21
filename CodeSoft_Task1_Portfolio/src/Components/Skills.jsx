import React, { useState } from 'react';
import { SlCalender } from "react-icons/sl";

const Skills = () => {
  
  return (
    <section id='skills' className='pt-24 min-h-screen'>
      <div className='p-3'>
        <div className='lg:grid grid-cols-2 gap-10'>
          {/* SKILLS */}
          <div className='flex flex-col items-center gap-5 lg:mb-0 mb-10'>
            <p className='text-5xl font-textContent font-semibold text-gray-600'>Skills</p>
            <div className='w-full p-10 shadow-lg shadow-purple-200 border-purple-100 border rounded-3xl'>
              <div className='flex flex-col gap-10'>
                <div>
                  <p className='text-2xl font-heading font-semibold text-gray-600'>Programming Languages</p>
                  <p className='text-xl text-gray-500 font-textContent'>Java(J2SE, J2EE), JavaScript</p>
                </div>
                <div>
                  <p className='text-2xl font-heading font-semibold text-gray-600'>Frontend Development</p>
                  <p className='text-xl text-gray-500 font-textContent'>HTML, CSS, Tailwind CSS, ReactJs</p>
                </div>
                <div>
                  <p className='text-2xl font-heading font-semibold text-gray-600'>Backend Development</p>
                  <p className='text-xl text-gray-500 font-textContent'>Spring, SpringBoot</p>
                </div>
                <div>
                  <p className='text-2xl font-heading font-semibold text-gray-600'>Database Technologies</p>
                  <p className='text-xl text-gray-500 font-textContent'>Oracle, MySQL, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className='flex flex-col items-center gap-5'>
            <p className='text-5xl font-textContent font-semibold text-gray-600'>Education</p>
            <div className='w-full p-10 shadow-lg shadow-purple-200 border-purple-100 border rounded-3xl'>
              <div className='flex flex-col gap-10'>
                <div>
                  <p className='text-2xl font-heading font-semibold text-gray-600'>Bsc Computer Science</p>
                  <p className='text-xl text-gray-500 font-textContent'>Tara Government Degree and Pg College</p>
                  <div className='flex gap-2'>
                    <SlCalender className='mt-1.5 text-gray-500'></SlCalender>
                    <p className='text-xl text-gray-500 font-textContent'>2020-2023</p>
                  </div>
                </div>
                <div>
                  <p className='text-2xl font-heading font-semibold text-gray-600'>Intermediate</p>
                  <p className='text-xl text-gray-500 font-textContent'>NRI Junior College</p>
                  <div className='flex gap-2'>
                    <SlCalender className='mt-1.5 text-gray-500'></SlCalender>
                    <p className='text-xl text-gray-500 font-textContent'>2018-2020</p>
                  </div>
                </div>
                <div>
                  <p className='text-2xl font-heading font-semibold text-gray-600'>SSC</p>
                  <p className='text-xl text-gray-500 font-textContent'>Jawahar Navodaya Vidyalaya</p>
                  <div className='flex gap-2'>
                    <SlCalender className='mt-1.5 text-gray-500'></SlCalender>
                    <p className='text-xl text-gray-500 font-textContent'>2017-2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
