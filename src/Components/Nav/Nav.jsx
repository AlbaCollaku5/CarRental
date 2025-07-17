import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <> 
      <nav className={`px-[12%] text-white fixed top-0 w-full z-[9999] transition-all duration-300 ${isScrolled ? 'bg-[#111111] shadow-md' : 'bg-transparent'}`}>
        <div className='navbar max-w-7xl py-4 flex items-center justify-between relative'>
          <Link to='/' className='text-4xl font-bold logo font-bricolage ml-10 lg:ml-0'>
            Car<span>Rental</span> 
          </Link>

          {/* Desktop Menu */}
          <ul className=' menu hidden lg:flex gap-6 text-sm font-medium'>
            <li><Link to='/' className='text-base opacity-70 hover:opacity-100 transition'>Home</Link></li>
            <li><Link to='/about' className='text-base opacity-70 hover:opacity-100 transition'>About</Link></li>
            <li><Link to='/services' className='text-base opacity-70 hover:opacity-100 transition'>Services</Link></li>
            <li><Link to='/cars' className='text-base opacity-70 hover:opacity-100 transition'>Cars</Link></li>
            <li><Link to='/blogs' className='text-base opacity-70 hover:opacity-100 transition'>Blog</Link></li>
            <li><Link to='/teams' className='text-base opacity-70 hover:opacity-100 transition'>Teams</Link></li>
            <li><Link to='/contact' className='text-base opacity-70 hover:opacity-100 transition'>Contact</Link></li>
          </ul>

          {/* Contact Info (Desktop Only) */}
          <div className='hidden lg:flex items-center gap-4'>
            <i className="bi bi-telephone flex items-center justify-center border border-yellow-500 rounded-full text-2xl w-[45px] h-[45px]"></i>
            <div>
              <p className='text-xs text-white opacity-70'>Need help?</p>
              <p className='font-semibold'>546 653 4322</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden block mr-10 lg:mr-0'>
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`ri-menu-line text-2xl transition ${isOpen ? 'hidden' : 'block'}`}></i>
              <i className={`ri-close-line text-2xl transition ${isOpen ? 'block' : 'hidden'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <ul className={` menu lg:hidden flex flex-col items-center justify-between absolute top-full left-0 w-full bg-black md:pl-5 md:py-4 z-50 ${isOpen ? 'flex' : 'hidden'} gap-2 text-sm font-medium`}>
         
          <li><Link to='/' className='text-base opacity-70 hover:opacity-100 transition px-4 py-2'>Home</Link></li>
          <li><Link to='/about' className='text-base opacity-70 hover:opacity-100 transition px-4 py-2'>About</Link></li>
          <li><Link to='/services' className='text-base opacity-70 hover:opacity-100 transition px-4 py-2'>Services</Link></li>
          <li><Link to='/cars' className='text-base opacity-70 hover:opacity-100 transition px-4 py-2'>Cars</Link></li>
          <li><Link to='/blogs' className='text-base opacity-70 hover:opacity-100 transition px-4 py-2'>Blog</Link></li>
          <li><Link to='/teams' className='text-base opacity-70 hover:opacity-100 transition px-4 py-2'>Teams</Link></li>
          <li><Link to='/contact' className='text-base opacity-70 hover:opacity-100 transition px-4 py-2'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
