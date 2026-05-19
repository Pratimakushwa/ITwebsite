import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, ArrowRight } from 'lucide-react';

const industriesConfig = [
  {
    id: 'Healthcare',
    title: 'Healthcare',
    bgColor: '#d1e8ff',
    wave1: '#add3ff',
    wave2: '#85bbff',
    buttonColor: '#005bb5',
    activeButton: '#003a7a',
    portfolioText: 'Our Healthcare Portfolio'
  },
  {
    id: 'Insurance',
    title: 'Insurance',
    bgColor: '#eed5ff',
    wave1: '#dcb0ff',
    wave2: '#c58aff',
    buttonColor: '#005bb5',
    activeButton: '#003a7a',
    portfolioText: 'Our Insurance Portfolio'
  },
  {
    id: 'Investment',
    title: 'Investment',
    bgColor: '#dadfff',
    wave1: '#b8c4ff',
    wave2: '#91a4ff',
    buttonColor: '#005bb5',
    activeButton: '#003a7a',
    portfolioText: 'Our Investment Portfolio'
  },
  {
    id: 'Lending',
    title: 'Lending',
    bgColor: '#c3f4fa',
    wave1: '#90eaf5',
    wave2: '#5cdcf0',
    buttonColor: '#005bb5',
    activeButton: '#003a7a',
    portfolioText: 'Our Lending Portfolio'
  },
  {
    id: 'More industries',
    title: 'More industries',
    bgColor: '#e2e8f0',
    wave1: '#cbd5e1',
    wave2: '#94a3b8',
    buttonColor: '#005bb5',
    activeButton: '#003a7a',
    portfolioText: 'View All Projects'
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(3);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % industriesConfig.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const activeData = industriesConfig[activeIndex];

  return (
    <motion.div 
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="min-h-[90vh] relative overflow-hidden font-sans flex items-center pt-32 pb-16 lg:pt-40 lg:pb-24"
    >
      {/* Subtle Premium Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Background Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.svg 
          animate={{ x: `${-(activeIndex * 10)}%` }} 
          transition={{ x: { duration: 2.5, ease: [0.25, 0.1, 0.25, 1] } }}
          viewBox="0 0 2880 600" 
          className="absolute bottom-0 left-0 w-[200vw] h-[60vh] lg:h-[75vh]"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={{ fill: activeData.wave1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0,350 C320,500 820,150 1440,350 C2060,550 2560,200 2880,350 L2880,600 L0,600 Z"
            opacity="0.8"
          />
          <motion.path
            animate={{ fill: activeData.wave2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M0,450 C450,250 950,600 1440,400 C1930,200 2430,550 2880,400 L2880,600 L0,600 Z"
            opacity="0.6"
          />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
        
        {/* Left Side: Typography and Buttons */}
        <div className="w-full lg:w-5/12 z-20">
          <h1 className="text-4xl md:text-[50px] lg:text-[56px] font-serif text-slate-900 leading-[1.15] mb-6 tracking-tight">
            Software Consulting<br />and Development
          </h1>
          <p className="text-xl md:text-[22px] text-slate-700 mb-10 font-medium tracking-wide opacity-90">
            Delivering project success no matter what
          </p>

          <div className="flex flex-col gap-3.5">
            <div className="flex flex-wrap gap-3.5">
              {industriesConfig.slice(0, 3).map((ind, idx) => (
                <button
                  key={ind.id}
                  onClick={() => handleTabClick(idx)}
                  className={`px-7 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 transform active:scale-95
                    ${activeIndex === idx 
                      ? 'bg-slate-900 text-white shadow-[0_4px_14px_0_rgba(15,23,42,0.39)]' 
                      : 'bg-white/60 backdrop-blur-sm text-slate-800 hover:bg-white hover:shadow-sm border border-white/40'}`}
                >
                  {ind.title}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3.5">
              {industriesConfig.slice(3, 5).map((ind, idx) => (
                <button
                  key={ind.id}
                  onClick={() => handleTabClick(idx + 3)}
                  className={`px-7 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 transform active:scale-95
                    ${activeIndex === idx + 3 
                      ? 'bg-slate-900 text-white shadow-[0_4px_14px_0_rgba(15,23,42,0.39)]' 
                      : 'bg-white/60 backdrop-blur-sm text-slate-800 hover:bg-white hover:shadow-sm border border-white/40'}`}
                >
                  {ind.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Dashboard Carousel with Multiple Layers */}
        <div className="w-full lg:w-7/12 relative z-20 mt-12 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full aspect-[16/10] max-w-[820px] mx-auto p-4 lg:p-6"
            >
              {/* --- MULTIPLE STACKED LAYERS --- */}
              
              {/* Layer 4: Deepest layer */}
              <div className="absolute inset-y-10 right-[-32px] w-[80%] bg-white/20 backdrop-blur-[2px] rounded-2xl shadow-sm border border-white/20 transform z-0 transition-all duration-500"></div>
              
              {/* Layer 3 */}
              <div className="absolute inset-y-8 right-[-24px] w-[85%] bg-white/30 backdrop-blur-[4px] rounded-2xl shadow-sm border border-white/30 transform z-10 transition-all duration-500"></div>
              
              {/* Layer 2 */}
              <div className="absolute inset-y-6 right-[-16px] w-[90%] bg-white/50 backdrop-blur-[8px] rounded-2xl shadow-md border border-white/40 transform z-20 transition-all duration-500"></div>
              
              {/* Layer 1: Closest background layer */}
              <div className="absolute inset-y-3 right-[-8px] w-[95%] bg-white/70 backdrop-blur-[12px] rounded-2xl shadow-lg border border-white/60 transform z-30 transition-all duration-500"></div>
              
              {/* --- MAIN CARD --- */}
              <div className="relative w-full h-full bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-white/90 overflow-hidden flex z-40">
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-gradient-to-b from-white/60 to-slate-50/50">
                   <motion.div 
                     initial={{ scale: 0.8 }}
                     animate={{ scale: 1 }}
                     transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                     className="w-20 h-20 mb-4 rounded-2xl bg-blue-50/80 shadow-inner flex items-center justify-center border border-blue-100"
                   >
                      <BarChart2 size={36} className="text-[#005bb5]" />
                   </motion.div>
                   <h2 className="text-3xl font-bold mb-2 text-slate-800 tracking-tight">{activeData.title} UI</h2>
                   <p className="text-slate-500 font-medium">Interactive components loading...</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Footer Link */}
      <div className="absolute bottom-8 right-12 z-30 hidden lg:block">
        <a href="#" className="flex items-center text-slate-800 font-semibold text-[15px] hover:text-[#005bb5] transition-colors group">
          {activeData.portfolioText}
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

    </motion.div>
  );
};

export default HeroSection;