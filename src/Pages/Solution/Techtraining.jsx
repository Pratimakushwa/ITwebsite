import React, { useEffect, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Icons
import { FaRobot, FaCubes, FaShieldAlt, FaCity, FaBrain, FaAtom, FaRocket, FaUser, FaEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const topicsCovered = [
  { id: 1, name: "Artificial Intelligence & Agentic Systems", icon: <FaRobot />, color: "bg-[#00b0d8]", shadow: "hover:shadow-cyan-500/10" },
  { id: 2, name: "Blockchain, Smart Contracts & Identity", icon: <FaCubes />, color: "bg-[#3172f4]", shadow: "hover:shadow-blue-500/10" },
  { id: 3, name: "Cybersecurity & Zero Trust", icon: <FaShieldAlt />, color: "bg-emerald-500", shadow: "hover:shadow-emerald-500/10" },
  { id: 4, name: "Internet of Things (IoT) for Smart Cities", icon: <FaCity />, color: "bg-purple-500", shadow: "hover:shadow-purple-500/10" },
  { id: 5, name: "Generative AI for Policy, Legal, & Ops", icon: <FaBrain />, color: "bg-pink-500", shadow: "hover:shadow-pink-500/10" },
  { id: 6, name: "Quantum Computing Basics for Government", icon: <FaAtom />, color: "bg-[#FF6F00]", shadow: "hover:shadow-orange-500/10" },
  { id: 7, name: "Space Tech, BioTech, & ClimateTech", icon: <FaRocket />, color: "bg-[#042d4d]", shadow: "hover:shadow-cyan-900/10" }
];

const deliveryModes = [
  "Live Online Workshops",
  "In-Person Sessions at Your Premises",
  "Quarterly Learning Subscriptions",
  "Interactive Case Studies & Post-Training Support"
];

const TechTraining = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', comment: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100, easing: 'ease-out-cubic' });
    gsap.to('.floating-badge', { y: -6, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 2.5, stagger: 0.2 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ firstName: '', lastName: '', email: '', comment: '' });
  };

  return (
    <div className="font-sans text-gray-800 relative bg-white min-h-screen">
      
      {/* ================= FIXED NAVBAR BACKGROUND (Header ke liye white space) ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* ================= TSPARTICLES ================= */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mt-20">
        <Particles
          id="tsparticles-training"
          init={particlesInit}
          className="w-full h-full absolute inset-0"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30, density: { enable: true, value_area: 800 } },
              color: { value: "#00b0d8" },
              links: { enable: true, color: "#00b0d8", distance: 150, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 1, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
              size: { value: { min: 1, max: 3 } }, 
              opacity: { value: 0.5 } 
            }
          }}
        />
      </div>

      {/* ================= HERO BANNER SECTION ================= */}
      <div 
        className="w-full h-[400px] md:h-[450px] relative flex items-center justify-center bg-cover bg-center mt-20"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-[#042d4d]/85"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 uppercase">
            Emerging Tech Training
          </h1>
          <p className="text-cyan-300 text-sm md:text-base font-bold tracking-widest uppercase">
            Highline Educare • Specialized Programs
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 bg-white pb-24 pt-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-4xl mx-auto mb-20" data-aos="zoom-in-down">
            <h2 className="text-3xl md:text-5xl font-black text-[#042d4d] mb-6 mt-4 tracking-tight">
              Tailored Training For A Rapidly Evolving Future
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
              Emerging technologies are reshaping how governments operate, deliver services, and plan for the future. From AI and blockchain to quantum computing and biotechnology, staying ahead isn’t optional—it’s essential.
            </p>
          </div>

          {/* Topics Grid */}
          <div className="mb-24">
            <h3 className="text-3xl font-black text-[#042d4d] text-center mb-16 tracking-tight">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {topicsCovered.map((topic, index) => (
                <div key={topic.id} data-aos="fade-up" data-aos-delay={index * 100} className="relative bg-white rounded-3xl p-8 pt-16 border border-gray-100 shadow-xl flex flex-col text-center items-center">
                  <div className={`absolute top-0 -translate-y-1/2 w-20 h-20 rounded-full ${topic.color} text-white text-3xl flex items-center justify-center shadow-lg`}>
                    {topic.icon}
                  </div>
                  <h4 className="text-[17px] font-black text-[#042d4d] mt-4">{topic.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10">
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#f8fbff] rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-black text-[#042d4d] mb-6">Flexible Delivery Modes</h3>
                <ul className="space-y-4">
                  {deliveryModes.map((mode, idx) => (
                    <li key={idx} className="flex items-start gap-3 font-bold text-gray-700">
                      <FaCheckCircle className="text-[#00b0d8] mt-1" /> {mode}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl relative">
                <h3 className="text-3xl font-black text-[#042d4d] mb-6">Schedule A Call</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <input type="text" required placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3.5 bg-gray-50 rounded-xl font-medium outline-none" />
                     <input type="text" required placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3.5 bg-gray-50 rounded-xl font-medium outline-none" />
                  </div>
                  <input type="email" required placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3.5 bg-gray-50 rounded-xl font-medium outline-none" />
                  <textarea required rows="4" placeholder="How can we help you?" value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="w-full px-4 py-4 bg-gray-50 rounded-xl font-medium outline-none"></textarea>
                  <button type="submit" className="w-full bg-[#042d4d] hover:bg-[#00b0d8] text-white font-bold py-4 rounded-xl transition-all">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTraining;