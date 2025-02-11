import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/navigation' ; 
import 'swiper/css/pagination' ; 
import 'swiper/css/scrollbar' ; 
import 'swiper/css/effect-fade'; 
import 'swiper/css/autoplay' ; 

import 'swiper/css';
import { Autoplay  ,Pagination ,  EffectFade , Navigation} from 'swiper/modules' ; 


import { bannerListts  } from '../../utils';
import { Link } from 'react-router-dom';



// const colors = ["bg-banner-color1" ,"bg-banner-color2" , "bg-banner-color3"];
const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];



console.log("Swiper is rendering");
const HeroBanner =() => {
    return (
        
          <div className="py-2 round-md">
              <Swiper grabCursor = {true}
            autoplay = {{
                delay :4000, 
                disableOnInteraction : false , 
            }}
            navigation 
            modules = {[ Pagination , EffectFade , Navigation , Autoplay ]}
            pagination  = {{clickable : true }}
            scrollbar = {{ draggable : true }}
            slidesPerView = {2} > 
            {bannerListts.map((item , i) =>(
                         <SwiperSlide key={item.id}>
                            <div className= {`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}>
                                     <div className='flex items-center justify-center'>
                                      <div className="hidden lg:flex justify-center w-1/2 p-8">
                                            <div className='text-center'>
                                                      <h3 className='text-3xl text-white font-bolt'>
                                                        {item.title}
                                                      </h3>
                                                      <h3 className='text-5xl text-white font-bolt mt-2'>
                                                        {item.subtitle}
                                                      </h3>

                                                      <p className='text-white font-bold mt-4'>
                                                        {item.description}
                                                      </p>
                                                      <Link className='mt-6 inline-block bg-blank text-white py-2 px-4 rounded hover:bg-gray-800 ' to="/products">
                                                      Shop
                                                      </Link>
                                            </div>
                                     </div>
                                     <div className='w-full flex justify-center lg:w-1/2 p-4'>
                                      {/* <img src={item?.image}>  */}
                                      <img src={item?.image} alt="banner" />
              </div>
                                     </div>
                            </div>
                         </SwiperSlide>
            ))}
              </Swiper>
          </div>


    );
}

export default HeroBanner; 