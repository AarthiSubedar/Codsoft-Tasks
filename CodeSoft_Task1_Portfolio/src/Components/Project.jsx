import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Project = () => {
  return (
    <section id='projects' className=' pt-24 min-h-screen'>
        <div>
            <p className='text-5xl font-textContent font-semibold text-gray-700 text-center'>Projects</p>
            <p className='text-xl text-gray-500 font-longContent text-center mt-2'>My Recent Projects</p>
        </div>
        <div className='mt-10 lg:mt-20 flex flex-col items-center gap-10 '>
            <div className='flex flex-col border border-purple-100 shadow-lg max-w-96 p-3 rounded-3xl  '>
                <img src='Bank1.jpg' className='md:w-full max-w-96 transition hover:scale-105 duration-200 '></img>
                <div className='flex gap-2 mt-10 ml-6 '>
                    <p className='text-xl text-center font-longContent text-gray-500 font-semibold'>BANK MANAGEMENT SYSTEM</p>
                    <a href='https://github.com/AarthiSubedar/Banking-Management-System' >
                      <FaArrowRight className='text-xl mt-1 mb-10 text-purple-500 transition hover:translate-x-2 cursor-pointer duration-200'></FaArrowRight>
                    </a>
                </div>
            </div>
            <div className='flex flex-col border border-purple-100 shadow-lg max-w-96 p-3 rounded-3xl '>
                <img src='Product.jpg' className='md:w-full  max-w-96  transition hover:scale-105 duration-200 cursor-pointer'></img>
                <div className='flex gap-2 mt-10 '>
                    <p className='text-xl text-center font-longContent text-gray-500 font-semibold'>PRODUCT MANAGEMENT SYSTEM</p>
                    <a href='https://github.com/AarthiSubedar/Product_Management_System'>
                      <FaArrowRight className=' mb-10 text-xl mt-1 text-purple-500 transition hover:translate-x-1 duration-200'></FaArrowRight>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project