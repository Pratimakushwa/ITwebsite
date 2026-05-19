import React, { useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Icons
import { FaEye, FaChartLine, FaShieldAlt, FaClipboardCheck, FaCogs, FaCheckCircle } from 'react-icons/fa';

const socFeatures = [
  { id: 1, title: "24/7 Monitoring & Detection", icon: <FaEye />, color: "bg-[#00b0d8]", desc: "Our SOC operates around the clock, ensuring continuous monitoring of your IT environment using advanced SIEM tools to detect anomalies in real-time." },
  { id: 2, title: "Threat Intelligence & Analysis", icon: <FaChartLine />, color: "bg-[#3172f4]", desc: "We leverage global threat intelligence to stay ahead of emerging threats, analyzing trends to proactively strengthen your defenses." },
  { id: 3, title: "Incident Response", icon: <FaShieldAlt />, color: "bg-emerald-500", desc: "Our dedicated team follows a structured plan to contain, investigate, and remediate threats, minimizing damage and downtime effectively." },
  { id: 4, title: "Compliance Support", icon: <FaClipboardCheck />, color: "bg-purple-500", desc: "We help you maintain compliance with industry standards like GDPR, HIPAA, and PCI-DSS, ensuring you meet all necessary security obligations." },
  { id: 5, title: "Customized Strategy", icon: <FaCogs />, color: "bg-pink-500", desc: "Every organization is unique. We provide a customized security strategy tailored to your specific business goals and infrastructure needs." }
];

const Operationscenter = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100, easing: 'ease-out-cubic' });
    gsap.to('.floating-badge', { y: -6, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 2.5, stagger: 0.2 });
  }, []);

  return (
    <div className="font-sans text-gray-800 relative bg-white min-h-screen">
      
      {/* ================= FIXED NAVBAR SPACER ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* ================= TSPARTICLES ================= */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mt-20">
        <Particles
          id="tsparticles-soc"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#042d4d]/85"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 uppercase">
            Security Operations Center
          </h1>
          <p className="text-cyan-300 text-sm md:text-base font-bold tracking-widest uppercase">
            Highline Educare • 24/7 Protection
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 bg-white pb-24 pt-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-4xl mx-auto mb-20" data-aos="zoom-in-down">
            <h2 className="text-3xl md:text-5xl font-black text-[#042d4d] mb-6 tracking-tight">
              Robust Security Coverage 24/7
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              In today’s digital landscape, cyber threats are more prevalent than ever. Our SOC combines advanced technology, skilled analysts, and proven processes to provide you with robust security coverage round the clock.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {socFeatures.map((feature, index) => (
              <div 
                key={feature.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative bg-white rounded-3xl p-8 pt-16 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className={`floating-badge absolute top-0 -translate-y-1/2 w-20 h-20 rounded-full ${feature.color} text-white text-3xl flex items-center justify-center shadow-lg shadow-black/10`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-black text-[#042d4d] mb-4">{feature.title}</h4>
                <p className="text-gray-600 text-[14.5px] font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="mt-24 bg-[#042d4d] rounded-3xl p-10 md:p-16 text-center text-white" data-aos="fade-up">
            <h3 className="text-3xl font-black mb-6">Ready to secure your infrastructure?</h3>
            <p className="mb-8 text-blue-100">Our expert analysts are ready to help you build a proactive defense strategy tailored to your organization.</p>
            <button className="bg-[#00b0d8] hover:bg-white hover:text-[#042d4d] px-10 py-4 rounded-full font-bold transition-all duration-300">
              Contact SOC Team
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Operationscenter;