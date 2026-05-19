import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'; // <--- Yeh import miss ho gaya tha
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Icons
import { FaLaptopCode, FaChalkboardTeacher, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';

const learningSections = [
  {
    id: 1,
    title: "Learning Management System",
    icon: <FaLaptopCode />,
    color: "bg-[#00b0d8]",
    desc: "Our LMS is built for custom training needs—students, employees, partners, or external customers. Available on your hardware or Cloud-based.",
    features: ["Compliance", "Data Tracking", "Custom Integration", "Assessment Tools", "Smart Scheduling", "Reporting & Analytics", "Personalized UX"]
  },
  {
    id: 2,
    title: "Classroom Digitization",
    icon: <FaChalkboardTeacher />,
    color: "bg-[#3172f4]",
    desc: "Reduce instructor workloads and boost student outcomes through a blend of software and hardware solutions customized for your classroom.",
    features: ["IT Infrastructure Management", "Distributed IT Management", "Data Protection & Security", "Innovative Learning Provisions"]
  },
  {
    id: 3,
    title: "E-Learning",
    icon: <FaGraduationCap />,
    color: "bg-emerald-500",
    desc: "Learn new skills, anywhere, anytime. Our E-Learning solutions enable students and teams to learn remotely through digital resources.",
    features: ["Remote Classes", "Adaptive Learning", "Interactive Experiences", "Study Assistants & Bots", "Performance Analysis Dashboards"]
  }
];

const DigitalLearning = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100, easing: 'ease-out-cubic' });
    gsap.to('.floating-icon', { y: -8, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 2 });
  }, []);

  return (
    <div className="font-sans text-gray-800 relative bg-white min-h-screen">
      
      {/* ================= FIXED NAVBAR SPACER ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* ================= TSPARTICLES ================= */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mt-20">
        <Particles
          id="tsparticles-digital"
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
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#042d4d]/85"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 uppercase">
            Digital Learning
          </h1>
          <p className="text-cyan-300 text-sm md:text-base font-bold tracking-widest uppercase">
            Highline Educare • The Future of Education
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 bg-white pb-24 pt-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          
          {/* Paradigm Shift Intro */}
          <div className="bg-[#f8fbff] p-10 rounded-3xl border border-gray-100 shadow-sm mb-20" data-aos="zoom-in">
            <h2 className="text-3xl font-black text-[#042d4d] mb-6 tracking-tight">Paradigm Shift</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              The rapid advancement of technology requires educational processes and techniques to be upgraded. Trends like information sharing, increased accessibility, dashboards for student performance, and distance learning are on the rise. The future of Education is Digital.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningSections.map((section, index) => (
              <div 
                key={section.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl ${section.color} text-white text-3xl flex items-center justify-center mb-6 floating-icon`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-black text-[#042d4d] mb-4">{section.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed font-medium">{section.desc}</p>
                
                <ul className="space-y-2 mt-auto">
                  {section.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-[13px] font-bold text-gray-700">
                      <FaCheckCircle className="text-[#00b0d8] text-xs" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center" data-aos="fade-up">
            <h3 className="text-2xl font-black text-[#042d4d] mb-4">Ready to Digitise Your Learning Environment?</h3>
            <Link to="/contact" className="inline-block bg-[#042d4d] hover:bg-[#00b0d8] text-white px-10 py-4 rounded-full font-bold transition-all duration-300">
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DigitalLearning;