// import React from 'react';
// import rightArrow from '../assets/rightBlackArrow.png';
// import backgroundImage from '../assets/bBlack.png'; // Import your background image

// const BlueSection = () => {
//   return (
//     <section
//       className="bg-cover bg-center text-white py-32 md:py-52 flex justify-center items-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="text-center max-w-lg md:max-w-2xl px-4 md:px-6">
//         {/* Heading */}
//         <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-5">Desk Work Solution</h1>

//         {/* Paragraph */}
//         <p className="text-lg md:text-1xl  font-semibold mb-8 md:mb-12">
//           Limitless Approach to Digital Business. <br />
//           From Planning to Execution Achievement is The Guaranteed.
//         </p>

//         {/* Button with Arrow Icon */}
//         <div className="flex justify-center items-center">
//           <button
//             className="bg-[#FFFFFF] text-black font-semibold py-2 px-4 md:px-6 rounded-full flex items-center space-x-2 hover:bg-gray-700"
//           >
//             <span>Request a Quote</span>
//             <img src={rightArrow} alt="Arrow Icon" className="w-4 h-4 md:w-5 md:h-5 text-black" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlueSection;




import React from 'react';
import rightArrow from '../assets/rightBlackArrow.png';
import backgroundImage from '../assets/bBlack.png'; // Import your background image

const BlueSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-32 md:py-52 flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient Overlay for the background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative text-center mb-2 max-w-lg md:max-w-2xl px-4 md:px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Desk Work Solution</h1>

        {/* Paragraph */}
        <p className="text-lg md:text-lg font-semibold mb-8 md:mb-12">
          Limitless Approach to Digital Business. <br />
          From Planning to Execution Achievement is The Guaranteed.
        </p>

        {/* Button with Arrow Icon */}
        <div className="flex justify-center items-center">
          <button
            className="bg-white text-black font-semibold py-3 px-4 md:px-6 rounded-full flex items-center space-x-2 transition duration-300 hover:bg-gray-300"
          >
            <span>Request a Quote</span>
            <img
              src={rightArrow}
              alt="Arrow Icon"
              className="w-5 h-5 md:w-5 md:h-5 mt-1 transition-transform duration-300 hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlueSection;
