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
import { FaAws, FaWifi, FaNetworkWired, FaGlobe, FaMicrochip, FaBroadcastTower, FaRss, FaShieldAlt, FaLock, FaUserShield, FaSignal, FaMapMarkerAlt, FaRulerCombined, FaShareAlt } from 'react-icons/fa';
import { MdOutlineSensors } from 'react-icons/md';

const techCategories = [
  {
    id: 1,
    title: "The Internet of Things",
    desc: (
      <>
        The Internet of Things, or IoT, refers to the billions of physical devices connected to the internet and collecting and exchanging data around the world. It's now feasible to turn everything, from a toaster to a building, into a part of the Internet of Things, thanks to the advent of cheap computer chips and the widespread availability of wireless networks.
        <br /><br />
        Connecting these various products and attaching sensors to them gives devices that would otherwise be dumb a level of digital intelligence, allowing them to convey real-time data without involving a person. The internet of things is merging the digital and physical universes, in turn making the world around us smarter and more resilient.
      </>
    ),
    borderColor: "group-hover:border-blue-400",
    shadowColor: "hover:shadow-blue-500/20",
    techs: [
      { name: "IoT Networks", icon: <FaShareAlt />, color: "text-blue-500" },
      { name: "Smart Devices", icon: <FaWifi />, color: "text-teal-500" },
      { name: "Global Mesh", icon: <FaGlobe />, color: "text-indigo-500" },
      { name: "Interconnect", icon: <FaNetworkWired />, color: "text-purple-500" },
    ]
  },
  {
    id: 2,
    title: "Sensors & Signal Data",
    desc: (
      <>
        Sensors are essential to creating IoT enabled solutions. Sensors help detect external information and convey that information in the form of signals which are readable by humans and machines.
        <br /><br />
        Sensors have made it possible to collect data in virtually any situation, and they are currently employed in a variety of industries, including medical care, nursing care, industrial, logistics, transportation, agricultural, disaster protection, tourism, regional enterprises, and many more.
      </>
    ),
    borderColor: "group-hover:border-green-500",
    shadowColor: "hover:shadow-green-500/20",
    techs: [
      { name: "Smart Sensors", icon: <MdOutlineSensors />, color: "text-green-500" },
      { name: "Microchips", icon: <FaMicrochip />, color: "text-cyan-500" },
      { name: "Signal Nodes", icon: <FaRss />, color: "text-orange-500" },
      { name: "Broadcasters", icon: <FaBroadcastTower />, color: "text-blue-600" },
    ]
  },
  {
    id: 3,
    title: "Ecosystem Security",
    desc: (
      <>
        IoT ecosystems are becoming increasingly complex. Device to device exchange of data without a human intermediary is experiencing massive growth. Digital security risk is present at every step of the IoT journey.
        <br /><br />
        Highline IT can help guide your team through their IoT journey and recommend which IoT security mechanisms should be implemented at each step of the process to establish impenetrable data nodes and protected transmission logs.
      </>
    ),
    borderColor: "group-hover:border-indigo-500",
    shadowColor: "hover:shadow-indigo-500/20",
    techs: [
      { name: "Node Shield", icon: <FaShieldAlt />, color: "text-amber-500" },
      { name: "Data Lock", icon: <FaLock />, color: "text-red-500" },
      { name: "Risk Alerting", icon: <FaUserShield />, color: "text-gray-700" },
    ]
  },
  {
    id: 4,
    title: "Ultra WideBand Technology",
    desc: (
      <>
        UWB is a short range radio based communication technology that allows for fast and consistent data transmission. This is the technology of choice for indoor spatial recognition and dimension mapping because of its precision, transmission speed and dependability.
        <br /><br />
        UWB has enabled centimeter level precision in locating objects. This technology makes a new range of use cases and solutions possible for modern smart architectures, asset tracking ecosystems, and localized digital strategy deployments.
      </>
    ),
    borderColor: "group-hover:border-pink-500",
    shadowColor: "hover:shadow-pink-500/20",
    techs: [
      { name: "Radio UWB", icon: <FaSignal />, color: "text-[#FF6F00]" },
      { name: "Spatial Map", icon: <FaMapMarkerAlt />, color: "text-[#412991]" },
      { name: "Precision Grid", icon: <FaRulerCombined />, color: "text-[#3776AB]" },
    ]
  }
];

const IoT = () => {
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
    <section className="relative py-24 bg-[#f8fbff] overflow-hidden z-10 font-sans text-gray-800">
      
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
            }
            // INTERACTIVITY BLOCK POORA REMOVE KAR DIYA HAI
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 mt-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="zoom-in-down">
          <div className="inline-block relative mb-3">
            <h4 className="text-[#00b0d8] font-bold text-sm tracking-widest uppercase">
              Core Vertical Focus
            </h4>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#00b0d8]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#042d4d] mb-6 mt-4">
            Internet of Things (IoT)
          </h2>
          <p className="text-gray-600 text-lg">
            Highline IT merges physical ecosystems with data intelligence, linking wireless device communication grids with high-performance security infrastructure.
          </p>
        </div>

        {/* Tech Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={category.id}
              data-aos="zoom-in-up" 
              data-aos-delay={index * 200} 
              className={`group relative p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${category.borderColor} ${category.shadowColor} flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl font-bold text-[#042d4d] mb-4">{category.title}</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed mb-8">{category.desc}</p>
              </div>

              {/* Tech Icons Layout */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {category.techs.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="tech-icon-box flex flex-col items-center justify-center p-3 rounded-2xl bg-gray-50 border border-gray-100 w-[90px] h-[90px] transition-all duration-300 hover:bg-white hover:shadow-md cursor-pointer"
                    title={tech.name}
                  >
                    <div className={`text-3xl mb-2 transition-transform duration-300 group-hover:scale-110 ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <span className="text-[10px] text-gray-600 font-bold tracking-wide text-center leading-tight">
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

export default IoT;