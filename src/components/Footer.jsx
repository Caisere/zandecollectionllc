import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full h-32 bg-black py-8 text-white font-futura'>
        <div className='flex justify-between container mx-auto w-full px-8 md:px-0 lg:w-[980px] items-center'>
            <div className='text-sm'>
                <span className='tracking-widest'>© 2023 ZANDE COLLECTION LLC. All rights reserved. </span>
                <span className='text-brand-primary-color tracking-widest'>
                    <Link to="terms">Terms and Conditions</Link> | <Link to="copy-of-terms-and-conditions">Privacy Notice</Link>
                </span>
            </div>
        </div>
    </footer>
  )
}


export default Footer