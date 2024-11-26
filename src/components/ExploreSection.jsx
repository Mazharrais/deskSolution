import React from 'react';
import roof from '../assets/roof.png';
import mobile from '../assets/mobile.png';
import paint from '../assets/paint.png';
import rightArrow from '../assets/greyright.png';

const ExploreSection = () => {
  return (
    <div className='bg-[#FFFFFF] pb-8'>
      <p className='text-[#232323] text-center text-2xl font-bold'>
        Explore Insights In{' '}
        <span className='text-[#232323] font-bold'>Our Blog</span>
      </p>
      <p className='text-[#A39898] text-center mt-4 text-sm'>
        Find lots of insights and information on our blog. Explore, learn, and get inspired today.
      </p>

      {/* Blog Items Container */}
      <div className='flex justify-center gap-6 mt-8 flex-wrap'>
        {/* First Blog Item */}
        <div className='flex flex-col items-start p-4 rounded-lg w-[300px] '>
          <img
            src={mobile}
            alt="Smart Home Systems"
            className='mb-2 transition-transform transform hover:scale-105 w-full h-40 object-cover rounded-lg'
          />
          <p className='text-[#545971] text-xs'>19.jan.2022</p>
          <p className='text-[#232323] text-base font-bold mt-2 leading-tight'>
            Understanding Smart Home <br />
            Systems & Maintenance
          </p>
          <p className='text-[#545971] mt-2 text-[10px] leading-relaxed'>
            Discover the ultimate guide to troubleshooting common smart home issues. From connectivity problems to device malfunctions, we provide step-by-step solutions...
          </p>
          <div className='flex gap-2 mt-2 '>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Plumbing
            </button>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Architecture
            </button>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Maintenance
            </button>
          </div>
        </div>

        {/* Second Blog Item */}
        <div className='flex flex-col items-start p-4 rounded-lg w-[300px] '>
          <img
            src={roof}
            alt="Home Repairs"
            className='mb-2 transition-transform transform hover:scale-105 w-full h-40 object-cover rounded-lg'
          />
          <p className='text-[#545971] text-xs'>19.feb.2023</p>
          <p className='text-[#232323] text-base font-bold mt-2 leading-tight'>
            The Ultimate Guide to Home <br />
            Repairs and Renovations
          </p>
          <p className='text-[#545971] mt-2 text-[10px] leading-relaxed'>
            Discover the ultimate guide to troubleshooting common smart home issues. From connectivity problems to device malfunctions, we provide step-by-step solutions...
          </p>
          <div className='flex gap-2 mt-2 '>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Plumbing
            </button>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Architecture
            </button>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Maintenance
            </button>
          </div>
        </div>

        {/* Third Blog Item */}
        <div className='flex flex-col items-start p-4 rounded-lg w-[300px] '>
          <img
            src={paint}
            alt="Kitchen Painting"
            className='mb-2 transition-transform transform hover:scale-105 w-full h-40 object-cover rounded-lg'
          />
          <p className='text-[#545971] text-xs'>19.Mar.2024</p>
          <p className='text-[#232323] text-base font-bold mt-2 leading-tight'>
            Painting Techniques for a <br />
            Kitchen Refresh
          </p>
          <p className='text-[#545971] mt-2 text-[10px] leading-relaxed'>
            Discover the ultimate guide to troubleshooting common smart home issues.
         From connectivity problems to device malfunctions, 
            we provide step-by-step solutions...
          </p>
          <div className='flex gap-1 mt-2 '>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Plumbing
            </button>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Architecture
            </button>
            <button className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'>
              Maintenance
            </button>
          </div>
        </div>
      </div>

      {/* View More Section */}
      <div className='flex justify-center text-sm items-center mt-8'>
        <p className='text-[#A39898] mr-2 transition-colors hover:text-[#e2e8f0]'>
          View More
        </p>
        <img src={rightArrow} alt="Arrow" className='transition-transform transform hover:translate-x-2' />
      </div>
    </div>
  );
}

export default ExploreSection;
