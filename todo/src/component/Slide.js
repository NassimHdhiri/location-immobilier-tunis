import React, { useRef, useState } from 'react';
import BigSingleHouse from './BigSingleHouse'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../style/Slide.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={4}
      >
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
        <SwiperSlide>
          <BigSingleHouse className="BigSingleHouse"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
