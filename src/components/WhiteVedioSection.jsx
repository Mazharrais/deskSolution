import React from 'react';
import laptop from '../assets/Group 4273206490.png';
import outdoor from '../assets/outdoor.png';
import garden from '../assets/garden.png';
import group from '../assets/group.png';
import study from '../assets/study.png';
import button from '../assets/Buttonblack.png'; // Corrected the import path for the button image

const WhiteVedioSection = () => {
  return (
    <div className="bg-[#FFFFFF] py-20 mt-8">
      {/* Main Text and Image Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 flex justify-end pr-6"> {/* Reduced padding */}
          <div>
            <p className="text-[#232323] mr-[6rem] font-bold text-xl">
              HOW WE MAKE <span className="text-[#111111]">BETTER</span>
            </p>
            <ul className="mt-4 space-y-6 text-sm ml-[2rem] list-disc list-inside"> {/* Added list-disc */}
              <li className="text-[#A39898]">
                Observation, of the goal market and designed advertising &
                <br />
                 marketing approach format in accordance with the requirement.
              </li>
              <li className="text-[#A39898]">
                Divide the fundamental goal into small goals,  and comply 
                <br />
               with the calendar thus for intention achievement.
              </li>
              <li className="text-[#A39898]">
                Analysis of advertising and monitoring in the element for the
                <br />
                ROI, create an income funnel consequently and observe until
                <br />
                achievement.
              </li>
            </ul>
          </div>
        </div>
        {/* Laptop Image */}
        <div className="flex justify-center md:w-1/2 mt-8 md:mt-0">
          <img
            src={laptop}
            alt="Laptop"
            className="w-[370px] max-w-lg object-contain"
          />
        </div>
      </div>

      {/* Video Section with Play Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mt-20">
        {[outdoor, garden, group, study].map((image, index) => (
          <div
            key={index}
            className="relative w-52 h-52 flex items-center justify-center group transition-transform transform hover:scale-105" // Added hover:scale-105
          >
            {/* Image with rounded corners and opacity change on hover */}
            <img
              src={image}
              alt="Video Thumbnail"
              className="object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
            />
            {/* Black Overlay Effect */}
            <div className="absolute inset-0 bg-white opacity-5 group-hover:opacity-0 transition-opacity"></div>
            {/* Centered Play Button */}
            <img
              src={button}
              alt="Play Button"
              className="absolute w-12 h-12 md:w-14 md:h-14 cursor-pointer transition-transform transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhiteVedioSection;
