import React, { useState } from 'react';
import logo from '../assets/deskWorkBlack.png'; // Update with your logo path
import searchIcon from '../assets/blackSearch.png'; // Update with your search icon path

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-2">
      <div className="container mx-auto flex justify-between items-center md:px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Deskwork Solution Logo"
            className="w-[8rem] h-auto ml-4 md:ml-[140px]"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex font-semibold gap-4 text-[12px]">
          <a href="#" className="hover:text-gray-700 text-[#A39898]" style={{ color: '#111111' }}>
            Home
          </a>
          <a href="BlackSection" className="hover:text-gray-700 text-[#A39898]">
            About Us
          </a>
          <a href="WhiteSection" className="hover:text-gray-700 text-[#A39898]">
            Services
          </a>
          <a href="ToolsSection" className="hover:text-gray-700 text-[#A39898]">
            Technologies
          </a>
          <a href="BlackFooter" className="hover:text-gray-700 text-[#A39898]">
            Contact Us
          </a>
          <a href="#" className="hover:text-gray-700 text-[#A39898]">
            Get a Quote
          </a>
          <a href="#" className="hover:text-gray-700 text-[#A39898]">
            More
          </a>
        </div>

        {/* Search Input */}
        <div className="hidden md:flex items-center mr-[8rem] border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="p-1 pl-2 w-[10rem] outline-none"
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="w-5 h-5 p-1 mr-1"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black text-center space-y-4 p-4">
          <a href="#" className="block py-2 hover:text-gray-700">
            Home
          </a>
          <a href="BlackSection" className="block py-2 hover:text-gray-700">
            About Us
          </a>
          <a href="WhiteSection" className="block py-2 hover:text-gray-700">
            Services
          </a>
          <a href="ToolsSection" className="block py-2 hover:text-gray-700">
            Technologies
          </a>
          <a href="BlackFooter" className="block py-2 hover:text-gray-700">
            Contact Us
          </a>
          <a href="#" className="block py-2 hover:text-gray-700">
            Get a Quote
          </a>
          <a href="#" className="block py-2 hover:text-gray-700">
            More
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
