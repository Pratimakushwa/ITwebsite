import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Resources = () => {
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      offset: 100,    
      easing: 'ease-out-cubic',
    });
  }, []);

  // Particles Engine Initialization
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine); 
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-hidden relative pb-30 pt-20 bg-[#f8fbff]">
      
      {/* ================= FIXED NAVBAR SPACER ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* ================= JS PARTICLES BACKGROUND ================= */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0 mt-20"
        options={{
          fullScreen: { enable: false, zIndex: 0 }, 
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: false, // Cursor interaction disabled
              },
            },
          },
          particles: {
            color: { value: "#1bb4cd" }, 
            links: {
              color: "#1bb4cd",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1.5, 
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 50, 
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* BACKGROUND VERTICAL LINES */}
      <div className="absolute inset-0 z-0 flex justify-between px-10 md:px-32 pointer-events-none opacity-20">
        <div className="w-px h-full bg-gray-400"></div>
        <div className="w-px h-full bg-gray-400"></div>
        <div className="w-px h-full bg-gray-400"></div>
        <div className="w-px h-full bg-gray-400"></div>
      </div>

      {/* ================= SECTION 1: BOOK DIGEST ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="w-full lg:w-1/2 flex gap-4 relative">
            <div className="w-1/2 h-[450px]" data-aos="fade-right">
              <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    alt="The Emerging Technologies Handbook" 
                  />
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-4 relative">
              <div 
                data-aos="zoom-in"
                data-aos-delay="400"
                className="absolute -left-12 -top-6 bg-[#161a1e] text-white w-24 h-24 flex flex-col items-center justify-center rounded shadow-2xl z-20 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                <span className="text-xl font-bold text-[#1bb4cd] text-center leading-none">NEW</span>
                <span className="text-[9px] font-semibold tracking-widest mt-1 text-center">BOOK RELEASE</span>
              </div>

              <div data-aos="fade-up" data-aos-delay="150" className="h-[217px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                 <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    alt="Digital Articles"
                 />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300" className="h-[217px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                 <img 
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    alt="Research Assets"
                 />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-left">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              <h4 className="text-[#1bb4cd] font-semibold text-sm tracking-wide mb-2">Featured Publication</h4>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] tracking-tight">The Emerging Technologies Handbook</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-[15px] bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              <strong className="text-gray-900">Now Available on Amazon:</strong> The Emerging Technologies Handbook describes business models and strategies that companies, governments and other organizations can use to embrace emerging technologies related to biotechnology, computing, materials, energy, manufacturing, and many other fields.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-[15px] bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              Authored by Shaan Ray, a seasoned global business executive, advisor, and investor, the Handbook serves as an important reference for executives and interested individuals keen on mapping futuristic technology integration trajectories.
            </p>

            <div className="pt-4 relative z-20">
              <a href="https://www.amazon.com/Emerging-Technologies-Handbook-Shaan-Ray/dp/B0DB8BM1DH" target="_blank" rel="noreferrer" className="bg-[#1bb4cd] text-white px-6 py-3 rounded text-sm font-semibold shadow-md hover:bg-[#1596ab] transition-colors inline-block cursor-pointer">
                Get Your Copy Today
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: KNOWLEDGE BASE ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-start">
          
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              <h2 className="text-4xl font-extrabold text-[#111] tracking-tight leading-snug">Knowledge Base</h2>
              <h3 className="text-xl font-semibold text-gray-800 leading-snug mt-1">Explore Verified Research Publications & Tech Guides.</h3>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50 space-y-4">
              <h4 className="font-bold text-lg text-[#111] border-b pb-2 border-gray-200">Blockchain & Smart Contracts</h4>
              <div className="flex flex-col gap-2.5 text-[14px]">
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ What is Proof of Stake?</a>
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ Cryptographic Hashing</a>
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ Blockchains vs Traditional Databases</a>
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ Blockchain Interoperability</a>
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ ERC-1190 Token Standards</a>
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ ERC-20 Token Dynamics</a>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-white/50 space-y-4">
              <h4 className="font-bold text-lg text-[#111] border-b pb-2 border-gray-200">Artificial Intelligence</h4>
              <div className="flex flex-col gap-2.5 text-[14px]">
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ History of Artificial Intelligence</a>
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ Four Distinct Types of AI</a>
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ Enterprise Applications of AI</a>
                <a href="#" className="text-gray-600 hover:text-[#1bb4cd] transition-colors font-medium">→ Federated Learning Mechanisms</a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative pr-10 pb-16 lg:sticky lg:top-28">
            <div data-aos="fade-left" className="w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative z-10">
               <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Documentation Vault"/>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="absolute bottom-0 right-0 w-[55%] aspect-[4/3] border-[12px] border-white rounded-2xl overflow-hidden shadow-2xl z-20 bg-gray-300">
               <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Intellectual Assets"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;