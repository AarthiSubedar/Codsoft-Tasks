import React from 'react'
import { RiFileDownloadFill } from "react-icons/ri";
const About = () => {
  return (
    <section id='About'  className='pt-24 '>
      <div className='min-h-screen  p-3'>
        <div>
          <div className='mb-36'>
            <p className='text-5xl font-textContent font-semibold text-gray-700 text-center'>About Me</p>
            <p className='text-xl text-gray-500 font-longContent text-center mt-2'>My Introduction</p>
          </div>
          <div className='lg:grid lg:grid-cols-2 '>
              {/* Image */}
              <div className='flex justify-center mb-10 '>
                  <img src='pic1.jpg' className='md:w-full max-w-96 rounded-3xl'></img>
              </div>
              {/* About */}
              <div className=''>
                  <p className='md:text-2xl text-xl font-longContent text-gray-500 mb-10'>A Passionate and detailed oriented junior Java full stack developer.With a
                    strong foundation in Java programming.I am dedicated to creating efficient
                      and scalable solutions that seamlessly integrate front-end and back-end 
                      technologies.I have hands-on experience in building responsive and
                      user-friendly interfaces uisng HTML ,CSS,Tailwind CSS , and Javascript
                        with Reactjs coupled with a solid understanding of server-side development using Java(j2SE+j2EE)
                  </p>
                  <div className='flex bg-purple-400 rounded-2xl w-72  mt-20 transition  ease-in-out delay-100 lg:hover:-translate-y-1 lg:hover:scale-110 duration-200 hover:bg-purple-500'>
                    <a href='Resume.pdf' download className='text-2xl font-heading p-4 mt-1 text-white'>Download Resume. </a>
                    <RiFileDownloadFill className='text-4xl  mt-4 text-purple-800'></RiFileDownloadFill> 
                  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About