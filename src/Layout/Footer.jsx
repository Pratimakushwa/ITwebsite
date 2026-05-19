import React from 'react';
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaYoutube 
} from 'react-icons/fa'; 

const Footer = () => {
  return (
    // YAHAN CHANGE KIYA HAI: py-12 ko pt-28 pb-12 kar diya hai taaki upar se extra space mil jaye
    <footer className="bg-[#042d4d] text-white pt-28 pb-12 px-6 lg:px-16 mt-auto">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Section: Logo and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-white/10">
          
          {/* Logo Space & Social Links */}
          <div className="space-y-4">
            
            {/* LOGO PLACEHOLDER */}
            <div className="h-16 w-40 bg-white/10 flex items-center justify-center rounded border border-dashed border-white/30 text-sm text-gray-300">
              Logo Here
            </div>

            <div className="flex gap-4 text-lg">
              <a href="#" className="hover:text-blue-400 transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-blue-300 transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-3">
            <div className="text-xl text-blue-400 mt-1">📍</div>
            <p className="text-sm leading-relaxed text-gray-300">
              63, Ground Floor, Harvansh Vihar,<br />
              Danish Nagar, Bagmugaliya,<br />
              Bhopal, MP - 462026
            </p>
          </div>

          {/* Email */}
          <div className="flex gap-3">
            <div className="text-xl text-blue-400 mt-1"></div>
            <a href="mailto:highlineeducareindia@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors break-all">
              IT.highlineeducareindia<br/>@gmail.com
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="flex gap-3">
            <div className="text-xl text-blue-400 mt-1">📞</div>
            <div className="text-sm text-gray-300 space-y-1">
              <p>+916232346599</p>
            </div>
          </div>
        </div>

        {/* Middle Section: Quick Links and Accreditations */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white">About Us</a>
            <a href="#" className="hover:text-white">Join Us</a>
            <a href="#" className="hover:text-white">Programs</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>

          {/* Accreditations / Certifications */}
          <div className="lg:col-span-3 flex flex-wrap gap-6 items-center justify-between">
          
            
            <div className="flex items-center gap-2  px-3 py-1.5 rounded font-bold">
               {/* <div className="text-[8px] leading-tight">INDIA<br/>MISSION</div> */}
            </div>

            <div className="text-center">
              <div className="text-lg font-bold">⭐ 4.8/5</div>
              <p className="text-[10px] text-blue-400 underline">Justdial Ratings</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;