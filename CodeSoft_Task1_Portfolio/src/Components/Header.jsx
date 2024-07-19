import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
        <div className="h-24 flex items-center justify-end px-10">
          <div className="hidden lg:flex text-2xl font-bold gap-16">
            <a href="#About">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button onClick={handleMenu} className="text-3xl block lg:hidden">
            {menu ? <RxCross2 className='text-4xl' /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Small Screen Menu */}
      <div
        className={`fixed top-24 right-0 h-full w-3/4 bg-white shadow-md lg:hidden flex flex-col items-center py-5 transition-transform duration-300 ${
          menu ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      >
        <a href="#About" className="py-2 text-xl" onClick={handleMenu}>About</a>
        <a href="#skills" className="py-2 text-xl" onClick={handleMenu}>Skills</a>
        <a href="#projects" className="py-2 text-xl" onClick={handleMenu}>Projects</a>
        <a href="#contact" className="py-2 text-xl" onClick={handleMenu}>Contact</a>
      </div>
    </>
  );
};

export default Header;
