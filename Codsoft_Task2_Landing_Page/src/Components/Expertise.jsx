import React from 'react'
import { CUSINES } from '../constants'
import { motion, stagger } from 'framer-motion'

const containerVarients ={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:1
        }
    }
}

const itemVariants ={
    hidden:{opacity:0 , y:20},
    show:{
        opacity:1,y:0,transition:{
           duration:0.8
        }
    }
}

const Expertise = () => {
  return (
    <section id='expertise'>
        <p className='text-center my-8 text-2xl lg:text-4xl tracking-tighter'>Our Expertise</p>
        <motion.div className='container mx-auto px-4'
        initial="hidden"
        whileInView="show"
        variants={containerVarients}
        >
            {
                CUSINES.map((cusine,index)=>(
                    <motion.div key={index} variants={itemVariants} className='flex items-center border-b-4 border-dotted border-neutral-700/40 py-2'>
                        <div className='flex-shrink-0 pr-8 text-2xl '>
                            {cusine.number}
                        </div>
                        <div className='w-1/3 flex-shrink-0'>
                            <img src={cusine.image} className='h-auto rounded-3xl'></img>
                        </div>
                        <div className='pl-8'>
                            <h3 className='text-2xl uppercase tracking-tighter text-rose-300'>{cusine.title}</h3>
                            <p className='mt-4 text-xl tracking-tighter'>{cusine.description}</p>
                        </div>
                    </motion.div>
                ))
            }
        </motion.div>
    </section>
  )
}

export default Expertise