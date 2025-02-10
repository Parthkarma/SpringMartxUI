import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay  ,Pagination ,  EffectFade , Navigation} from 'swiper/modules' ; 


import { bannerListts  } from '../../utils';



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
            slidesPerView = {1} > 
            {bannerListts.map((item , i) =>(
                         <SwiperSlide key={item.id}>
                            <div className= {`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}>
                                     <div className='flex items-center justify-center'>
                                            <div className='text-center'>
                                                      <h3 className='text-3xl text-white font-bolt'>
                                                        {item.title}
                                                      </h3>
                                                      <h1 className='text-5xl text-white font-bold mt-2'>
                                                        {item.subtitle}
                                                      </h1>
                                                      <p>
                                                        
                                                      </p>
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