import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import '../../scss/components/_carousel.scss'
import imgIpa from  '../../assets/img/products/ipa.png'
import imgDIpa from  '../../assets/img/products/dobleIpa.png'
import imgAmBlonde from  '../../assets/img/products/amBlonde.png'
import imgGolden from  '../../assets/img/products/golden.png'
import imgHoney from  '../../assets/img/products/honey.png'
import imgApa from  '../../assets/img/products/apa.png'
import imgirishRed from  '../../assets/img/products/irishRed.png'
import imgTntIpa from  '../../assets/img/products/tntIpa.png'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import  { useRef, useState } from "react";
// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



import { Navigation } from "swiper";


const Carousel = () => {
  return (
    <>
    <Swiper
      // install Swiper modules
      modules={[Navigation ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
   
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    > 

        <SwiperSlide className='mySwiper'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgIpa} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>IPA</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='mySwiper'>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgDIpa} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>DOBLE IPA</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgAmBlonde} alt='American blonde'/> 
                </div>
                <div className='divPSlider'>
                    <h3>AMERICAN BLONDE</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgTntIpa} alt='IpaTnt'/> 
                </div>
                <div className='divPSlider'>
                    <h3>IPA TNT</h3> 
                </div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgGolden} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>GOLDEN</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgirishRed} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>IRISH RED</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgHoney} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>HONEY</h3> 
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='divCardSlider'>
                <div className='divImgCer'>
                    <img src={imgApa} alt='Ipa'/> 
                </div>
                <div className='divPSlider'>
                    <h3>APA</h3> 
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default Carousel