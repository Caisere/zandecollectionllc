import React from 'react';
import Slider from "react-slick";

const datas = [
    {
        name: "—  Harry A",
        quote: "“Really friendly, professional group of guys, and the best I've rented with in United State of America.”"
    },
    {
        name: "—  David R",
        quote: "“They were great to work with...  would gladly rent from them again!”"
    },
    {
        name: "—  Cecelia T",
        quote: "“They are extremely reliable, friendly and most of all professionally, one couldn't ask more. I highly recommend them.”"
    },
    {
        name: "—  K Mehr",
        quote: "“They're a truly professional & trustworthy outfit. Certainly am very impressed all round with their performance and would most definitely recommend them.”"
    }
    
]



const HomePageSlider = () => {

    var settings = {
        className: "h-full",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        

    };

  return (
    <div className=' text-white h-full'>
        <Slider {...settings}>
            {
                datas.map((data, i) => {
                    return (
                        <div className='h-full' key={i}>
                            <div className='flex justify-center h-full items-center '>
                                <div  className='w-[500px] pt-32  flex-col justify-center items-start relative'>
                                    <span className='text-[26px] font-lighter text-center block'>
                                        {data.quote}
                                    </span>
                                    <span className='italic text-base tracking-widest text-center block mt-32 '>
                                        {data.name}
                                    </span>
                                </div>
                            </div>
                            
                        </div>

                    )
                })
            }
            
            
        </Slider>
    </div>
  )
}

export default HomePageSlider