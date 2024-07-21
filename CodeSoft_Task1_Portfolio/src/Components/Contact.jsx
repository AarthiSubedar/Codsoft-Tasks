import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <section id='contact' className=' pt-24'>
    <div className='p-3 '>
        <div className='mb-10'>
            <p className='text-5xl font-textContent font-semibold text-gray-700 text-center'>Contact</p>
            <p className='text-xl text-gray-500 font-longContent text-center mt-2'>Get in Touch</p>
        </div>
      <div className='lg:grid lg:grid-cols-2 gap-10 lg:mt-32'>
        <div className='flex flex-col gap-8 border rounded-3xl lg:h-36 shadow-md p-3  items-center  '>
            <div className='flex gap-5 mt-3'>
                <MdOutlineMailOutline className='text-3xl text-gray-700'></MdOutlineMailOutline>
                <p className='text-xl text-gray-700 font-longContent'>aarthisubedar20@gmail.com</p>
            </div>
            <div className='flex gap-5'>
              < MdCall className='text-3xl text-gray-700'></MdCall>
              <p className='text-xl text-gray-700 font-longContent'>(+91)-9393273000</p>
            </div>
        </div>
        <div className='lg:mt-0 mt-10'>
          <form>
              <div className='flex flex-col gap-5'>
                  <input type='text' placeholder='Name' className='p-5 w-full border rounded-xl placeholder:text-xl border-neutral-400 focus:outline-none'></input>
                  <input type='text' placeholder='Email' className='p-5 w-full border rounded-xl placeholder:text-xl border-neutral-400 focus:outline-none'></input>
                  <textarea placeholder='Message' className='p-5 w-full border rounded-xl placeholder:text-xl border-neutral-400 focus:outline-none'></textarea>
              </div>
              <div className='flex bg-purple-500 p-4 rounded-xl mt-5 w-32 justify-center items-center '>
                <button className='text-2xl font-textContent font-bold text-white '>Send</button>
                <LuSend className='text-3xl ml-1 text-white'></LuSend>
              </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact