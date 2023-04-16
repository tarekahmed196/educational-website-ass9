import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
    SwiperCore.use([Autoplay]);
  return (
    <div className="max-w-7xl mx-auto truncate">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay= {{
            delay: 2000
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/vH5R9s4/1d949589-afdd-4a1e-b77f-c53fdaf8af13.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Tvv0j5x/nextjs-log.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/QdDjLzD/5968672.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/HDCXwNc/download.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/n79PGyL/11160918-b0ab-4a09-9361-a1121db384fc-mq.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/9V3t1SJ/kisscc0-computer-icons-logo-brand-javascript-angle-js-5b741783856f77-0690615715343348515466.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/HDdV2Tm/mongodb-logo.png" />
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  );
}
