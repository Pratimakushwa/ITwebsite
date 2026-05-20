// import React, { useState, useEffect } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null); 
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: 15, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: { type: "spring", stiffness: 180, damping: 15 }
//     },
//     exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }
//   };

//   return (
//     <header 
//       className={`w-full fixed top-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' 
//           : 'bg-transparent' 
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
//         {/* Brand Logo */}
//         <Link to="/" className="text-2xl font-black text-[#042d4d] tracking-tight">
//           Highline<span className="text-[#00b0d8]">Educare</span>
//         </Link>
        
//         {/* ================= DESKTOP NAVIGATION ================= */}
//         <nav className="hidden md:flex items-center gap-8">
//           <NavLink to="/" className={({ isActive }) => `font-bold text-[15px] transition-colors ${isActive ? 'text-[#00b0d8]' : 'text-gray-700 hover:text-[#00b0d8]'}`}>
//             Home
//           </NavLink>
          
//           {/* SOLUTION DROPDOWN (NEW) */}
//           <div 
//             className="relative h-20 flex items-center cursor-pointer"
//             onMouseEnter={() => setActiveDropdown('solution')}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <Link 
//               to="/services" 
//               className="font-bold text-[15px] text-gray-700 hover:text-[#00b0d8] transition-colors flex items-center h-full"
//             >
//               Solution
//             </Link>
//             <AnimatePresence>
//               {activeDropdown === 'solution' && (
//                 <motion.div 
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   // width thodi badhayi hai 'w-64' taaki bade text fit aa jayein
//                   className="absolute top-[74px] left-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-2.5 flex flex-col gap-0.5"
//                 >
//                   <Link 
//                     to="/Techtraining" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     Emerging Tech Training
//                   </Link>
//                   <Link 
//                     to="/Networksecurity" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     Network Security
//                   </Link>
//                   <Link 
//                     to="/Operationscenter" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     Security Operations Center
//                   </Link>
//                   <Link 
//                     to="/Controlengineering" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     Control Engineering
//                   </Link>
//                   <Link 
//                     to="/Gismapping" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     GIS Mapping
//                   </Link>
//                   <Link 
//                     to="/Digitallearning" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     Digital Learning
//                   </Link>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* ABOUT DROPDOWN */}
//           <div 
//             className="relative h-20 flex items-center cursor-pointer"
//             onMouseEnter={() => setActiveDropdown('about')}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <Link 
//               to="/about" 
//               className="font-bold text-[15px] text-gray-700 hover:text-[#00b0d8] transition-colors flex items-center h-full"
//             >
//               About
//             </Link>
//             <AnimatePresence>
//               {activeDropdown === 'about' && (
//                 <motion.div 
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="absolute top-[74px] left-0 w-44 bg-white border border-gray-100 rounded-2xl shadow-xl p-2.5 flex flex-col gap-0.5"
//                 >
//                   <Link 
//                     to="/resources" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     Resources
//                   </Link>
//                   <Link 
//                     to="/process" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     Process
//                   </Link>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* TECH DROPDOWN */}
//           <div 
//             className="relative h-20 flex items-center cursor-pointer"
//             onMouseEnter={() => setActiveDropdown('tech')}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <Link 
//               to="/tech" 
//               className="font-bold text-[15px] text-gray-700 hover:text-[#00b0d8] transition-colors flex items-center h-full"
//             >
//               Tech
//             </Link>
//             <AnimatePresence>
//               {activeDropdown === 'tech' && (
//                 <motion.div 
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="absolute top-[74px] left-0 w-44 bg-white border border-gray-100 rounded-2xl shadow-xl p-2.5 flex flex-col gap-0.5"
//                 >
//                   <Link 
//                     to="/blockchain" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     Blockchain
//                   </Link>
//                   <Link 
//                     to="/ai" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     AI
//                   </Link>
//                   <Link 
//                     to="/iot" 
//                     onClick={() => setActiveDropdown(null)} 
//                     className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50 p-2.5 rounded-xl transition-all"
//                   >
//                     IoT
//                   </Link>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </nav>

//         {/* Action CTA Button */}
//         <div className="hidden md:block">
//           <Link to="/contact" className="bg-[#FFE066] hover:bg-[#FACC15] transition-all duration-300 text-gray-900 px-6 py-2.5 rounded-full font-bold shadow-sm hover:shadow-md block">
//             Contact us
//           </Link>
//         </div>

//         {/* Mobile Hamburger Trigger */}
//         <button 
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="md:hidden text-2xl text-gray-800 focus:outline-none"
//         >
//           {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
        
//       </div>

//       {/* ================= MOBILE NAVIGATION DRAWER ================= */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 flex flex-col shadow-inner"
//           >
//             <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-gray-700">Home</Link>
            
//             {/* Mobile Solution Nested Options */}
//             <div className="space-y-2 pl-3 border-l-2 border-gray-200">
//               <span className="text-[12px] font-black text-gray-400 uppercase tracking-wider">Solution</span>
//               <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Solution Main</Link>
//               <Link to="/emerging-tech-training" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Emerging Tech Training</Link>
//               <Link to="/network-security" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Network Security</Link>
//               <Link to="/security-operations-center" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Security Operations Center</Link>
//               <Link to="/control-engineering" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Control Engineering</Link>
//               <Link to="/gis-mapping" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">GIS Mapping</Link>
//               <Link to="/digital-learning" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Digital Learning</Link>
//             </div>

//             {/* Mobile About Nested Options */}
//             <div className="space-y-2 pl-3 border-l-2 border-gray-200">
//               <span className="text-[12px] font-black text-gray-400 uppercase tracking-wider">About Links</span>
//               <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">About Main</Link>
//               <Link to="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Resources</Link>
//               <Link to="/process" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Process</Link>
//             </div>

//             {/* Mobile Tech Nested Options */}
//             <div className="space-y-2 pl-3 border-l-2 border-gray-200">
//               <span className="text-[12px] font-black text-gray-400 uppercase tracking-wider">Tech Stack</span>
//               <Link to="/tech" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Tech Main</Link>
//               <Link to="/blockchain" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Blockchain</Link>
//               <Link to="/ai" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">AI</Link>
//               <Link to="/iot" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">IoT</Link>
//             </div>

//             <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-gray-700">Contact</Link>
//             <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center inline-block bg-[#042d4d] text-white font-bold py-3 rounded-xl shadow-md">
//               Contact us
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active States logic
  const isSolutionActive = ['/services', '/emerging-tech-training', '/network-security', '/security-operations-center', '/control-engineering', '/gis-mapping', '/digital-learning'].includes(location.pathname);
  const isAboutActive = ['/about', '/resources', '/process'].includes(location.pathname);
  const isTechActive = ['/tech', '/blockchain', '/ai', '/iot'].includes(location.pathname);

  // Active class helper
  const getSubLinkClass = (path) => 
    location.pathname === path ? 'text-[#00b0d8] bg-gray-50' : 'text-gray-600 hover:text-[#00b0d8] hover:bg-gray-50';

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 180, damping: 15 } },
    exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }
  };

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        <Link to="/" className="text-2xl font-black text-[#042d4d] tracking-tight">
          Highline<span className="text-[#00b0d8]">Educare</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-bold text-[15px] transition-colors ${location.pathname === '/' ? 'text-[#00b0d8]' : 'text-gray-700 hover:text-[#00b0d8]'}`}>Home</Link>
          
          {/* Solution */}
          <div className="relative h-20 flex items-center cursor-pointer" onMouseEnter={() => setActiveDropdown('solution')} onMouseLeave={() => setActiveDropdown(null)}>
            <Link to="/services" className={`font-bold text-[15px] transition-colors flex items-center h-full ${isSolutionActive ? 'text-[#00b0d8]' : 'text-gray-700 hover:text-[#00b0d8]'}`}>Solution</Link>
            <AnimatePresence>
              {activeDropdown === 'solution' && (
                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-[74px] left-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-2.5 flex flex-col gap-0.5">
                  <Link to="/emerging-tech-training" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/emerging-tech-training')}`}>Emerging Tech Training</Link>
                  <Link to="/network-security" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/network-security')}`}>Network Security</Link>
                  <Link to="/security-operations-center" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/security-operations-center')}`}>Security Operations Center</Link>
                  <Link to="/control-engineering" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/control-engineering')}`}>Control Engineering</Link>
                  <Link to="/gis-mapping" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/gis-mapping')}`}>GIS Mapping</Link>
                  <Link to="/digital-learning" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/digital-learning')}`}>Digital Learning</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About */}
          <div className="relative h-20 flex items-center cursor-pointer" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
            <Link to="/about" className={`font-bold text-[15px] transition-colors flex items-center h-full ${isAboutActive ? 'text-[#00b0d8]' : 'text-gray-700 hover:text-[#00b0d8]'}`}>About</Link>
            <AnimatePresence>
              {activeDropdown === 'about' && (
                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-[74px] left-0 w-44 bg-white border border-gray-100 rounded-2xl shadow-xl p-2.5 flex flex-col gap-0.5">
                  <Link to="/resources" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/resources')}`}>Resources</Link>
                  <Link to="/process" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/process')}`}>Process</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tech */}
          <div className="relative h-20 flex items-center cursor-pointer" onMouseEnter={() => setActiveDropdown('tech')} onMouseLeave={() => setActiveDropdown(null)}>
            <Link to="/tech" className={`font-bold text-[15px] transition-colors flex items-center h-full ${isTechActive ? 'text-[#00b0d8]' : 'text-gray-700 hover:text-[#00b0d8]'}`}>Tech</Link>
            <AnimatePresence>
              {activeDropdown === 'tech' && (
                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-[74px] left-0 w-44 bg-white border border-gray-100 rounded-2xl shadow-xl p-2.5 flex flex-col gap-0.5">
                  <Link to="/blockchain" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/blockchain')}`}>Blockchain</Link>
                  <Link to="/ai" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/ai')}`}>AI</Link>
                  <Link to="/iot" onClick={() => setActiveDropdown(null)} className={`text-[14px] font-semibold p-2.5 rounded-xl transition-all ${getSubLinkClass('/iot')}`}>IoT</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <Link to="/contact" className="hidden md:block bg-[#FFE066] hover:bg-[#FACC15] transition-all text-gray-900 px-6 py-2.5 rounded-full font-bold shadow-sm">Contact us</Link>
        
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-2xl text-gray-800">
           {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 flex flex-col"
          >
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-gray-700">Home</Link>
            
            {/* Mobile Solution Nested Options */}
            <div className="space-y-2 pl-3 border-l-2 border-gray-200">
              <span className="text-[12px] font-black text-gray-400 uppercase tracking-wider">Solution</span>
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Solution Main</Link>
              <Link to="/emerging-tech-training" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Emerging Tech Training</Link>
              <Link to="/network-security" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Network Security</Link>
              <Link to="/security-operations-center" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Security Operations Center</Link>
              <Link to="/control-engineering" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Control Engineering</Link>
              <Link to="/gis-mapping" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">GIS Mapping</Link>
              <Link to="/digital-learning" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Digital Learning</Link>
            </div>

            {/* Mobile About Nested Options */}
            <div className="space-y-2 pl-3 border-l-2 border-gray-200">
              <span className="text-[12px] font-black text-gray-400 uppercase tracking-wider">About Links</span>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">About Main</Link>
              <Link to="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Resources</Link>
              <Link to="/process" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Process</Link>
            </div>

            {/* Mobile Tech Nested Options */}
            <div className="space-y-2 pl-3 border-l-2 border-gray-200">
              <span className="text-[12px] font-black text-gray-400 uppercase tracking-wider">Tech Stack</span>
              <Link to="/tech" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Tech Main</Link>
              <Link to="/blockchain" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">Blockchain</Link>
              <Link to="/ai" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">AI</Link>
              <Link to="/iot" onClick={() => setIsMobileMenuOpen(false)} className="block text-[14px] font-semibold text-gray-600">IoT</Link>
            </div>

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-bold text-gray-700">Contact</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center inline-block bg-[#042d4d] text-white font-bold py-3 rounded-xl shadow-md">
              Contact us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;