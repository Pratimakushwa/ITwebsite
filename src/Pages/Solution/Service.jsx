import React, { useEffect } from 'react';
// Framer motion se animation nikal rahe hain
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaChartLine, FaLaptopCode, FaCalendarAlt, FaChartPie } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    title: 'Service Name',
    desc: 'Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    icon: <FaChartLine className="text-4xl text-white" />,
    colorTheme: 'teal', 
  },
  {
    id: 2,
    title: 'Service Name',
    desc: 'Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    icon: <FaLaptopCode className="text-4xl text-white" />,
    colorTheme: 'dark', 
  },
  {
    id: 3,
    title: 'Service Name',
    desc: 'Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    icon: <FaCalendarAlt className="text-4xl text-white" />,
    colorTheme: 'teal', 
  },
  {
    id: 4,
    title: 'Service Name',
    desc: 'Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    icon: <FaChartPie className="text-4xl text-white" />,
    colorTheme: 'dark', 
  }
];

// ================= FRAMER MOTION VARIANTS =================
// Parent container animation (Staggering ke liye)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Har card 0.2s ke gap par aayega
    }
  }
};

// Child card animation (Smooth spring popup)
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15, duration: 0.8 }
  }
};

const CorporateServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="relative w-full bg-white pt-[90px] border-b-[8px] border-[#20a39e]">
      
      {/* ================= TOP SECTION ================= */}
      <div className="relative w-full h-[400px] bg-gray-900 overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80")' }}
        ></div>

        <div className="absolute inset-0 bg-[#20a39e]/80 mix-blend-multiply"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 2, 
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.3, 
              }}
              animate={{
                y: [0, Math.random() * -50 - 20, 0], 
                x: [0, Math.random() * 40 - 20, 0],  
                scale: [1, 1.5, 1], 
                opacity: [0.1, 0.5, 0.1] 
              }}
              transition={{
                duration: Math.random() * 5 + 5, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Header Text (Isme abhi bhi AOS hai kyunki simple fade theek lagta hai) */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pb-20">
          <h2 
            data-aos="fade-down" 
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Our Services
          </h2>
          <p 
            data-aos="fade-up" data-aos-delay="200"
            className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.
          </p>
        </div>
      </div>

      {/* ================= BOTTOM SECTION (FRAMER MOTION CARDS) ================= */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 pb-24 -mt-[56px]">
        
        {/* Yahan hum motion.div use kar rahe hain Scroll animation trigger karne ke liye */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Jab 20% element screen par aaye tab animation start ho
        >
          {servicesData.map((service) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              // Card par hover karne par smooth lift effect
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              
              {/* Animated Circular Icon */}
              <motion.div 
                // Hover par icon halka sa ghumega (rotate) aur bada hoga
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`w-[112px] h-[112px] rounded-full flex items-center justify-center border-[6px] border-white shadow-xl group-hover:shadow-2xl ${
                  service.colorTheme === 'teal' ? 'bg-[#20a39e]' : 'bg-[#353b48]'
                }`}
              >
                <div className="w-[85px] h-[85px] rounded-full border border-white/30 flex items-center justify-center">
                  {service.icon}
                </div>
              </motion.div>

              {/* Text Content Area */}
              <div className="mt-8 px-2">
                <h3 
                  className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                    service.colorTheme === 'teal' ? 'text-[#20a39e] group-hover:text-[#18807c]' : 'text-[#353b48] group-hover:text-black'
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-loose">
                  {service.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
      
    </section>
  );
};

export default CorporateServices;