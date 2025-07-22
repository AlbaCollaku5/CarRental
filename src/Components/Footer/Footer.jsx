import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import brand1 from '../../assets/brand-1.png'
import brand2 from '../../assets/brand-2.png'
import brand3 from '../../assets/brand-3.png'
import brand4 from '../../assets/brand-4.png'
import brand5 from '../../assets/brand-5.png'
import brand6 from '../../assets/brand-6.png'
import brand7 from '../../assets/brand-7.png'


function Footer(){
    return(
        <>
        <div className="footer-banner text-white lg:px-[12%] px-[8%] py-[150px]">
            <div className="footer-banner-content text-white relative">
                <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">
                    Rent Your Car
                </p>
                <h2 className="text-4xl md:text-4xl fnt-bold mb-3 text-white font-bricolage">Interested In Renting? </h2>
                <p className="py-3"> Don't hesitate and send us a message</p>
                <div className="footer-banner-button mt-5 text-black flex flex-col sm:flex-row gap-3">
                    <button className="btn btn-custom bg-[#f5b754] py-4 px-8 text-lg font-bricolage rounded-full flex items-center hover:translate-y-[-10px] hover:bg-white transition duration-300">
                        <i className="fa-brands fa-whatsapp pr-2 text-2xl"></i>
                        WhatsApp
                    </button>

                    <button className="btn btn-custom bg-[#f5b754] py-4 px-8 text-lg font-bricolage rounded-full flex items-center hover:translate-y-[-10px] hover:bg-white transition duration-300 ">
                        Rent Now
                        <i className="ri-arrow-right-up-line text-2xl pl-2 "></i>
                    </button>
                </div>
            </div>
        </div>


        <div className="footer-brands bg-[#222222] w-full lg:px-[12px] px-[8%] py-[50px]">
            <Swiper
              spaceBetween={0}
              slidesPerView={6}
              loop = {true}
              autoplay = {true}
              className = 'footer-brands-swiper'
              breakpoints={{
                1399: {
                  slidesPerView: 6
                },

                767:{
                  slidesPerView: 5
                },
                
                575: {
                    slidesPerView: 4
                },
                
                0:{
                    slidesPerView: 3
                }
              }} 
            >
                <SwiperSlide>
                    <div className="brand-image h-[100px] w-full group overflow-hidden transition">
                        <img src={brand1} alt="brand-image" className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition duration-300" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="brand-image h-[100px] w-full group overflow-hidden transition">
                        <img src={brand2} alt="brand-image" className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition duration-300" />
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="brand-image h-[100px] w-full group overflow-hidden transition">
                        <img src={brand3} alt="brand-image" className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition duration-300" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="brand-image h-[100px] w-full group overflow-hidden transition">
                        <img src={brand4} alt="brand-image" className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition duration-300" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="brand-image h-[100px] w-full group overflow-hidden transition">
                        <img src={brand5} alt="brand-image" className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition duration-300" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="brand-image h-[100px] w-full group overflow-hidden transition">
                        <img src={brand6} alt="brand-image" className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition duration-300" />
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="brand-image h-[100px] w-full group overflow-hidden transition">
                        <img src={brand7} alt="brand-image" className="w-full h-full object-cover filter grayscale-0 group-hover:grayscale transition duration-300" />
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
        </>
    )
}

export default Footer