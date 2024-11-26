import React from 'react';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/Vector.png';
import twitterIcon from '../assets/Twiter.svg';
import paypalIcon from '../assets/Pintrest.svg';
import chatIcon from '../assets/Phonebar.png';
import callNowIcon from '../assets/Phonebar.png';

const Blackbar = () => {
  const handleCallNow = () => {
    // Use window.location.href to trigger a phone call on supported devices
    window.location.href = 'tel:+923072663548';
  };

  return (
    // Use responsive utilities to hide Blackbar on smaller screens
    <nav className="hidden md:flex bg-[#171717] text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Social Icons */}
        <div className="flex ml-[10rem] space-x-3">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-3.5 h-3.5 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-3.5 h-3.5 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="w-3.5 h-3.5 hover:opacity-80 transition-opacity" />
          </a>
          <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
            <img src={paypalIcon} alt="PayPal" className="w-3.5 h-3.5 hover:opacity-80 transition-opacity" />
          </a>
        </div>

        {/* Right Section: Call and Chat Icons */}
        <div className="flex items-center mr-[10rem] space-x-4">
          <div className="flex items-center space-x-2">
            <img src={chatIcon} alt="Live Chat" className="w-3 h-3 hover:opacity-80 transition-opacity" />
            <span className="text-[12px] hover:text-[#FFFFFF] transition-colors">Live Chat</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Button to trigger phone call */}
            <button
              onClick={handleCallNow}
              className="flex items-center space-x-2 hover:text-[#FFFFFF]"
            >
              <img
                src={callNowIcon}
                alt="Call Now"
                className="w-3 h-3 hover:opacity-80 transition-opacity"
              />
              <span className="text-[12px]">Call Now</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Blackbar;
