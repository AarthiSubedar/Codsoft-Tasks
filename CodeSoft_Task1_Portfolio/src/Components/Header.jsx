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
      <nav className={`fixed top-0 left-0 w-full z-10 bg-white transition-shadow duration-300 ${shadow ? 'shadow-sm' : ''}`}>
        <div className="h-24 flex items-center justify-between md:px-30 px-20">
          <div>
            <p className='text-3xl font-name text-purple-700'>Aarthi Subedar</p>
          </div>
          <div>
            <div className="hidden lg:flex text-2xl font-longContent font-semibold gap-16">
              <a href='#hero'>Home</a>
              <a href="#About">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <button onClick={handleMenu} className="text-3xl block lg:hidden">
              {menu ? <RxCross2 className='text-4xl' /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Small Screen Menu */}
      <div
        className={`fixed top-24 right-0 h-full w-2/4 bg-white shadow-sm lg:hidden flex flex-col items-center py-5 transition-transform duration-300 ${
          menu ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <a href='#hero' className="py-4 text-3xl font-longContent font-semibold" onClick={handleMenu}>Home</a>
        <a href="#About" className="py-4 text-3xl font-longContent font-semibold" onClick={handleMenu}>About</a>
        <a href="#skills" className="py-4 text-3xl font-longContent font-semibold" onClick={handleMenu}>Skills</a>
        <a href="#projects" className="py-4 text-3xl font-longContent font-semibold" onClick={handleMenu}>Projects</a>
        <a href="#contact" className="py-4 text-3xl font-longContent font-semibold" onClick={handleMenu}>Contact</a>
      </div>
    </>
  );
};

export default Header;
