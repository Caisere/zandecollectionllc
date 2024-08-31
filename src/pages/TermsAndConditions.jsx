import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className='text-white flex justify-center items-center mt-6 md:mt-20'>
      <div className=' w-[80%] lg:w-[68%] text-justify'>
            <div>
                <h1 className='uppercase text-xl text-center md:text-2xl mb-8'>Terms and Conditions</h1>
            </div>
          
          <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                    <p> In the following Terms and Conditions, the terms 'we', 'us' and 'our' refer to Zande Collection LLC. By accessing our website, you 
                        confirm that you have understood our Privacy Notice and our Terms and Conditions, and agree to be bound by all of them. If you 
                        do not agree with any part of our Privacy Notice or our Terms and Conditions, you should not use our website nor our services.
                    </p>

                    <span>
                      The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                    </span>
                </div>
          </div>

            <div className='flex flex-col justify-center items-start '>
                  <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-[#FFFFFF]'>Disclaimer</h1>
                    </div>
                      <p > We use all reasonable efforts to ensure that the information published on this website is accurate, however we make no 
                        representations or warranties as to the accuracy of the information and materials appearing on our website or any other 
                        website which we link to. You acknowledge that such information and materials may contain inaccuracies or errors and we 
                        expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law. 
                      </p>
                  </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                  <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-[#FFFFFF]'>Copyright Notice</h1>
                    </div>
                      <p> The entire contents of this website are owned by or licensed to us and are subject to copyright with all rights 
                        reserved. This material includes, but is not limited to, the content, design, layout, look, appearance and graphics.
                      </p>

                      <span>
                        You may download or print individual sections of information on the website for personal use only, and provided 
                        that these properly acknowledge us as the source of the material, and display our website, copyright and other 
                        proprietary notices. You may not reproduce, modify, transmit or use any information whatsoever from this website 
                        for other purposes (including commercial purposes) without obtaining our prior consent in writing.
                      </span>
                  </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                  <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                    <div>
                        <h1 className='text-[#FFFFFF]'>Law</h1>
                    </div>
                      <p> Your use of this website and any dispute arising out of such use of the website is subject to the laws of United State of America.</p>
                  </div>
            </div>

            <div className='flex flex-col justify-center items-start '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                <div>
                    <h1 className='text-[#FFFFFF]'>Regulatory</h1>
                </div>
                    <p>Zande is a trading name of Zande Collection LLC whose company registration number is 8973414 and registered office is 56 W Kyla Marie Dr, Newark, DE 19702, USA.</p>
                    <span>You may contact us by <a className='underline italic' href="">clicking here</a> if you have any questions or comments about our Terms and Conditions.</span>
                </div>
            </div>

            <div className='flex flex-col justify-center items-start mb-28 '>
                <div className='text-[14px] text-[#a3a3a3] leading-8 flex flex-col gap-4'>
                <div>
                    <h1 className='text-[#FFFFFF]'>General</h1>
                </div>
                    <p>We do not hold client money.</p>
                    <span className='underline italic'><a href="">clicking here to see our Privacy Notice</a> </span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default TermsAndConditions