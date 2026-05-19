import React from 'react';
import { motion } from 'framer-motion';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPhp } from 'react-icons/si';

// MERN Stack aur PHP ke icons ko ab "Full Logo" ka look diya hai
const techStack = [
  { 
    id: 1, 
    name: 'MongoDB', 
    icon: <div className="flex items-center gap-2"><SiMongodb className="text-green-700 text-4xl" /><span className="text-2xl font-bold text-gray-800 tracking-tight">MongoDB</span></div> 
  },
  { 
    id: 2, 
    name: 'Express', 
    icon: <div className="flex items-center gap-2"><SiExpress className="text-gray-800 text-4xl" /><span className="text-2xl font-bold text-gray-800 tracking-tight">Express</span></div> 
  },
  { 
    id: 3, 
    name: 'React', 
    icon: <div className="flex items-center gap-2"><SiReact className="text-blue-500 text-4xl" /><span className="text-2xl font-bold text-gray-800 tracking-tight">React</span></div> 
  },
  { 
    id: 4, 
    name: 'Node.js', 
    icon: <div className="flex items-center gap-2"><SiNodedotjs className="text-green-500 text-4xl" /><span className="text-2xl font-bold text-gray-800 tracking-tight">Node.js</span></div> 
  },
  { 
    id: 5, 
    name: 'PHP', 
    icon: <div className="flex items-center gap-2"><SiPhp className="text-indigo-600 text-4xl" /><span className="text-2xl font-bold text-gray-800 tracking-tight">PHP</span></div> 
  },
];

const TechMarquee = () => {
  // Loop ko seamless (bina toote) chalane ke liye array ko duplicate kar rahe hain
  const duplicatedTech = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    // 1. Background ko ekdum clean White (bg-white) kar diya hai.
    // 2. border-y border-gray-100 lagaya hai taaki thoda sa separation dikhe (optional).
    <div className="w-full bg-white py-6 border-y border-gray-100 overflow-hidden flex items-center relative">
      
      <motion.div
        className="flex gap-24 whitespace-nowrap px-4 items-center"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Speed thodi smooth ki hai (15 se 20 kar di)
        }}
      >
        {duplicatedTech.map((tech, index) => (
          <div
            key={index}
            // 4. YAHAN SE BOX HATA DIYA: bg-[#f8f3f1] aur rounded hatakar ekdum clean transparent look diya hai.
            className="flex-shrink-0 flex justify-center items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            title={tech.name}
          >
            {tech.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;