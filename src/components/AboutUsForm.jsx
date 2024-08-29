import React from 'react'
import Chair from '../Assets/Images/aboutmechair.jpg';
import FormButton from '../components/FormButton';

const AboutUsForm = () => {
  return (
    <div className=''>
      <div className='flex justify-center items-center pt-10'>
        <div className='flex flex-col gap-8 justify-center items-center w-[500px] p-6 border border-brand-primary-color'>
          <div className=''>
            <h1 className='text-black text-4xl tracking-widest'> contact us</h1>
          </div>

          <div className='relative w-full gap-2 px-12 text-brand-primary-color'>
            <div className='w-full space-y-4'>
              <input className=' outline-transparent p-2 rounded-sm w-full' type="text" placeholder='Name *' />
              <input className='outline-transparent p-2 rounded-sm w-full' type="email" placeholder='Email *' />
              <input className='outline-transparent p-2 rounded-sm w-full' type="text" placeholder='Subject' />
              <textarea className='outline-transparent p-3 rounded-sm w-full' name="Message" id="" cols="20" rows="5" placeholder='Message'></textarea>

              <div className='w-full flex justify-center relative bottom-8'>
                <FormButton />
              </div>
            </div>
            
          </div>

          <div>
              <div className='mt-3 flex gap-2 text-xl text-brand-primary-color cursor-pointer'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>

            <div>
              <div className='flex flex-col gap-0 justify-center items-center text-[14px] text-white'>
                <span>+1-505-000-8564</span>
                <span>info@zandecollectionllc.co.uk</span>
                <span className='text-brand-primary-color'>Zande, Unit 133, 30 Red Lion Street, Richmond, California, USA.</span>
              </div>
            </div>
          <div>
          </div>
        </div>
      </div>
     
    </div>

  )
}

export default AboutUsForm