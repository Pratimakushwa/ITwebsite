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
import { FaAws, FaLanguage, FaNetworkWired, FaBrain, FaEye, FaRobot, FaUniversity, FaHospitalAlt, FaIndustry, FaStore, FaCode } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { SiGraphql, SiTensorflow, SiOpenai, SiPython } from 'react-icons/si';

const techCategories = [
  {
    id: 1,
    title: "AI Methodology",
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
      { name: "Deep Learning", icon: <GiArtificialIntelligence />, color: "text-blue-500" },
      { name: "NLP Models", icon: <FaLanguage />, color: "text-teal-500" },
      { name: "Data Patterns", icon: <FaNetworkWired />, color: "text-indigo-500" },
      { name: "Predictions", icon: <FaBrain />, color: "text-purple-500" },
    ]
  },
  {
    id: 2,
    title: "Working With AI",
    desc: (
      <>
        Artificial intelligence will help enhance our abilities and improve our performance. Because AI algorithms learn in a different way than humans, they have a distinct perspective on things. They can notice patterns and relationships that we can't. This human-AI collaboration has a lot of potential.
        <br /><br />
        It can bring analytics to underserved domains, break language or translation barriers, and improve existing analytic technologies like computer vision and time series analysis. Well built AI systems are extremely specialized.
      </>
    ),
    borderColor: "group-hover:border-green-500",
    shadowColor: "hover:shadow-green-500/20",
    techs: [
      { name: "Analytics", icon: <SiGraphql />, color: "text-pink-500" },
      { name: "Vision Systems", icon: <FaEye />, color: "text-cyan-500" },
      { name: "Translation", icon: <MdTranslate />, color: "text-orange-500" },
      { name: "Specialized", icon: <FaRobot />, color: "text-blue-600" },
    ]
  },
  {
    id: 3,
    title: "AI For Industry",
    desc: (
      <>
        AI skills are in high demand across all industries, including systems for automation, learning, legal aid, risk alerting, and research. Highline IT delivers premium tailored architectures for specialized sectors. 
        <br /><br />
        The primary verticals currently building AI solutions include Banking infrastructures, next-generation Healthcare automation, highly calibrated modern Manufacturing frameworks, and enterprise-grade software ecosystems for the Public Sector.
      </>
    ),
    borderColor: "group-hover:border-indigo-500",
    shadowColor: "hover:shadow-indigo-500/20",
    techs: [
      { name: "Banking AI", icon: <FaUniversity />, color: "text-amber-500" },
      { name: "Healthcare", icon: <FaHospitalAlt />, color: "text-red-500" },
      { name: "Industry Tech", icon: <FaIndustry />, color: "text-gray-700" },
      { name: "Retail Automation", icon: <FaStore />, color: "text-green-600" },
    ]
  },
  {
    id: 4,
    title: "Our AI Capabilities",
    desc: (
      <>
        Highline IT has the ability to deploy custom AI solutions using enterprise-grade frameworks like TensorFlow and OpenAI's GPT3 models. Our dedicated software engineering team actively keeps up with global industry developments.
        <br /><br />
        We are also closely monitoring and testing the micro-progressions in the open-source GPT-Neo and GPT-J frameworks to design robust and future-proof digital assets.
      </>
    ),
    borderColor: "group-hover:border-pink-500",
    shadowColor: "hover:shadow-pink-500/20",
    techs: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-[#FF6F00]" },
      { name: "OpenAI GPT3", icon: <SiOpenai />, color: "text-[#412991]" },
      { name: "GPT-Neo", icon: <SiPython />, color: "text-[#3776AB]" },
      { name: "GPT-J Build", icon: <FaCode />, color: "text-emerald-500" },
    ]
  }
];

const AI = () => {
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
    <section className="relative pt-32 pb-24 bg-[#f8fbff] overflow-hidden z-10">
      
      {/* ================= FIXED NAVBAR SPACER ================= */}
      <div className="w-full h-20 bg-white fixed top-0 z-40"></div>

      {/* Background Subtle Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
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
            // INTERACTIVITY POORA DISABLED
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="zoom-in-down">
          <div className="inline-block relative mb-3">
            <h4 className="text-[#00b0d8] font-bold text-sm tracking-widest uppercase">
              Core Vertical Focus
            </h4>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#00b0d8]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#042d4d] mb-6 mt-4">
            Artificial Intelligence Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Highline IT empowers automated infrastructures by processing massive volumes of data, unlocking natural language processing, and deploying custom enterprise learning layers.
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

        {/* AI Resources Section */}
        <div className="mt-16 bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-100 shadow-sm" data-aos="zoom-in-up" data-aos-delay="400">
          <h3 className="text-2xl font-bold text-[#042d4d] mb-6 border-b pb-4 border-gray-100">AI Resources & Publications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="https://www.lansaar.com/blog/artificial-intelligence-in-depth" target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] transition-colors">→ Artificial Intelligence in Depth</a>
            <a href="https://www.linkedin.com/pulse/emergence-artificial-intelligence-shaan-ray" target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] transition-colors">→ The Emergence of Artificial Intelligence</a>
            <a href="https://www.lansaar.com/blog/what-is-ambient-intelligence" target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] transition-colors">→ What is Ambient Intelligence?</a>
            <a href="https://medium.com/lansaar/what-is-federated-learning-89a0c657d935" target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] transition-colors">→ Federated Learning</a>
            <a href="https://medium.com/lansaar/understanding-multimodal-ai-6d71653994a2" target="_blank" rel="noreferrer" className="text-[14px] font-semibold text-gray-600 hover:text-[#00b0d8] transition-colors">→ Understanding Multimodal AI</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AI;