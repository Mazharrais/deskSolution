import React from 'react';
import client from '../assets/Clientsblack.png'; // Import your images
import projects from '../assets/Projectsblack.png';
import awards from '../assets/Awardsblack.png';
import users from '../assets/Userblack.png';

const SmallSection = () => {
  return (
    <div
      className="flex flex-wrap items-center justify-center md:space-x-12 space-y-6 md:space-y-0 mx-2 md:mx-[14%] rounded-lg py-6 bg-white shadow-lg -translate-y-20 relative"
    >
      {/* Circle 1 */}
      <div className="w-full sm:w-auto text-center hover:text-[#A0A0A0]">
        <div className="relative mx-auto bg-[#F4F4F4] w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#e6e6e6]">
          <img src={client} alt="Icon 1" className="w-8 h-8" />
        </div>
        <p className="text-[#111111] font-bold text-md mt-4 hover:text-[#A0A0A0]">1000+</p>
        <p className="text-[#5B5B5B] text-sm hover:text-[#A0A0A0]">happy Clients</p>

      </div>

       {/* Vertical Line */}
    <div className="hidden md:block h-16 border-l border-[#E6E6E6] mx-6"></div>

      {/* Circle 2 */}
      <div className="w-full sm:w-auto text-center hover:text-[#A0A0A0]">
        <div className="relative mx-auto bg-[#F4F4F4] w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#e6e6e6]">
          <img src={projects} alt="Icon 2" className="w-8 h-8" />
        </div>
        <p className="text-[#111111] font-bold text-md mt-4 hover:text-[#A0A0A0]">900+</p>
        <p className="text-[#5B5B5B] text-sm hover:text-[#A0A0A0]">Delivered Projects</p>
      </div>

        {/* Vertical Line */}
    <div className="hidden md:block h-16 border-l border-[#E6E6E6] mx-6"></div>


      {/* Circle 3 */}
      <div className="w-full sm:w-auto text-center hover:text-[#A0A0A0]">
        <div className="relative mx-auto bg-[#F4F4F4] w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#e6e6e6]">
          <img src={awards} alt="Icon 3" className="w-5 h-8" />
        </div>
        <p className="text-[#111111] font-bold text-md mt-4 hover:text-[#A0A0A0]">15+</p>
        <p className="text-[#5B5B5B] text-sm hover:text-[#A0A0A0]">Awards</p>
      </div>


     {/* Vertical Line */}
     <div className="hidden md:block h-16 border-l border-[#E6E6E6] mx-6"></div>


      {/* Circle 4 */}
      <div className="w-full sm:w-auto text-center hover:text-[#A0A0A0]">
        <div className="relative mx-auto bg-[#F4F4F4] w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#e6e6e6]">
          <img src={users} alt="Icon 4" className="w-8 h-8" />
        </div>
        <p className="text-[#111111] font-bold text-md mt-4 hover:text-[#A0A0A0]">200+</p>
        <p className="text-[#5B5B5B] text-sm hover:text-[#A0A0A0]">Five Star Rating</p>
      </div>
    </div>
  );
};

export default SmallSection;
