import React from 'react';
import House from '../Assets/Images/aboutmehouse.jpg';
import WhiteHouse from '../Assets/Images/aboutmewhitehouse.jpg';
import Chair from '../Assets/Images/aboutmechair.jpg';
import BlurImage from '../Assets/Images/aboutmeblurimage.jpg';
import AboutIco from '../Assets/Images/aboutmeico.jpg';
import AboutPrs from '../Assets/Images/aboutmeprs.jpg';
import AboutUsForm from '../components/AboutUsForm';
 


const AboutUs = () => {
  return (
    <div className='mt-9 font-futura mb-20'>
        <div className='h-full w-full'>
            <div className='flex'>
                <div className='hidden sm:block'>
                    <img src={House} alt="House" className='h-full' />
                </div>

                <div className='bg-brand-primary-color flex justify-center items-center'> 
                    <div className='flex justify-center items-center flex-col py-10 px-4 sm:px-12 w-full lg:w-1/2 '>
                        <div className='font-bold font-futura tracking-[0.5em] text-3xl sm:text-5xl'>
                            <span className='text-white  '>
                                about
                            </span>
                            <span className='text-gray-900'>
                                us
                            </span>
                        </div>
                        <div>
                            <p className='text-base tracking-[0.2em] mt-12 lg:mt-20 text-center font-futura'>
                            Zande Collections is a residential company that specialize in helping everyone find a home.<br />
                            Rather you have good credit or bad credit, we as a team are willing to give you a chance. 
                            </p>
                        </div>
                    </div>
                </div>

                <div  className='hidden sm:block'>
                    <img src={WhiteHouse} alt="House" className='h-full' />
                </div>
            </div>
        </div>

        <div className='mt-20 grid sm:grid-cols-2 lg:grid-cols-4 items-center lg:h-[400px] '>
            {/* <div className='flex items-center'> */}
                <div className='h-full object-cover flex-1'>
                    <img src={Chair} alt=""  className='h-full w-full object-cover'/>
                </div>

                <div className='bg-white flex flex-col text-center justify-center flex-1 h-full'>
                    <div className='px-4 flex flex-col my-8'>
                        <h1 className='text-brand-primary-color text-3xl tracking-[0.2em]'>Management</h1>
                        <p className='text-[#636363] mt-10 text-[14px] leading-7'>Every property under our management has a dedicated property manager assigned to it, thereby enabling us to 
                        provide a more personal service.They will have usually managed the property for a number of years, which means most 
                        enquiries are answered quickly and accurately. </p>
                    </div>
                </div>
            {/* </div> */}
            {/* <div className='flex items-center'> */}
                 <div className='h-full object-cover flex-1'>
                    <img src={Chair} alt="picture"  className='h-full w-full object-cover'/>
                </div>

                <div className='bg-white flex flex-col text-center justify-center  h-full' >
                    <div className='px-4 flex flex-col my-8'>
                        <h1 className='text-brand-primary-color text-3xl tracking-[0.2em]'>Acquisitions</h1>
                        <p className='text-[#636363] mt-10 text-[14px] leading-7'>Your search agent will use their experience to ask you incisive
                            questions, then scour the market to find a property matching your requirements, either as a home or as an investment. </p>
                    </div>
                </div>
            {/* </div> */}
            

           
        </div>

        <div className='mt-20 py-20 bg-about-us-bg h-full w-full'>
            {/* <div className='relative'>
                <img src={BlurImage} alt="" />
            </div> */}

            <div className='  mt-3 h-full w-full'>
                <AboutUsForm />
            </div>
        </div>
    </div>
  )
}

export default AboutUs