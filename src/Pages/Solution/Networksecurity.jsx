import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Icons
import { FaShieldAlt, FaLock, FaCheckCircle, FaUserShield, FaExclamationTriangle } from 'react-icons/fa';
import { MdOutlineSecurityUpdateGood } from 'react-icons/md';

const NetworkSecurity = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    // AOS Init
    AOS.init({ duration: 1000, once: true, offset: 100, easing: 'ease-out-cubic' });

    // GSAP Entrance Animation
    const tl = gsap.timeline();
    tl.from(".hero-text", { opacity: 0, y: 40, duration: 1, delay: 0.2 })
      .from(".content-reveal", { opacity: 0, y: 30, duration: 1, stagger: 0.3 }, "-=0.5");

  }, []);

  return (
    <div className="font-sans text-gray-800 relative bg-white min-h-screen">
      
      {/* ================= FIXED NAVBAR BACKGROUND STRIP ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* ================= TSPARTICLES ================= */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mt-20">
        <Particles
          id="tsparticles-security"
          init={particlesInit}
          className="w-full h-full absolute inset-0"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30, density: { enable: true, value_area: 800 } },
              color: { value: "#042d4d" },
              links: { enable: true, color: "#042d4d", distance: 150, opacity: 0.2, width: 1 },
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#042d4d]/85"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto hero-text">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 uppercase">
            Network Security
          </h1>
          <p className="text-cyan-300 text-sm md:text-base font-bold tracking-widest uppercase">
            Highline Educare • Enterprise Defense
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 bg-white pb-24 pt-16 content-reveal">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Cyber Security */}
            <div data-aos="fade-up">
              <h2 className="text-4xl font-black text-[#042d4d] mb-6 flex items-center gap-3">
                <FaShieldAlt className="text-[#00b0d8]" /> Cyber Security
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                With 51% of small businesses lacking any cybersecurity measures, the need for robust network security has never been more critical. Our services provide numerous benefits, including:
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Data Protection: Shield your valuable data from external threats.",
                  "Risk Minimization: Reduce the chances of network intrusions.",
                  "Improved Network Performance: Enhance overall efficiency by neutralizing threats."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-bold"><FaCheckCircle className="text-[#00b0d8] mt-1 shrink-0"/> {item}</li>
                ))}
              </ul>

              <h2 className="text-3xl font-black text-[#042d4d] mb-6">Benefits</h2>
              <ul className="space-y-4">
                {[
                  "Enhanced Visibility: Gain insights into network activity.",
                  "Compliance Assurance: Stay compliant with industry regulations.",
                  "Intellectual Property Protection: Secure your competitive edge."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-bold"><FaCheckCircle className="text-[#00b0d8] mt-1 shrink-0"/> {item}</li>
                ))}
              </ul>
            </div>

            {/* Right Column: Key Components */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-4xl font-black text-[#042d4d] mb-6 flex items-center gap-3">
                <FaLock className="text-[#00b0d8]" /> Key Components
              </h2>
              <div className="space-y-6 mb-12">
                {[
                  { title: "Threat Detection", icon: <FaExclamationTriangle />, text: "Utilizing advanced algorithms, we monitor network traffic for suspicious activities." },
                  { title: "Threat Prevention", icon: <MdOutlineSecurityUpdateGood />, text: "Our proactive measures include blocking malicious traffic and network segmentation." },
                  { title: "Incident Response", icon: <FaUserShield />, text: "Swift identification of the source of attack and deployment of countermeasures." }
                ].map((comp, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#00b0d8] transition-all duration-300">
                    <div className="text-2xl text-[#00b0d8] mt-1">{comp.icon}</div>
                    <div>
                      <h4 className="font-black text-[#042d4d]">{comp.title}</h4>
                      <p className="text-sm font-medium text-gray-600">{comp.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#f8fbff] p-8 rounded-3xl border border-gray-100 shadow-sm" data-aos="zoom-in" data-aos-delay="400">
                <h3 className="text-xl font-black text-[#042d4d] mb-4">Choosing a Provider</h3>
                <p className="text-gray-600 text-sm mb-4 font-medium">Selecting the right network security service provider is crucial:</p>
                <ul className="space-y-2 text-sm font-bold text-gray-700">
                  <li>• Expertise and Experience</li>
                  <li>• Comprehensive Services</li>
                  <li>• Ongoing Customer Support</li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default NetworkSecurity;