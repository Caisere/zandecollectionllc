import React from 'react'
import CityNight from '../Assets/Images/citynight.jpg'
import HomeIco from '../Assets/Images/homeico.jpg'
import HomePrs from '../Assets/Images/homeprs.jpg'
import MyButton from '../components/MyButton'
import HomePageSlider from '../components/HomePageSlider'




const HomePage = () => {
  return (
    <div className='font-futura w-screen bg-black overflow-hidden'>
        <div className='bg-black w-full'>

            <div className='relative'>
                <img src={CityNight} alt="citykekeke"  className='h-[578px] object-cover w-full'/>
                <div className='absolute bottom-10 flex w-full flex-col justify-center items-center space-y-3'>
                    <h3 className='text-white text-center text-xl tracking-wider'>Providing residential property services with a more personal touch</h3>
                    <MyButton/>
                </div>
            </div>

            <div className='bg-black relative h-[750px] py-24'>
                <div className='absolute w-full items-center flex h-full justify-center'>
                    <div className='h-full'>
                       <div className='bg-brand-primary-color h-[450px]  w-[350px] flex items-start justify-center'>
                            <div className='uppercase tracking-widest text-white pb-2 border-b border-white pt-5 '>What people say</div>
                        </div>
                    </div>
                    
                </div>
                <div className=' z-50 top-0 text-white h-full'>
                    <HomePageSlider/> 
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='flex items-center justify-between w-full mt-8 md:w-[600px]'>
                    <img src={HomePrs} alt="homeprs" className='h-[47px] w-[173px] object-cover' />
                    <img src={HomeIco} alt="homeico" className='h-[68px] w-[125px] object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage