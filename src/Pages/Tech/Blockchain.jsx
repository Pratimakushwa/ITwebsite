import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import { 
  SiReact, SiTailwindcss, SiNextdotjs, SiFramer, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiFigma, SiAndroid, SiApple, SiDocker 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa';

const techCategories = [
  {
    id: 1,
    title: "Artificial Intelligence (AI)",
    desc: (
      <>
        Machines may learn from their experiences, adapt to new inputs, and execute human-like jobs thanks to artificial intelligence (AI). Most AI examples rely largely on deep learning and natural language processing.
        <br /><br />
        Our Team has the ability to deploy custom AI solutions using frameworks like TensorFlow and OpenAI's GPT3. We are also closely monitoring the progress in the GPT-Neo and GPT-J frameworks.
      </>
    ),
    borderColor: "group-hover:border-blue-400",
    shadowColor: "hover:shadow-blue-500/20",
    techs: [
      { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#38B2AC]" },
      { name: "Framer", icon: <SiFramer />, color: "text-[#0055FF]" },
    ]
  },
  {
    id: 2,
    title: "Blockchain & Cryptography",
    desc: (
      <>
        Blockchain technology will revolutionize the way we generate and share data as well as revamp how transactions are done digitally. Our team can create new blockchains and deploy public and private versions.
        <br /><br />
        Blockhain ledgers are secured through various forms of cryptography, making the data within them tamper proof and auditable in real time using Merkle Trees. We've got capabilities to launch new cryptocurrency protocols.
      </>
    ),
    borderColor: "group-hover:border-green-500",
    shadowColor: "hover:shadow-green-500/20",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-800" },
      { name: "AWS", icon: <FaAws />, color: "text-[#FF9900]" },
      { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]" },
    ]
  },
  {
    id: 3,
    title: "Smart Contracts & NFTs",
    desc: (
      <>
        Smart-Contracts can be securely created, hosted and deployed on blockchain platforms. Logic can be coded in the forms of smart contracts, which could also serve as legal agreements between users.
        <br /><br />
        Non Fungible Tokens are set to change the way media is consumed online. The ownership and transfer of digital assets will be built around NFTs, powering the Metaverse and augmented reality clouds.
      </>
    ),
    borderColor: "group-hover:border-indigo-500",
    shadowColor: "hover:shadow-indigo-500/20",
    techs: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#336791]" },
    ]
  },
  {
    id: 4,
    title: "Internet of Things (IoT)",
    desc: (
      <>
        The Internet of Things refers to the billions of physical devices connected to the internet and exchanging data. Connecting products and attaching sensors gives devices digital intelligence without human intermediaries.
        <br /><br />
        Sensors help detect external information and convey that in the form of signals. IoT ecosystems are becoming complex, and we guide teams on which security mechanisms should be implemented at each step.
      </>
    ),
    borderColor: "group-hover:border-pink-500",
    shadowColor: "hover:shadow-pink-500/20",
    techs: [
      { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E]" },
      { name: "React Native", icon: <TbBrandReactNative />, color: "text-[#61DAFB]" },
      { name: "Android", icon: <SiAndroid />, color: "text-[#3DDC84]" },
      { name: "Apple", icon: <SiApple />, color: "text-black" },
    ]
  }
];

const TechStack = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,
      offset: 150, 
      easing: 'ease-out-back', 
    });
    
    setTimeout(() => {
      AOS.refresh();
    }, 500);

    gsap.to('.tech-icon-box', {
      y: -10, 
      repeat: -1, 
      yoyo: true, 
      ease: "power1.inOut",
      duration: 2,
      stagger: 0.15 
    });
  }, []);

  return (
    <section className="relative py-24 bg-[#f8fbff] overflow-hidden z-10">
      
      {/* ================= FIXED NAVBAR SPACER ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* Background Subtle Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* ================= TSPARTICLES BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 opacity-40 mt-20">
        <Particles
          id="tsparticles-tech"
          init={particlesInit}
          className="w-full h-full absolute inset-0"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30, density: { enable: true, value_area: 800 } },
              color: { value: ["#00b0d8", "#3172f4"] },
              links: {
                enable: true,
                color: "#00b0d8",
                distance: 180,
                opacity: 0.3,
                width: 2 
              },
              move: { enable: true, speed: 2, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
              size: { value: { min: 2, max: 4 } }, 
              opacity: { value: 0.7 } 
            },
            interactivity: {
              events: {
                onHover: { enable: false } // Cursor interaction disabled
              }
            }
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 mt-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="zoom-in-down">
          <div className="inline-block relative mb-3">
            <h4 className="text-[#00b0d8] font-bold text-sm tracking-widest uppercase">
              Our Core Expertise
            </h4>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#00b0d8]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#042d4d] mb-6 mt-4">
            AI, Blockchain & IoT <br className="hidden md:block"/> Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            We leverage Artificial Intelligence, Blockchain technology, and the Internet of Things to transform enterprises, optimize logistics, and build secure digital ecosystems.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={category.id}
              data-aos="zoom-in-up" 
              data-aos-delay={index * 200} 
              className={`group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${category.borderColor} ${category.shadowColor}`}
            >
              <h3 className="text-2xl font-bold text-[#042d4d] mb-2">{category.title}</h3>
              
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">{category.desc}</p>

              {/* Tech Icons Layout */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {category.techs.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="tech-icon-box flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 border border-gray-100 w-[85px] h-[85px] transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer"
                    title={tech.name}
                  >
                    <div className={`text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <span className="text-[11px] text-gray-600 font-semibold tracking-wide">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;