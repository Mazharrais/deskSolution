// import React from 'react';
// import ecommerce from '../assets/Ecommerce.png';
// import logistic from '../assets/Logistic.png';
// import banking from '../assets/Banking.png';
// import health from '../assets/Health.png';
// import manufacturing from '../assets/Manufacturing.png';
// import education from '../assets/Education.png';

// const PinkSection = () => {
//   const industries = [
//     { image: ecommerce, line1: 'E-commerce', line2: '& Rental' },
//     { image: logistic, line1: 'Logistic', line2: '& warehousing' },
//     { image: banking, line1: 'Banking', line2: '& Finance' },
//     { image: health, line1: 'Health', line2: '& technology' },
//     { image: manufacturing, line1: 'Manufacturing', line2: '& production' },
//     { image: education, line1: 'Education', line2: '& Learning' },
//   ];

//   return (
//     <div className='bg-[#FFEFDC] dark:bg-[#2C2C2C] text-center pt-12 pb-12'>
//       <p className='text-[#232323] text-center text-2xl font-semibold'>
//         INDUSTRIES WE <span className='text-[#FFA63D]'>WORK IN</span>
//       </p>
//       <p className='text-[#5B5B5B] dark:text-[#B0B0B0] font-lightbold text-center my-4'>
//         We significantly influence the daily operations of various industries.
//       </p>

//       <div className='flex flex-wrap justify-center gap-6 mt-8'>
//         {industries.map((industry, index) => (
//           <div key={index} className='flex flex-col items-center'>
//             <div className='w-40 h-40 bg-white dark:bg-[#3C3C3C] flex items-center justify-center rounded-md shadow-md'>
//               <img src={industry.image} alt={`${industry.line1} ${industry.line2}`} className='w-20 h-20 object-contain' />
//             </div>
//             <p className='text-[#232323] font-bold mt-4'>
//               {industry.line1} <br /> {industry.line2}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PinkSection;


import React from 'react';
import ecommerce from '../assets/Ecommerceblack.png';
import logistic from '../assets/Logisticblack.png';
import banking from '../assets/Bankingblack.png';
import health from '../assets/Healthblack.png';
import manufacturing from '../assets/Manufacturingblack.png';
import education from '../assets/Educationblack.png';

const PinkSection = () => {
  const industries = [
    { image: ecommerce, line1: 'E-commerce', line2: '& Rental' },
    { image: logistic, line1: 'Logistic', line2: '& warehousing' },
    { image: banking, line1: 'Banking', line2: '& Finance' },
    { image: health, line1: 'Health', line2: '& technology' },
    { image: manufacturing, line1: 'Manufacturing', line2: '& production' },
    { image: education, line1: 'Education', line2: '& Learning' },
  ];

  return (
    <div className="bg-[#F4F4F4] dark:bg-[#2C2C2C] text-center py-16">
      <p className="text-[#232323] text-center text-2xl font-bold">
        INDUSTRIES WE <span className="text-[#111111]">WORK IN</span>
      </p>
      <p className="text-[#A39898] dark:text-[#B0B0B0] font-semibold text-center my-4">
        We significantly influence the daily operations of various industries.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <div className="w-32 h-32 bg-white dark:bg-[#3C3C3C] flex items-center justify-center rounded-md shadow-md hover:shadow-lg">
              <img
                src={industry.image}
                alt={`${industry.line1} ${industry.line2}`}
                className="w-15 h-15 object-contain"
              />
            </div>
            <p className="text-[#232323] font-semibold mt-4">
              {industry.line1} <br /> {industry.line2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PinkSection;