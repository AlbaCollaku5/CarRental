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

import test1 from '../../assets/test-1.jpg';
import test2 from '../../assets/test-2.jpg';
import test3 from '../../assets/test-3.jpg';

import newscar1 from '../../assets/Banner-1.jpg';
import newscar2 from '../../assets/banner-2.jpg';
import newscar3 from '../../assets/banner-car.jpg';
import newscar4 from '../../assets/car-5.jpg';

import about from '../../assets/about.jpg';


function Index() {

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
    <div className='hero w-[100%] h-[100vh] overflow-hidden'>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop = {true}
        autoplay = { {
            delay : 2000,
        }}
        speed={1500}
        className='hero-swiper  w-full h-full'
        onSlideChange={(swiper) => {
          const slides = swiper.slides;
          slides.forEach((slide) => {
            slide.classList.remove('zoom-active');
          });
          slides[swiper.activeIndex].classList.add('zoom-active');
          }
        }
        >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero-slide hero-slide1 w-full h-full flex items-start pt-20 px-[12%]">
            <div className="hero-content text-white">
              <span className='front-bricolage text-1xl uppercase tracking-widest'>Premium</span>
              <h1 className='font-bricolage text-9xl hero-title my-2'>Rental Car</h1>
              <p className='my-1 text-xl font-bricolage hero-subtitle text-gray-300'>You can rent any of our luxury cars. </p>
              <p className='my-7 W-[60%] hero-pere text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae rem reiciendis eligendi ex quisquam nulla aperiam doloribus exercitationem accusamus iure asperiores dignissimos, totam voluptates tenetur. Labore voluptates quaerat aut.</p>
              <div className='hero-btns flex gap-4 mt-8'>
                <button className="default-btn bg-[#f5b754] transition-all hover:bg-white hover:text-black px-7 py-5 font-bricolage rounded-full transform hover:-translate-y-1">
                  View More &nbsp;
                  <i className='bi bi-arrow-up-right'></i>
                </button>
                <button className='default-btn border px-7 py-5 font-bricolage rounded-full transition-all hover:bg-[#f5b754] hover:border-transparent hover:-translate-y-1'>
                  Rent Now &nbsp;
                  <i className='bi bi-arrow-up-right'></i>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero-slide hero-slide1 w-full h-full flex items-start pt-20 px-[12%]">
            <div className="hero-content text-white">
              <span className='front-bricolage text-1xl uppercase tracking-widest'>Premium</span>
              <h1 className='font-bricolage text-9xl hero-title my-2'>Rental Car</h1>
              <p className='my-1 text-xl font-bricolage hero-subtitle text-gray-300'>You can rent any of our luxury cars. </p>
              <p className='my-7 W-[60%] hero-pere text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae rem reiciendis eligendi ex quisquam nulla aperiam doloribus exercitationem accusamus iure asperiores dignissimos, totam voluptates tenetur. Labore voluptates quaerat aut.</p>
              <div className='hero-btns flex gap-4 mt-8'>
                <button className="default-btn bg-[#f5b754] transition-all hover:bg-white hover:text-black px-7 py-5 font-bricolage rounded-full transform hover:-translate-y-1">
                  View More &nbsp;
                  <i className='bi bi-arrow-up-right'></i>
                </button>
                <button className='default-btn border px-7 py-5 font-bricolage rounded-full transition-all hover:bg-[#f5b754] hover:border-transparent hover:-translate-y-1'>
                  Rent Now &nbsp;
                  <i className='bi bi-arrow-up-right'></i>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="hero-slide hero-slide1 w-full h-full flex items-start pt-20 px-[12%]">
            <div className="hero-content text-white">
              <span className='front-bricolage text-1xl uppercase tracking-widest'>Premium</span>
              <h1 className='font-bricolage text-9xl hero-title my-2'>Rental Car</h1>
              <p className='my-1 text-xl font-bricolage hero-subtitle text-gray-300'>You can rent any of our luxury cars. </p>
              <p className='my-7 W-[60%] hero-pere text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae rem reiciendis eligendi ex quisquam nulla aperiam doloribus exercitationem accusamus iure asperiores dignissimos, totam voluptates tenetur. Labore voluptates quaerat aut.</p>
              <div className='hero-btns flex gap-4 mt-8'>
                <button className="default-btn bg-[#f5b754] transition-all hover:bg-white hover:text-black px-7 py-5 font-bricolage rounded-full transform hover:-translate-y-1">
                  View More &nbsp;
                  <i className='bi bi-arrow-up-right'></i>
                </button>
                <button className='default-btn border px-7 py-5 font-bricolage rounded-full transition-all hover:bg-[#f5b754] hover:border-transparent hover:-translate-y-1'>
                  Rent Now &nbsp;
                  <i className='bi bi-arrow-up-right'></i>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

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
              <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Abu Dabi</li>
              <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Alain</li>
              <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Dubai</li>
              <li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Sharjah</li><li className='px-4 py-2 hover:bg-[#f5b750] transition cursor-pointer'>Choose Car Type</li>
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

    {/* Luxury Car */}
    <div className="luxury-cars text-white py-[150px]">
      <div className="text-center">
        <p className='uppercase text-sm tracking-widest text-[#f5b754] mb-2'> Select Your Car </p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Luxury <span className='text-[#f5b754] font-bricolage'>Car Fleet</span>
        </h2>
      </div>


      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={20}
        loop = {true}
        autoplay = { {
            delay : 2500,
            disableOnInteraction: false,
        }}
        breakpoints={{
          768:{
            slidesPerView: 2, 
          },
          1024:{
            slidesPerView: 3, 
          },
        }
        }
        speed={1500}
        className='mt-[60px] custome-swiper'
      >
        {Cars.map((car) => (
            <SwiperSlide  key={car.id} className='transition-opacity duration-500'>
              <div className="bg-[#292929] rounded-2xl overflow-hidden flex flex-col h-full">
                <div className='w-full h-[250px]'>
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className='w-full h-full object-cover' 
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className='text-2xl font-semibold text-white font-bricolage'>{car.name}</h3>
                  <div className="flec items-center gap-4 text-sm mt-3 text-gray-300">
                    <span> <i class="text-[#f5b750] bi bi-wallet2"></i> {car.door}</span>
                    <span> <i class="text-[#f5b750] bi bi-person-gear"></i> {car.passengers}</span>
                    <span> <i class="text-[#f5b750] bi bi-diagram-3"></i> {car.transmission}</span>
                    <span> <i class="text-[#f5b750] bi bi-backpack"></i> {car.baggage}</span>
                  </div>

                  <div className='mt-4 flex justify-between items-center'>
                    <Link to={`/car/${car.id}`}>
                      <button className='bg-[#f5b754] text-black px-4 py-2 rounded-full text-sm hover:bg-[#f5b754]/90 transition'>Details</button>
                    </Link>
                    
                    <p className='text-[#f5b754] font-bold text-lg'>${car.price} <span className='text-sm text-white'>/day </span></p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
        ))}
      </Swiper>

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
    <div className="our-service lg:px-[12%] px-[8%] py-[2%] sectopm-effect ">
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


    {/* Testimonials */}
    <div className="testimonials lg:px-[12%] px-[8%] py-[14%] sectopm-effect">

      <div className="our-severice-content mb-20 text-center text-white">
        <p className='uppercase text-sm tracking-[5px] text-[#f5b754] mb-2'>Testimonials</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          What Clients <span className='text-[#f5b754] font-bricolage'>Say</span>
        </h2>
      </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{clickable: true}}
          loop= {true}
          autoplay={{
            delay:3000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, 
            },
            1024: {
              slidesPerView: 2, 
            },
            1400: {
              slidesPerView: 3, 
            }
          }}

        >
          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <span className='text-7xl text-[#f4a950] mr-4'> ❝ </span>

                  {/* Stars */}

                  <div className="flex text-[#f4a950] space-x-1">
                    {Array(5).fill().map((_,i) => (
                      <span key={i} className='[#f4a950]'>★</span>
                    ))}
                  </div>
              </div>

              <div className="text-[#ccc] text-sm mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque explicabo maiores consequuntur et earum in laudantium tempora illum non reiciendis facere 
                 doloribus necessitatibus provident, enim sapiente ipsa doloremque dignissimos velit.
              </div>

              <div className='flex items-center mt-6'>
                <div className="curv">
                  <div className="section-item-curv test-curv">
                    <img src={test1} alt="" className='rounded-full' />
                  </div>
                </div>

                <div className="ps-[100px]">
                    <div className="font-semibold font-bricolage text-[#f5b754]">  Olivia Brown  </div>
                    <p className='text-[#999] text-sm'>Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <span className='text-7xl text-[#f4a950] mr-4'> ❝ </span>

                  {/* Stars */}

                  <div className="flex text-[#f4a950] space-x-1">
                    {Array(5).fill().map((_,i) => (
                      <span key={i} className='[#f4a950]'>★</span>
                    ))}
                  </div>
              </div>

              <div className="text-[#ccc] text-sm mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque explicabo maiores consequuntur et earum in laudantium tempora illum non reiciendis facere 
                 doloribus necessitatibus provident, enim sapiente ipsa doloremque dignissimos velit.
              </div>

              <div className='flex items-center mt-6'>
                <div className="curv">
                  <div className="section-item-curv test-curv">
                    <img src={test2} alt="" className='rounded-full' />
                  </div>
                </div>

                <div className="ps-[100px]">
                    <div className="font-semibold font-bricolage text-[#f5b754]">  Dan Artin  </div>
                    <p className='text-[#999] text-sm'>Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <span className='text-7xl text-[#f4a950] mr-4'> ❝ </span>

                  {/* Stars */}

                  <div className="flex text-[#f4a950] space-x-1">
                    {Array(5).fill().map((_,i) => (
                      <span key={i} className='[#f4a950]'>★</span>
                    ))}
                  </div>
              </div>

              <div className="text-[#ccc] text-sm mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque explicabo maiores consequuntur et earum in laudantium tempora illum non reiciendis facere 
                 doloribus necessitatibus provident, enim sapiente ipsa doloremque dignissimos velit.
              </div>

              <div className='flex items-center mt-6'>
                <div className="curv">
                  <div className="section-item-curv test-curv">
                    <img src={test3} alt="" className='rounded-full' />
                  </div>
                </div>

                <div className="ps-[100px]">
                    <div className="font-semibold font-bricolage text-[#f5b754]"> Emily Martin  </div>
                    <p className='text-[#999] text-sm'>Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <span className='text-7xl text-[#f4a950] mr-4'> ❝ </span>

                  {/* Stars */}

                  <div className="flex text-[#f4a950] space-x-1">
                    {Array(5).fill().map((_,i) => (
                      <span key={i} className='[#f4a950]'>★</span>
                    ))}
                  </div>
              </div>

              <div className="text-[#ccc] text-sm mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque explicabo maiores consequuntur et earum in laudantium tempora illum non reiciendis facere 
                 doloribus necessitatibus provident, enim sapiente ipsa doloremque dignissimos velit.
              </div>

              <div className='flex items-center mt-6'>
                <div className="curv">
                  <div className="section-item-curv test-curv">
                    <img src={test2} alt="" className='rounded-full' />
                  </div>
                </div>

                <div className="ps-[100px]">
                    <div className="font-semibold font-bricolage text-[#f5b754]">  Dan Artin  </div>
                    <p className='text-[#999] text-sm'>Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="rounded-[30px] bg-[#222] text-left p-8 shadow-md h-full flex flex-col justify-between">
              <div className="flex justify-between items-center mb-6">
                <span className='text-7xl text-[#f4a950] mr-4'> ❝ </span>

                  {/* Stars */}

                  <div className="flex text-[#f4a950] space-x-1">
                    {Array(5).fill().map((_,i) => (
                      <span key={i} className='[#f4a950]'>★</span>
                    ))}
                  </div>
              </div>

              <div className="text-[#ccc] text-sm mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Neque explicabo maiores consequuntur et earum in laudantium tempora illum non reiciendis facere 
                 doloribus necessitatibus provident, enim sapiente ipsa doloremque dignissimos velit.
              </div>

              <div className='flex items-center mt-6'>
                <div className="curv">
                  <div className="section-item-curv test-curv">
                    <img src={test3} alt="" className='rounded-full' />
                  </div>
                </div>

                <div className="ps-[100px]">
                    <div className="font-semibold font-bricolage text-[#f5b754]"> Emily Martin  </div>
                    <p className='text-[#999] text-sm'>Customer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>

    </div>
    

    {/* Blog */}                
    <div className="blog lg:px-[12%] px-[8%] py-[2%] sectopm-effect">
      <div className="our-service-content mb-20 text-center text-white">
      <p className='uppercase text-sm tracking-[5px] text-[#f5b754] mb-2'>Our Blog</p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Latest <span className='text-[#f5b754] font-bricolage'>News</span>
        </h2>
      </div>

      <Swiper 
        spaceBetween={30}
        slidesPerView={1}
        loop = {true}
        pagination={{ clickable: true}}
        breakpoints={{
          0: {
            slidesPerView: 2, 
          },
          1280:{
            slidesPerView: 3, 
          }
        }} 
        >


        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300">
            <img src={newscar1} alt="Rental cost of carss" className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105' />
            <div className="-mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-5 rounded-2xl shadow-md z-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl flex flex-col justify-between">
                <span className='absolute -top-4 left-5  bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  May 5,2025
                </span>

                <div className="text-xs text-[#f4a950] mb-2 mt-2 flex gap-4 items-center">
                  <span className='flex items-center gap-1'>
                    <i className='ri-user-line text-sm'></i> Martin C
                  </span>

                  <span className='flex items-center gap-1'>
                    <i className='ri-folder-line text-sm'></i> Vehicles
                  </span>
                </div>

                <h3 className='text-lg font-semibold text-white leading-snug mb-3'>
                  <a href="#" className='hover:text-[#f4a950] tranisition-colors duration-300'>
                    Rental cost for sport and other cars
                  </a>
                </h3>
                <a 
                  href="#"
                  className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f4a950] flex items-center justify-center transition-all duration-500 hover:bg-[#f4a950]'>
                    
                  <i className="ri-arrow-right-up-line text-[#f5b754] hover:text-[#f5b754] transition duration-300"></i>
                </a>

              </div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300">
            <img src={newscar2} alt="Rental cost of carss" className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105' />
            <div className="-mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-5 rounded-2xl shadow-md z-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl flex flex-col justify-between">
                <span className='absolute -top-4 left-5  bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  May 5,2025
                </span>

                <div className="text-xs text-[#f4a950] mb-2 mt-2 flex gap-4 items-center">
                  <span className='flex items-center gap-1'>
                    <i className='ri-user-line text-sm'></i> Martin C
                  </span>

                  <span className='flex items-center gap-1'>
                    <i className='ri-folder-line text-sm'></i> Vehicles
                  </span>
                </div>

                <h3 className='text-lg font-semibold text-white leading-snug mb-3'>
                  <a href="#" className='hover:text-[#f4a950] tranisition-colors duration-300'>
                    Rental cost for sport and other cars
                  </a>
                </h3>
                <a 
                  href="#"
                  className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f4a950] flex items-center justify-center transition-all duration-500 hover:bg-[#f4a950]'>
                    
                  <i className="ri-arrow-right-up-line text-[#f5b754] hover:text-[#f5b754] transition duration-300"></i>
                </a>

              </div>
            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300">
            <img src={newscar3} alt="Rental cost of carss" className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105' />
            <div className="-mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-5 rounded-2xl shadow-md z-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl flex flex-col justify-between">
                <span className='absolute -top-4 left-5  bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  May 5,2025
                </span>

                <div className="text-xs text-[#f4a950] mb-2 mt-2 flex gap-4 items-center">
                  <span className='flex items-center gap-1'>
                    <i className='ri-user-line text-sm'></i> Martin C
                  </span>

                  <span className='flex items-center gap-1'>
                    <i className='ri-folder-line text-sm'></i> Vehicles
                  </span>
                </div>

                <h3 className='text-lg font-semibold text-white leading-snug mb-3'>
                  <a href="#" className='hover:text-[#f4a950] tranisition-colors duration-300'>
                    Rental cost for sport and other cars
                  </a>
                </h3>
                <a 
                  href="#"
                  className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f4a950] flex items-center justify-center transition-all duration-500 hover:bg-[#f4a950]'>
                    
                  <i className="ri-arrow-right-up-line text-[#f5b754] hover:text-[#f5b754] transition duration-300"></i>
                </a>

              </div>
            </div>

          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="group rounded-2xl overflow-hidden bg-transparent transition-all duration-300">
            <img src={newscar4} alt="Rental cost of carss" className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105' />
            <div className="-mt-8 px-5">
              <div className="relative bg-[#1d1d1d] text-white p-5 rounded-2xl shadow-md z-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl flex flex-col justify-between">
                <span className='absolute -top-4 left-5  bg-[#f5b754] text-black text-xs font-semibold px-3 py-1 rounded-md shadow-md'>
                  May 5,2025
                </span>

                <div className="text-xs text-[#f4a950] mb-2 mt-2 flex gap-4 items-center">
                  <span className='flex items-center gap-1'>
                    <i className='ri-user-line text-sm'></i> Martin C
                  </span>

                  <span className='flex items-center gap-1'>
                    <i className='ri-folder-line text-sm'></i> Vehicles
                  </span>
                </div>

                <h3 className='text-lg font-semibold text-white leading-snug mb-3'>
                  <a href="#" className='hover:text-[#f4a950] tranisition-colors duration-300'>
                    Rental cost for sport and other cars
                  </a>
                </h3>
                <a 
                  href="#"
                  className='w-10 h-10 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 rounded-full border border-[#f4a950] flex items-center justify-center transition-all duration-500 hover:bg-[#f4a950]'>
                    
                  <i className="ri-arrow-right-up-line text-[#f5b754] hover:text-[#f5b754] transition duration-300"></i>
                </a>

              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>


    </div>
    </>    

    

  )
}

export default Index