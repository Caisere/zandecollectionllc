import React from 'react'
import ClientTestimonials from '../components/ClientsTestimonial'

const Testimonials = () => {
  return (
    <div className='flex w-full justify-center items-center my-12 md:my-40 font-futura'>
      <div className='flex flex-col w-full gap-16 justify-center items-center'>
          <div className='text-[#636363] w-full uppercase text-center text-2xl md:text-4xl tracking-[0.2em]'>
            Testimonials  
          </div>

          <div className='w-full flex justify-center'>
            <ClientTestimonials />
          </div>
      </div>
    </div>
  )
}

export default Testimonials