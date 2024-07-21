import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-10 transition-shadow duration-300 ${shadow ? 'shadow-sm bg-purple-50' : 'bg-white'}`}>
        <div className="h-24 flex items-center justify-between md:px-30 px-20">
          <div>
            <p className='text-3xl font-name text-purple-700'>Aarthi Subedar</p>
          </div>
          <div>
            <div className="hidden lg:flex text-2xl font-longContent font-semibold gap-16">
              <a href='#hero' className='relative group'>Home
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#About" className='relative group'>About
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#skills" className='relative group'>Skills
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#projects" className='relative group'>Projects
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
              </a>
              <a href="#contact" className='relative group'>Contact
                <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
            <button onClick={handleMenu} className="text-3xl block lg:hidden">
              {menu ? <RxCross2 className='text-4xl' /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Small Screen Menu */}
      <div
        className={`fixed right-0 h-full w-2/4 bg-white shadow-sm lg:hidden flex flex-col gap-10 items-center justify-center py-5 transition-transform duration-300 border-l border-purple-200 ${
          menu ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <a href='#hero' className="text-3xl font-longContent font-semibold relative group" onClick={handleMenu}>
          Home
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a href="#About" className="text-3xl font-longContent font-semibold relative group" onClick={handleMenu}>
          About
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a href="#skills" className=" text-3xl font-longContent font-semibold relative group" onClick={handleMenu}>
          Skills
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a href="#projects" className="text-3xl font-longContent font-semibold relative group" onClick={handleMenu}>
          Projects
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
        </a>
        <a href="#contact" className=" text-3xl font-longContent font-semibold relative group" onClick={handleMenu}>
          Contact
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 transition-all duration-500 group-hover:w-full"></span>
        </a>
      </div>
    </>
  );
};

export default Header;
