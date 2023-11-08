// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import '../style/SlideFeedBack.css';

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SingleFeedBack from './SingleFeedBack';

// export default function Testimonials() {
//   const progressCircle = useRef(null);
//   const progressContent = useRef(null);
//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//             <SingleFeedBack/>
//         </SwiperSlide>
//         <SwiperSlide>
//             <SingleFeedBack/>
//         </SwiperSlide>
//         <SwiperSlide>
//             <SingleFeedBack/>
//         </SwiperSlide>
//         <SwiperSlide>
//             <SingleFeedBack/>
//         </SwiperSlide>
//         <SwiperSlide>
//             <SingleFeedBack/>
//         </SwiperSlide>
//         <SwiperSlide>
//             <SingleFeedBack/>
//         </SwiperSlide>
//         <div className="autoplay-progress" slot="container-end">
//           <svg viewBox="0 0 48 48" ref={progressCircle}>
//             <circle cx="24" cy="24" r="20"></circle>
//           </svg>
//           <span ref={progressContent}></span>
//         </div>
//       </Swiper>
//     </>
//   );
// }

import React from 'react'
import Pone from '../images/man.png'
import Ptwo from '../images/woman.png'
import Ptree from '../images/man (1).png'

function Testimonials() {
  return (
    <div className='  pb-12   shadow-lg'>
      <div >
        <h2 className='text-center pt-7 pb-24 h-12 text-3xl font-semibold'>What's our customer say about us !</h2>
      </div>
      <div className='grid grid-cols-3'>
          <SingleFeedBack image={Pone}/>
          <SingleFeedBack image={Ptwo}/>
          <SingleFeedBack image={Ptree}/>
      </div>
      
    </div>
  )
}

export default Testimonials