import React, { useRef } from "react";
import '../../Assets/css/splash.css';
import SplashScreen1 from '../../Assets/images/Splashscreen/screen_one_bg.png';
import SplashScreen2 from '../../Assets/images/Splashscreen/screen_two_bg.png';
import SplashScreen3 from '../../Assets/images/Splashscreen/screen_three_bg.png';
import FRSplash from '../../components/splashscreen/FRSplash';
import { PiChefHatDuotone } from "react-icons/pi";
import { COLORS } from "../../Assets/constants/Color";
import { GiCampCookingPot } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function SplashScreen(){
  const swiperRef = useRef(null);
  const Skipfun = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current?.swiper?.slideTo(2); 
    }
  };
    return(
        <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <FRSplash 
            skip={true}
            image={SplashScreen1}
            icon={<PiChefHatDuotone size={55} color={COLORS.primary} />}
            heading={'Make recipes your own'}
            content={'With Mallika recipe editor, you can easily edit recipes, save adjustments to ingredients, and add additional steps or tips to your preparation.'}
            signinbutton={false}
            skipfun={Skipfun}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FRSplash 
            skip={true}
            image={SplashScreen2}
            icon={<GiCampCookingPot size={55} color={COLORS.primary} />}
            heading={'All in one place'}
            content={'Storing your recipes in Mallika allows you to quickly search, find, and select what you want to cook.'}
            signinbutton={false}
            skipfun={Skipfun}
          />
        </SwiperSlide>
        <SwiperSlide>
          <FRSplash 
            skip={false}
            image={SplashScreen3}
            icon={<BiDish size={55} color={COLORS.primary} />}
            heading={'Cook from your favorite device'}
            content={'Mallika stores your recipes in the Cloud so you can access them on any device through our website or Android/iOS app.'}
            signinbutton={true}
          />
        </SwiperSlide>
      </Swiper>
    )
}