import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-10">
        <div className="p-5 bg-blue-200 h-24 items-center text-2xl font-bold text-blue-600 flex justify-end gap-10">
          <a href="#About">About</a>
          <a href="#contact">Contact</a>
          <a href="#education">Education</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
