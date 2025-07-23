import React, {useRef, useState} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Pagination, Autoplay} from 'swiper/modules';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import Cars from '../../Cars.json';
import carType1 from '../../assets/car-1.jpg';
import carType2 from '../../assets/car-2.jpg';
import carType3 from '../../assets/car-3.jpg';
import carType4 from '../../assets/car-4.jpg';
import carType5 from '../../assets/car-5.jpg';
import carType6 from '../../assets/car-6.jpg';

import teams1 from '../../assets/test-1.jpg';
import teams2 from '../../assets/test-2.jpg';
import teams3 from '../../assets/test-3.jpg';
import teams4 from '../../assets/test-4.jpg';



import about from '../../assets/about.jpg';


function About() {

  const [pickUpDate, setPickUpDate] = useState(null);
  const datePickerRef = useRef(null);

  const openCalendar = () =>{
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  const [returnDate, setReturnDate] = useState(null);
  const returnPickerRef =useRef(null);

  const openreturnedCalendar = () => {
    if (returnPickerRef.current) {
        returnPickerRef.current.setFocus();
    }
  };
    
  return (
    <>
    {/* Page Section */}
    <div className="banner-section about-banner-section flex justify-center items-center ">
      <div className="banner-section-content text-center z-10">
        <h6 className="uppercase">- Rentax</h6>
        <h1 className="text-5xl font-semibold font-bricolage text-[#f5b754]"><span className="text-white font-bricolage">About </span>Us</h1>
      </div>
    </div>
    {/* About */}
    <div className="about text-white lg:px-[10%] px-[8%] py-[150px]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className='uppercase text-sm tracking-widest text-[#f5b754] mb-2'> CarRental</p>
          <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
            We Are More Than <br />
            <span className='text-[#f5b754] font-bricolage'> A Car Rental Company</span>
          </h2>
          <p className='text-gray-400 leading-relaxed my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam iusto asperiores dolor facere nulla nesciunt facilis, mollitia amet eligendi ipsa, doloribus soluta explicabo, molestiae inventore! Assumenda, recusandae officia. Enim!
          </p>

          <div className="space-y-4 mb-10">

            <div className="flex items-center gap-4">
              <div className="w-20 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#f5b754]">
                <i class="ri-check-double-line"></i>
              </div>
              <span className='text-white'> Sports and Luxury Cars</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#f5b754]">
                <i class="ri-check-double-line"></i>
              </div>
              <span className='text-white'> Economy Cars </span>
            </div>

          </div>

          <button className='bg-[#f5b754] text-black px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-white transition'>
            Read More <i class='ri-arrow-right-line'></i>
          </button>
        </div>

        <div className="relative">
          <img src={about} alt="" className='rounded-3xl'/>

          <div className="curv">
            <div className="about-item-curv section-item-curv">
              <i class='ri-play-line'></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Banner */}
    <div className="banner lg:px-[12%] px-[8%] py-[150px]">
      <div className="banner-content text-center">
        <p className='uppercase text-sm tracking-widest text-[#f5b754] mb-2'> Rent Now</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Book Auto Rental
        </h2>

          {/* Book Option */}
        <div className="book-option bg-[#1f1f1f] text-white w-[90%]  mx-w-[1200px] mx-auto mt-[50px] rounded-3xl px-6 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-cols-5 gap-4  
          shadow-lg z-50 absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Cars Type */}
          <div className='relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600'>
            <button className='flex items-center gap-2 w-full justify-between text-gray-400'>
              Choose your car type <i  className="ri-arrow-down-s-line text-yellow-500"></i>
            </button>
            <div className='absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-yellow-500 rounded-sm shadow-md
                opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-outz-500'>
              <ul className='divide-y divide-gray-700'>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Choose Car Type</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Sports Car</li>
                {/*<li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>SVUs</li>*/}                
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Convertible</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Luxury Cars</li>
                {/*<li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Sedan</li>*/}                
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Small Cars</li>
              </ul>
            </div>
          </div>

          {/* Pick Location */}
          <div className='relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600'>
            <button className='flex items-center gap-2 w-full justify-between text-gray-400'>
              Drop Up location <i  className="ri-arrow-down-s-line text-yellow-500"></i>
            </button>
            <div className='absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-yellow-500 rounded-sm shadow-md
              opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-outz-500'>
              <ul className='divide-y divide-gray-700'>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Abu Dhabi</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Alain</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Dubai</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Sharjah</li>
              </ul>
            </div>
          </div>

          {/* Pick Date */}
          <div className="relative w-full lg:w-auto px-4 py-3 flex items-center border-r border-gray-600 cursor-painter"
            onClick= {openCalendar} >

            <DatePicker
              selected = {pickUpDate}
              onChange={(date) => setPickUpDate(date)}
              dateFormat= "dd MMM yyyy"
              placeholderText= 'Pick up Date'
              ref={datePickerRef}
              className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${!pickUpDate ? 'text-gray-400' : ''}`}
              calendarClassName='dark-datepicker'
              popperPlacement = 'bottom-start'
            />

              <i className='ri-calendar-line text-yellow-500 pointer-events-none'></i>
          </div>  

          {/* Drop Location */}
          <div className='relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600'>
            <button className='flex items-center gap-2 w-full justify-between text-gray-400'>
              Drop Off location 
              <i  className="ri-arrow-down-s-line text-yellow-500"></i>
            </button>
            <div className='absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-yellow-500 rounded-sm shadow-md
              opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-outz-500'>
              <ul className='divide-y divide-gray-700'>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Drop Off Location</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Abu Dhabi</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Alain</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Dubai</li>
                <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Sharjah</li>
              </ul>
            </div>
          </div>

          {/* Return Date */}
          <div className="relative w-full lg:w-auto px-4 py-3 flex items-center border-r cursor-painter"
            onClick= {openreturnedCalendar} >

            <DatePicker
              selected = {pickUpDate}
              onChange={(date) => setReturnUpDate(date)}
              dateFormat= "dd MMM yyyy"
              placeholderText= 'Return Date'
              ref={returnPickerRef}
              className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${!returnDate ? 'text-gray-400' : ''}`}
              calendarClassName='dark-datepicker'
              popperPlacement = 'bottom-start'
            />

            <i className='ri-calendar-line text-yellow-500 pointer-events-none'></i>
          </div>  
        </div>
      </div>
    </div>

    {/* Car Type */}
    <div className='car-type lg:px-[12%] px-[8%] py-[150px] section-effect'>
      <div className='text-center'>
        <p className='uppercase text-sm tracking-widest text-[#f5b754] mb-2'> Select Your Car </p>
        <h2 className='text-4xl md:text-5xl text-white font-bold mb-3 font-bricolage'>
          Luxury <span className='text-[#f5b754] font-bricolage'>Car Fleet</span>
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop = {true}
        spaceBetween={20}
        autoplay = { {
            delay : 3000,
        }}
        pagination={true}
        breakpoints={{
          768: {
            slidesPerView: 2, 
          },
          1024:{
            slidesPerView: 3, 
          }
        }} 
        className='mt-[70px]'
        >

          <SwiperSlide>
            <div className="car-type relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={carType1} alt="" className='w-full h-27 object-cover z-[5]' />
              <h3 className='absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]'>SUVs</h3>
              <div className="absolute z-[5]">
                 <div className="curv">
                    <div className="section-item-curv car-type-curv">
                       <i className="bi bi-arrow-right"></i>
                    </div> 
                 </div> 
              </div>              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={carType2} alt="" className='w-full h-27 object-cover z-[5]' />
              <h3 className='absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]'>Convertible</h3>
              <div className="absolute z-[5]">
                 <div className="curv">
                    <div className="section-item-curv car-type-curv">
                       <i className="bi bi-arrow-right"></i>
                    </div> 
                 </div> 
              </div>              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={carType3} alt="" className='w-full h-27 object-cover z-[5]' />
              <h3 className='absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]'>Sports Car</h3>
              <div className="absolute z-[5]">
                 <div className="curv">
                    <div className="section-item-curv car-type-curv">
                       <i className="bi bi-arrow-right"></i>
                    </div> 
                 </div> 
              </div>              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={carType4} alt="" className='w-full h-27 object-cover z-[5]' />
              <h3 className='absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]'>Luxury Cars</h3>
              <div className="absolute z-[5]">
                 <div className="curv">
                    <div className="section-item-curv car-type-curv">
                       <i className="bi bi-arrow-right"></i>
                    </div> 
                 </div> 
              </div>              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={carType5} alt="" className='w-full h-27 object-cover z-[5]' />
              <h3 className='absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]'>Sedon</h3>
              <div className="absolute z-[5]">
                 <div className="curv">
                    <div className="section-item-curv car-type-curv">
                       <i className="bi bi-arrow-right"></i>
                    </div> 
                 </div> 
              </div>              
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="car-type relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
              <img src={carType6} alt="" className='w-full h-27 object-cover z-[5]' />
              <h3 className='absolute top-4 left-4 text-white text-2xl font-semibold drop-shadow-md z-[5]'>Small Cars</h3>
              <div className="absolute z-[5]">
                 <div className="curv">
                    <div className="section-item-curv car-type-curv">
                       <i className="bi bi-arrow-right"></i>
                    </div> 
                 </div> 
              </div>              
            </div>
          </SwiperSlide>
      </Swiper>
    </div>


    {/* Service */}
    <div className="our-service lg:px-[12%] px-[8%] py-[2%] section-effect ">
      <div className="our-severice-content mb-20 text-center text-white">
        <p className='uppercase text-sm tracking-[5px] text-[#f5b754] mb-2'>What We Do</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Other Services
        </h2>
      </div>

      <div className='our-service-wrapper'>
          <div className="grid w-full gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className='font-semibold text-2xl mb-3 fonnt-bricolage'> Daily Car Rental</h5>
              <p className='text-[#999] text-md'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a quasi delectus, necessitatibus nobis architecto.
              </p>
              <div className="curv">
                <div className="service-item-curv section-item-curv">
                  1.
                </div>
              </div>
            </div>

            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className='font-semibold text-2xl mb-3 fonnt-bricolage'>Annual Car Rental</h5>
              <p className='text-[#999] text-md'>
                Ex a quasi delectus, necessitatibus nobis, eos corporis blanditiis molestias minus nostrum, totam voluptates officiis possimus nihil.
              </p>
              <div className="curv">
                <div className="service-item-curv section-item-curv">
                  2.
                </div>
              </div>
            </div>

            <div className="service-item relative text-white rounded-[30px] bg-[#222222] w-full">
              <h5 className='font-semibold text-2xl mb-3 fonnt-bricolage'>Annual Car Rental</h5>
              <p className='text-[#999] text-md'>
                Ex a quasi delectus, necessitatibus nobis architecto, eos corporis blanditiis molestias minus nostrum, possimus nihil.
              </p>
              <div className="curv">
                <div className="service-item-curv section-item-curv">
                  3.
                </div>
              </div>
            </div>


          </div>
      </div>
    </div>

    {/* Yellow vertical divider */}
    <div className="flex justify-center my-12">
      <div className="h-14 w-1 bg-[#f5b754] rounded-full"></div>
    </div>

    {/* Teams */}
    <div className="lg:px-[12%] px-[8%] py-[60px] section-effect ">
      <div className="text-center">
        <p className="uppercase text-sm tracking-[5px] text-[#f5b754] mb-2">- Certified Team</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage">
          <span className="text-[#f5b754] font-bricolage">Our </span>  <span className='text-white font-bricolage'>Experts Team </span>
        </h2>
      </div>

      <Swiper
        modules={{Autoplay, Pagination}}
        loop = {true}
        spaceBetween={40}
        autoplay={{
          delay: 3000,
        }}
        pagination={true}
        breakpoints={{
          1400:{slidesPerView: 3},
          1199:{slidesPerView: 2},
          767:{slidesPerView: 1.5},
          0:{slidesPerView: 1},
        }}
        className='mt-[40px]'
        >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img src={teams1} alt="" className='w-full h-72 object-cover z-[5] rounded-2xl' />
            <div className="absolute z-[5]">
              <div className="curv">
                <div className="section-item-curv our-team-curv flex items-center justify-center w-10 h-10 rounded-full bg-[#f5b754]">
                  <i className="fa-solid fa-info text-black"></i>
                </div>
              </div>
            </div>
            <div className="team-info">
              <h4 className="text-xl lg:text-2xl mb-1 font-semibold font-bricolage">Margaret Nancy</h4>
              <h5 className='text-[#f2f2f2] xl:text-lg text-sm'>Sales Department</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>  


    </div>
    </>    

    

  )
}

export default About