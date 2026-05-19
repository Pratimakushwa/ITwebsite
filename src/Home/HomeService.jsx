import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: '01',
    title: 'Website Designing',
    desc: 'We create and design sites above your imaginations. Our services are unique and distinct from other web design companies.',
    icon: '🌐' 
  },
  {
    id: '02',
    title: 'Software Development',
    desc: 'We have developed custom applications according to the specific needs and requirements of the client from scratch.',
    icon: '💻'
  },
  {
    id: '03',
    title: 'Mobile App Development',
    desc: 'Our team of mobile app developers is creative and knowledgeable to accomplish your individual demands as well as your business needs.',
    icon: '📱'
  },
  {
    id: '04',
    title: 'Logo/Graphic Designing',
    desc: 'We develop graphics for print as well as UI design for digital applications such as banner ads, emailers, customized greeting cards or logos.',
    icon: '🎨'
  },
  {
    id: '05',
    title: 'SEO/SMO',
    desc: 'SEO and SMO are two distinct but related digital marketing strategies used to improve a website\'s visibility and reach online.',
    icon: '📈'
  }
];

const HomeService = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
      offset: 50,    
      easing: 'ease-out-quart',
    });
  }, []);

  const duplicatedServices = [...servicesData, ...servicesData];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      
      {/* ================= CUSTOM CSS FOR AUTO SCROLL ================= */}
      <style>
        {`
          @keyframes autoScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            display: flex;
            width: max-content;
            animation: autoScroll 25s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* ================= MICRO PARTICLES & BG EFFECTS ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Background Vertical Lines */}
        <div className="absolute inset-0 flex justify-between px-10 md:px-32 opacity-20">
          <div className="w-px h-full bg-gray-200"></div>
          <div className="w-px h-full bg-gray-200"></div>
          <div className="w-px h-full bg-gray-200"></div>
          <div className="w-px h-full bg-gray-200"></div>
        </div>

        {/* Floating Dots (Size halki si badha di hai) */}
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-[#00b0d8]' : 'bg-[#3172f4]'}`}
            style={{
              // YAHAN CHANGE KIYA HAI: Size ab 4px se 10px ke beech hogi
              width: Math.random() * 6 + 4, 
              height: Math.random() * 6 + 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.5, 
            }}
            animate={{
              y: [0, Math.random() * -100 - 30, 0], 
              x: [0, Math.random() * 80 - 40, 0],  
              scale: [1, 1.3, 1], 
              opacity: [0.2, 0.7, 0.2] 
            }}
            transition={{
              duration: Math.random() * 8 + 5, 
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Top right gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent opacity-70 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-block relative mb-4">
            <h4 className="text-[#0b1f8e] font-semibold text-md tracking-wide uppercase">
              Our Solutions
            </h4>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#069ab1]"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] tracking-tight mb-4 mt-4">
            Services We Provide
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Unlocking your business's full potential through cutting-edge IT solutions.
          </p>
        </div>

        {/* ================= AUTO SCROLLING CARDS ================= */}
        <div className="overflow-hidden py-6">
          <div className="animate-infinite-scroll gap-6 lg:gap-8 pr-6">
            
            {duplicatedServices.map((service, index) => (
              <div 
                key={index}
                className="flex-shrink-0"
                data-aos="fade-up" 
                data-aos-delay={(index % 5) * 150} 
              >
                <div className="group w-[320px] md:w-[380px] h-full relative bg-[#042d4d] rounded-2xl p-8 shadow-lg transition-all duration-500 cursor-pointer hover:-translate-y-3 hover:bg-[#2f8eee] hover:shadow-2xl border border-transparent hover:border-[#00b0d8]/30">
                  
                  <div 
                    className="absolute top-6 right-6 text-6xl font-bold text-transparent select-none transition-transform duration-500 group-hover:scale-110"
                    style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}
                  >
                    {service.id}
                  </div>

                  <div 
                    data-aos="zoom-in" 
                    data-aos-delay={((index % 5) * 150) + 300}
                    className="w-10 h-10 bg-white/60 rounded-xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500"
                  >
                     {service.icon} 
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-12">
                    {service.desc}
                  </p>

                  <div className="absolute bottom-8 right-8 flex items-center text-white/90 text-sm font-medium transition-all duration-300 group-hover:text-white">
                     <span className="relative z-10">Read More</span>
                     <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 rounded-full group-hover:border-[#00b0d8] group-hover:scale-110 transition-all duration-300"></div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeService;