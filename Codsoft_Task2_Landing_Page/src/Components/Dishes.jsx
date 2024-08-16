import React from 'react'
import { DISHES } from '../constants'

const Dishes = () => {
  return (
    <section className='container mx-auto py-16' id="dishes">
        <h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>Our Dishes</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 lg:grid-cols-5'>
            {
                DISHES.map((dish,index)=>(
                    <div key={index}>
                        <img src={dish.image} className='rounded-3xl p-2'></img>
                        <div className='p-4'>
                            <h3 className='mb-2 text-2xl font-bold tracking-tighter'>{dish.title}</h3>
                            <p className='text-xl'>{dish.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Dishes