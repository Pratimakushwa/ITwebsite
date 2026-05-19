import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Process = () => {
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
          // Cursor interaction disable kar diya
          interactivity: {
            events: {
              onHover: {
                enable: false, 
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

      {/* ================= SECTION 1: OUR PROCESS ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Image Grid */}
          <div className="w-full lg:w-1/2 flex gap-4 relative">
            <div className="w-1/2 h-[450px]" data-aos="fade-right">
              <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    alt="Workflow Strategy" 
                  />
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-4 relative">
              <div 
                data-aos="zoom-in"
                data-aos-delay="400"
                className="absolute -left-12 -top-6 bg-[#161a1e] text-white w-24 h-24 flex flex-col items-center justify-center rounded shadow-2xl z-20 hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                <span className="text-3xl font-bold text-[#1bb4cd]">AGILE</span>
                <span className="text-[10px] font-semibold tracking-widest mt-1">SCRUM</span>
              </div>

              <div data-aos="fade-up" data-aos-delay="150" className="h-[217px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                 <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    alt="Sprint Planning"
                 />
              </div>
              
              <div data-aos="fade-up" data-aos-delay="300" className="h-[217px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                 <img 
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    alt="Development Review"
                 />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-left">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              <h4 className="text-[#1bb4cd] font-semibold text-sm tracking-wide mb-2">Methodology</h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] tracking-tight">Our Process</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-[15px] bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              <strong className="text-gray-900">Highly Process Driven:</strong> We follow Agile Development Practices (SCRUM) to ensure adaptive planning, evolutionary development, early delivery, and continual improvement.
            </p>
            
            <div className="text-gray-700 text-[15px] bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-white/50 space-y-2">
              <span className="font-bold text-gray-900 block mb-1">We follow a systematic 6 step process:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium">
                <div>1. Project Discovery</div>
                <div>2. Intuitive Design</div>
                <div>3. Software Development</div>
                <div>4. Testing</div>
                <div>5. Implementation & Launch</div>
                <div>6. Post Production Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: SECTORS & EXPERTISE ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mt-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-start">
          
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
            <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              <h2 className="text-4xl md:text-[42px] font-extrabold text-[#111] tracking-tight leading-snug">
                Sectors We Serve
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 leading-snug mt-1">
                Enterprise Ecosystems Built For Modern Technological Domains.
              </h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-[15px] bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              <strong className="text-gray-900">Industry Sectors:</strong> We serve across Software & Technology, Finance, Aerospace & Defense, Law Enforcement, Real Estate & Construction, Logistics & Supply Chain, Agriculture & Food Processing, Retail, Textiles, and Mining, Metals & Energy.
            </p>
            
            <p className="text-gray-700 leading-relaxed text-[15px] bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50">
              <strong className="text-gray-900">Core Technical Expertise:</strong> Our architectural mastery spans Blockchain Development, Product Development, Design, Mobile Applications, Web Development, Cloud Enablement, Analytics, DevOps, Digital Strategy, Digital Consulting, Digital Auditing, Web/App UI/UX, Branding & Identity, Augmented Reality, and Virtual Reality systems.
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative pr-10 pb-16">
            <div data-aos="fade-left" className="w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-xl relative z-10">
               <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  alt="Enterprise Sectors"
               />
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="absolute bottom-0 right-0 w-[55%] aspect-[4/3] border-[12px] border-white rounded-2xl overflow-hidden shadow-2xl z-20 bg-gray-300">
               <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  alt="Product Expertise"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;