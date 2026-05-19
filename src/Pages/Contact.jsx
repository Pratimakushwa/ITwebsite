import React, { useEffect, useState, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane, FaBuilding } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Particles Background Initialization
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine); 
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });

    // Info cards par gentle floating movement
    gsap.to('.info-node', {
      y: -6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 3,
      stagger: 0.25
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <div className="font-sans text-gray-800 overflow-hidden relative pt-32 pb-24 bg-[#f8fbff] min-h-screen z-10">
      
      {/* ================= FIXED NAVBAR SPACER ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* Background Cyber Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* ================= TSPARTICLES BACKGROUND ================= */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none mt-20">
        <Particles
          id="tsparticles-contact"
          init={particlesInit}
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30, density: { enable: true, value_area: 800 } }, 
              color: { value: "#00b0d8" },
              links: {
                enable: true,
                color: "#00b0d8",
                distance: 160,
                opacity: 0.25, 
                width: 1 
              },
              move: { enable: true, speed: 1.2, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
              size: { value: { min: 1.5, max: 3.5 } }, 
              opacity: { value: 0.3 } 
            },
            // INTERACTIVITY DISABLED
            interactivity: {
              detectsOn: "none",
              events: {
                onHover: { enable: false },
                onClick: { enable: false }
              }
            }
          }}
        />
      </div>

      {/* BACKGROUND VERTICAL GRID LINES */}
      <div className="absolute inset-0 z-0 flex justify-between px-10 md:px-32 pointer-events-none opacity-10">
        <div className="w-px h-full bg-gray-300"></div>
        <div className="w-px h-full bg-gray-300 hidden sm:block"></div>
        <div className="w-px h-full bg-gray-300 hidden md:block"></div>
        <div className="w-px h-full bg-gray-300"></div>
      </div>

      {/* Main Grid Wrapper */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 mt-16">
        
        {/* Main Title Banner Section */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-down">
          <div className="inline-block relative mb-3">
            <h4 className="text-[#00b0d8] font-bold text-sm tracking-widest uppercase">
              Connect With Us
            </h4>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-[#00b0d8]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#042d4d] tracking-tight mt-3">
            Let's Build Something Revolutionary
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ================= LEFT COLUMN: GET IN TOUCH FORM ================= */}
          <div className="w-full lg:col-span-7" data-aos="fade-right">
            <div className="bg-white/80 border border-gray-100 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl shadow-cyan-900/5 relative">
              
              <h3 className="text-2xl font-black text-[#042d4d] mb-2 tracking-tight flex items-center gap-3">
                Get In Touch
              </h3>
              <p className="text-gray-500 text-[14px] font-medium mb-8">
                Indicates required fields are marked with an asterisk (<span className="text-red-500">*</span>)
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input 
                        type="text" 
                        required
                        placeholder="First"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200/80 rounded-xl font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:border-[#00b0d8] focus:bg-white focus:shadow-md focus:shadow-cyan-500/5"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <input 
                        type="text" 
                        required
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200/80 rounded-xl font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:border-[#00b0d8] focus:bg-white focus:shadow-md focus:shadow-cyan-500/5"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input 
                      type="email" 
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200/80 rounded-xl font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:border-[#00b0d8] focus:bg-white focus:shadow-md focus:shadow-cyan-500/5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200/80 rounded-xl font-medium text-gray-800 placeholder-gray-400 outline-none transition-all focus:border-[#00b0d8] focus:bg-white focus:shadow-md focus:shadow-cyan-500/5 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full bg-[#042d4d] hover:bg-[#00b0d8] text-white font-bold py-4 px-6 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Get in touch</span>
                  </button>
                </div>

                {isSubmitted && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-sm rounded-xl text-center animate-fade-in">
                    Thank you! Your transmission has been broadcasted securely to Highline Educare.
                  </div>
                )}
              </form>

            </div>
          </div>

          <div className="w-full lg:col-span-5 space-y-8" data-aos="fade-left">
            
            {/* Email Channels Box */}
            <div className="info-node bg-white/80 border border-gray-100 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-cyan-900/5 space-y-6">
              <h3 className="text-2xl font-black text-[#042d4d] tracking-tight border-b pb-3 border-gray-100 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-50 border border-cyan-100 text-[#00b0d8] text-base">
                  <FaEnvelope />
                </div>
                Email Channels
              </h3>
              
              <div className="space-y-4 font-medium text-[15px]">
                <div className="p-3 bg-gray-50/50 rounded-xl border border-gray-100/50">
                  <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider mb-0.5">Business enquiries</span>
                  <a href="mailto:business@highlineeducare.com" className="text-[#042d4d] hover:text-[#00b0d8] font-bold transition-colors">IT@it.highlineeducare.com</a>
                </div>

                <div className="p-3 bg-gray-50/50 rounded-xl border border-gray-100/50">
                  <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider mb-0.5">Support Inquiries</span>
                  <a href="mailto:media@highlineeducare.com" className="text-[#042d4d] hover:text-[#00b0d8] font-bold transition-colors">Support@highlineeducare.com</a>
                </div>
              </div>
            </div>

            {/* Global Offices Box */}
            <div className="info-node bg-white/80 border border-gray-100 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-cyan-900/5 space-y-6">
              <h3 className="text-2xl font-black text-[#042d4d] tracking-tight border-b pb-3 border-gray-100 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-[#3172f4] text-base">
                  <FaBuilding />
                </div>
                Our Offices
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 font-medium text-[14.5px]">
                <div className="flex gap-3 items-start p-2">
                  <FaMapMarkerAlt className="text-[#00b0d8] text-lg mt-1 shrink-0" />
                  <div>
                    <span className="font-extrabold text-[#042d4d] block text-base mb-0.5">Main Branch (HQ)</span>
                    <p className="text-gray-600 leading-relaxed">
                      Danish Nagar, Bagmugaliya<br />
                      Bhopal, Madhya Pradesh - India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;