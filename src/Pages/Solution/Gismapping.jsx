import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Icons
import { FaCogs, FaCheckCircle, FaIndustry, FaProjectDiagram } from 'react-icons/fa';

const ControlEngineering = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100, easing: 'ease-out-cubic' });
    gsap.to('.floating-icon', { y: -8, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 2 });
  }, []);

  return (
    <div className="font-sans text-gray-800 relative bg-white min-h-screen">
      
      {/* ================= FIXED NAVBAR SPACER (Overlap fix) ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* ================= TSPARTICLES ================= */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mt-20">
        <Particles
          id="tsparticles-control"
          init={particlesInit}
          className="w-full h-full absolute inset-0"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30, density: { enable: true, value_area: 800 } },
              color: { value: "#00b0d8" },
              links: { enable: true, color: "#00b0d8", distance: 150, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 0.8, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
              size: { value: { min: 1, max: 2.5 } }, 
              opacity: { value: 0.4 } 
            }
          }}
        />
      </div>

      {/* ================= HERO BANNER ================= */}
      <div 
        className="w-full h-[400px] md:h-[450px] pt-20 relative flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22701dd92a?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#042d4d]/85"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 uppercase">
            Digital Control Engineering
          </h1>
          <p className="text-cyan-300 text-sm md:text-base font-bold tracking-widest uppercase">
            Highline Educare • Industrial Systems
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 bg-white pb-24 pt-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          
          {/* Intro Section */}
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="zoom-in-down">
            <h2 className="text-3xl md:text-5xl font-black text-[#042d4d] mb-6 tracking-tight">Our Expertise. Your Systems.</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Mastering control and measurement are critical to the smooth functioning of industrial systems. The right combination of sensors, control systems and software programs are essential to optimizing any industrial process.
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Expertise & Digitization */}
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-[#f8fbff] p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-black text-[#042d4d] mb-6 flex items-center gap-3">
                  <FaCogs className="text-[#00b0d8] floating-icon" /> Expertise
                </h3>
                <ul className="space-y-3 font-bold text-gray-700">
                  {["Automation Design", "Process Optimization", "Anomaly Detection", "Alarm Management", "Resilient Control Systems Design"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3"><FaCheckCircle className="text-[#00b0d8]"/> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#042d4d] p-8 rounded-3xl text-white shadow-lg">
                <h3 className="text-2xl font-black mb-4">Control System Digitization</h3>
                <p className="text-blue-100 text-sm font-medium leading-relaxed">
                  Our Team has extensive experience in combining Process Control with Machine Learning. We work with our clients to digitize their control systems while maintaining production and reducing risk in the process.
                </p>
              </div>
            </div>

            {/* Features & Industries */}
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                <h3 className="text-2xl font-black text-[#042d4d] mb-6 flex items-center gap-3">
                  <FaProjectDiagram className="text-[#00b0d8] floating-icon" /> Solution Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["Proprietary Models", "Automation & Design", "Networking & Cybersecurity", "Contextual Model Integration", "Machine Learning & AI Alerts", "Cloud & On Premises"].map((feat, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-xl text-xs font-bold text-gray-700 border border-gray-100">{feat}</div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f8fbff] p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-black text-[#042d4d] mb-6 flex items-center gap-3">
                  <FaIndustry className="text-[#00b0d8] floating-icon" /> Industries Served
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-bold text-gray-700">
                  {["Oil & Gas", "Power & Utilities", "Life Sciences & Pharma", "Manufacturing", "Mining"].map((ind, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#00b0d8]"></span> {ind}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ControlEngineering;