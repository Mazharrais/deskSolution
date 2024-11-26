// import React from 'react';
// import desk from '../assets/deskWhite.png';
// import whatsapp from '../assets/whatsapp.png';
// import facebook from '../assets/facebook.png';
// import youtube from '../assets/youtube.png';
// import linkedIn from '../assets/linkedin.png';
// import instagram from '../assets/instagram.png';

// const BlackFooter = () => {
//     return (
//         <div className="bg-[#232323] p-6 mt-[2rem]  flex justify-center space-x-[2.5rem] space-y-6 pb-20 flex-col sm:flex-row sm:space-y-0 sm:space-x-[2.5rem] sm:items-start sm:text-left text-center">
//             {/* Logo Section */}
//             <div className="flex flex-col items-center sm:items-start mt-8">
//                 <img className="w-[65%] py-2" src={desk} alt="Desk Logo" />
//             </div>

//             {/* About the Company Section */}
//             <div className="flex flex-col items-center py-[2rem] sm:py-[2rem] sm:items-start space-y-4 sm:space-y-0 sm:text-left">
//                 <h2 className="text-[#FFFFFF] font-bold text-lg">About the Company</h2>
//                 <p className="text-[#FFFFFF] font-semibold text-xs space-y-1">
//                     An ultimate platform for <br />
//                     all your business ideas <br />
//                     and growth. We believe <br />
//                     in high quality work, <br />
//                     therefore we provide <br />
//                     24/7 support to our global <br />
//                     customers.
//                 </p>
//             </div>

//             {/* Get Started Section */}
//             <div className="flex flex-col items-center py-[2rem] sm:py-[2rem] sm:items-start space-y-4 sm:space-y-0 sm:text-left">
//                 <h2 className="text-[#FFFFFF] font-bold text-lg">Get Started</h2>
//                 <ul className="text-[#FFFFFF] font-semibold text-xs space-y-1">
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Technologies</li>
//                     <li>Portfolio</li>
//                     <li>Industries</li>
//                     <li>Contact Us</li>
//                     <li>Blog</li>
//                     <li>Get a Quote</li>
//                 </ul>
//             </div>

//             {/* Services Section */}
//             <div className="flex flex-col items-center py-[2rem] sm:py-[2rem] sm:items-start space-y-4 sm:space-y-0 sm:text-left">
//                 <h2 className="text-[#FFFFFF] font-bold text-lg">Services</h2>
//                 <ul className="text-[#FFFFFF] font-semibold text-xs space-y-1">
//                     <li>Website Development</li>
//                     <li>Mobile Application</li>
//                     <li>Graphics Designing</li>
//                     <li>Video Animation</li>
//                     <li>Digital Marketing</li>
//                     <li>Content Writing</li>
//                     <li>Domain And Hosting</li>
//                     <li>Support</li>
//                 </ul>
//             </div>

//             {/* Contact Section */}
//             <div className="flex flex-col items-center py-[2rem] sm:py-[2rem] sm:items-start space-y-3 ml-2">
//                 <h2 className="text-[#FFFFFF] font-bold text-lg">Contact</h2>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={whatsapp} alt="WhatsApp" />
//                     <p className="text-[#FFFFFF] font-semibold">+1 234 529-786</p>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={facebook} alt="Facebook" />
//                     <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={youtube} alt="YouTube" />
//                     <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={linkedIn} alt="LinkedIn" />
//                     <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={instagram} alt="Instagram" />
//                     <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlackFooter;





import React from 'react';
import desk from '../assets/deskWhite.png';
import whatsapp from '../assets/whatsapp.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import linkedIn from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

const BlackFooter = () => {
    return (
        <div className="bg-[#232323] p-6 mt-[2rem] flex justify-center pb-20 flex-col sm:flex-row sm:items-start sm:text-left text-center sm:space-x-[2.5rem] space-x-0 space-y-4 sm:space-y-0">
            {/* Logo Section */}
            <div className="flex flex-col items-center sm:items-start mt-8">
                <img className="w-[65%] py-2" src={desk} alt="Desk Logo" />
            </div>

            {/* About the Company Section */}
            <div className="flex flex-col items-center py-[1rem] sm:py-[2rem] sm:items-start space-y-3 sm:space-y-4">
                <h2 className="text-[#FFFFFF] font-bold text-lg">About the Company</h2>
                <p className="text-[#FFFFFF] font-semibold text-xs">
                    An ultimate platform for <br />
                    all your business ideas <br />
                    and growth. We believe <br />
                    in high quality work, <br />
                    therefore we provide <br />
                    24/7 support to our global <br />
                    customers.
                </p>
            </div>

            {/* Get Started Section */}
            <div className="flex flex-col items-center py-[1rem] sm:py-[2rem] sm:items-start space-y-3 sm:space-y-4">
                <h2 className="text-[#FFFFFF] font-bold text-lg">Get Started</h2>
                <ul className="text-[#FFFFFF] font-semibold text-xs space-y-1">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Technologies</li>
                    <li>Portfolio</li>
                    <li>Industries</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>Get a Quote</li>
                </ul>
            </div>

            {/* Services Section */}
            <div className="flex flex-col items-center py-[1rem] sm:py-[2rem] sm:items-start space-y-3 sm:space-y-4">
                <h2 className="text-[#FFFFFF] font-bold text-lg">Services</h2>
                <ul className="text-[#FFFFFF] font-semibold text-xs space-y-1">
                    <li>Website Development</li>
                    <li>Mobile Application</li>
                    <li>Graphics Designing</li>
                    <li>Video Animation</li>
                    <li>Digital Marketing</li>
                    <li>Content Writing</li>
                    <li>Domain And Hosting</li>
                    <li>Support</li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-center py-[1rem] sm:py-[2rem] sm:items-start space-y-2 sm:space-y-3">
                <h2 className="text-[#FFFFFF] font-bold text-lg">Contact</h2>
                <div className="flex items-center space-x-2 text-xs">
                    <img className="w-4 h-4" src={whatsapp} alt="WhatsApp" />
                    <p className="text-[#FFFFFF] font-semibold">+1 234 529-786</p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                    <img className="w-4 h-4" src={facebook} alt="Facebook" />
                    <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                    <img className="w-4 h-4" src={youtube} alt="YouTube" />
                    <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                    <img className="w-4 h-4" src={linkedIn} alt="LinkedIn" />
                    <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
                </div>
                <div className="flex items-center space-x-2 text-xs">
                    <img className="w-4 h-4" src={instagram} alt="Instagram" />
                    <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
                </div>
            </div>
        </div>
    );
};

export default BlackFooter;
