import React, { useState } from 'react';
import rideApp from '../assets/Rectangle 11.png';
import shoeEcom from '../assets/Rectangle 11 (1).png';
import healthApp from '../assets/Rectangle 11 (2).png';
import logisApp from '../assets/Rectangle 11 (5).png';
import entertain from '../assets/Rectangle 11 (4).png';
import walletApp from '../assets/Rectangle 11 (3).png';

const BlackSection = () => {
  const [selectedButton, setSelectedButton] = useState('Applications');

  // Background colors for each container
  const backgroundColors = {
    rideApp: '#FFFFFF',
    shoeEcom: ['#F5E9F1', '#EBF4F8', '#F7E3E2'],
    healthApp: ['#F4E8E3', '#F3EFF6', '#EEE0F9'],
    logisApp: ['#E7F3F2', '#EBF4F8', '#DFEEF9'],
    entertain: ['#E7F3F2', '#EBF4F8', '#DFEEF9'],
    walletApp: ['#F4E8E3', '#F3EFF6', '#EEE0F9'],
  };

  // Project years
  const projectYears = [
    'May - July 2020',
    'May - July 2021',
    'May - July 2021',
    'May - July 2022',
    'May - July 2023',
    'May - July 2024',
  ];

  return (
    <div className="bg-[#3A3A3A] py-14 md:py-20">
      <h1 className="text-[#FFFFFF] text-center mb-4 text-2xl sm:text-2xl font-bold">
        Project Portfolio
      </h1>
      <p className="text-[#A39898] text-center mb-8 text-lg sm:text-lg">
        If you want to discuss your upcoming project with our customer support
        <span className="block">
          team, call us now. Let's connect and resolve all your queries promptly.
        </span>
      </p>

      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 sm:mb-8 mb-8">
        {['All', 'Websites', 'Applications', 'Logo Design', 'Branding', 'Video Animation'].map((label) => (
          <button
            key={label}
            className={`px-4 sm:px-6 py-2 rounded-full border border-[#FFFFFF] transition-all text-sm sm:text-base ${
              selectedButton === label
                ? 'bg-[#FFFFFF] text-[#000000]'
                : 'bg-[#3A3A3A] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000]'
            }`}
            onClick={() => setSelectedButton(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid layout for the containers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 py-8 md:gap-y-6 px-4 sm:px-6 lg:px-24">
        {[rideApp, shoeEcom, healthApp, logisApp, entertain, walletApp].map((image, index) => {
          const bgColor =
            index === 0
              ? backgroundColors.rideApp
              : index === 1
              ? backgroundColors.shoeEcom[0]
              : index === 2
              ? backgroundColors.healthApp[0]
              : index === 3
              ? backgroundColors.logisApp[0]
              : index === 4
              ? backgroundColors.entertain[0]
              : backgroundColors.walletApp[0];

          return (
            <div
              key={index}
              className="w-[90%] h-[450px] sm:h-[470px] md:h-[450px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform"
              style={{ backgroundColor: bgColor }}
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="h-3/5 w-full object-cover"
              />
              <div className="p-4 text-[#000000]">
                <p className="text-xs sm:text-sm md:text-sm text-gray-600">{projectYears[index]}</p>
                <h2 className="mt-1 sm:mt-2 text-xl sm:text-xl font-semibold">
                  Project {index + 1}
                </h2>
                <p className="mt-2 text-md sm:text-md leading-6 text-gray-700">
                  Expedita laborum suscipit sequi et nobis voluptas fuga placeat.
                  Omnis est ratione. Repellendus recusandae a.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 md:mt-12 text-center">
        <p className="text-[#A39898] py-4 px-6 md:px-8 text-sm md:text-lg cursor-pointer hover:underline">
          View All Projects
        </p>
      </div>
    </div>
  );
};

export default BlackSection;