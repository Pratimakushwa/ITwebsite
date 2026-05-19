import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaSchool, FaHotel, FaFileInvoiceDollar, FaShoppingCart, FaHospital } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const productsData = [
  {
    id: 1,
    title: "Fiscal Plus",
    desc: "A Complete Business Software Specialized to manage any trade like commission agents..",
    iconBg: "bg-[#aae4f5]", 
    icon: <FaLaptopCode className="text-3xl text-blue-600" />
  },
  {
    id: 2,
    title: "Edu Sol ERP",
    desc: "ERP Software for Schools & Colleges to handle Enquiry, Admission, Fee Management,...",
    iconBg: "bg-[#ffdfb3]", 
    icon: <FaSchool className="text-3xl text-orange-600" />
  },
  {
    id: 3,
    title: "Guest Digi Book",
    desc: "Software for Hotels and Restaurants with K.O.T. Management, Table Booking,...",
    iconBg: "bg-[#ffd966]", 
    icon: <FaHotel className="text-3xl text-gray-800" />
  },
  {
    id: 4,
    title: "One Click Bill",
    desc: "Software For GST Billing with Sale Report, Auto Backup, Outstanding Report, Ledger, SM...",
    iconBg: "bg-[#c1ebf8]",
    icon: <FaFileInvoiceDollar className="text-3xl text-blue-700" />
  },
  {
    id: 5,
    title: "E-Commerce Suite",
    desc: "Complete online store setup with inventory management and payment gateway integration.",
    iconBg: "bg-[#e2d5f8]",
    icon: <FaShoppingCart className="text-3xl text-purple-600" />
  },
  {
    id: 6,
    title: "Medi Care Pro",
    desc: "Hospital management system for patient records, billing, and pharmacy management.",
    iconBg: "bg-[#fcd5ce]",
    icon: <FaHospital className="text-3xl text-red-500" />
  }
];

const HomeAbout = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const displayedProducts = showAllProducts ? productsData : productsData.slice(0, 4);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
      offset: 100,    
      easing: 'ease-in-out-cubic',
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [showAllProducts]);

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      
      {/* ================= VISIBLE BACKGROUND PARTICLES ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Static Lines */}
        <div className="absolute inset-0 flex justify-between px-10 md:px-32 opacity-20">
          <div className="w-px h-full bg-gray-200"></div>
          <div className="w-px h-full bg-gray-200"></div>
          <div className="w-px h-full bg-gray-200"></div>
          <div className="w-px h-full bg-gray-200"></div>
        </div>

        {/* Clear Floating Dots (20 Particles lagaye hain jo clearly dikhenge) */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 2 === 0 ? 'bg-[#00b0d8]' : 'bg-[#3172f4]'}`}
            style={{
              // Size 6px se 14px ke beech hogi taaki saaf dikhe
              width: Math.random() * 8 + 6, 
              height: Math.random() * 8 + 6,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4, // Opacity badha di hai taaki white background par dikhe
            }}
            animate={{
              y: [0, Math.random() * -150 - 50, 0], // Upar-niche move honge
              x: [0, Math.random() * 100 - 50, 0],  // Thoda left-right hilege
              scale: [1, 1.5, 1], // Chote-bade honge
              opacity: [0.2, 0.6, 0.2] // Glow effect/twinkle
            }}
            transition={{
              duration: Math.random() * 6 + 4, // 4 se 10 second ka loop
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        
        {/* ================= ABOUT US ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32">
          
          <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
            <div className="space-y-3">
              <h4 className="text-[#00b0d8] font-bold text-sm tracking-wide">
                Get To Know
              </h4>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#22aaf3] tracking-tight">
                About Us
              </h2>
              <h3 className="text-2xl md:text-[28px] font-semibold text-[#222] leading-snug">
                We Design, Code & Develop Premium Software For Your Business.
              </h3>
            </div>

            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              <strong className="text-gray-800">Welcome to Highline IT,</strong> a premier software development agency dedicated to delivering high-performance, innovative digital solutions. With a passion for cutting-edge technology and a commitment to ultra-premium design, we transform your ideas into reality through robust web and software development.
            </p>

            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="bg-[#052668] text-white p-6 md:p-8 rounded-2xl shadow-xl mt-4 border border-gray-800 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-lg md:text-[19px] leading-relaxed font-medium">
                Contact us today to embark on your digital transformation journey 
                with <span className="text-[#00b0d8]">Highline IT.</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center relative" data-aos="fade-left" data-aos-delay="200">
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-[#00b0d8]/30 to-[#3172f4]/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-xl scale-105 -z-10"
            ></motion.div>

            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-md aspect-square rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center group"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="IT Team" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 z-20"
            >
              <div className="bg-[#00b0d8] text-white p-3 rounded-full shadow-lg shadow-[#00b0d8]/30">
                 <FaLaptopCode className="text-xl" />
              </div>
              <div>
                <h4 className="font-extrabold text-gray-800 text-lg">100+</h4>
                <p className="text-xs text-gray-500 font-medium">Projects Delivered</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-6 -right-2 md:-right-6 bg-[#042d4d] p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
              <div className="bg-yellow-400 text-yellow-900 p-2 rounded-full shadow-lg shadow-yellow-400/30">
                 ⭐
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Top Rated</h4>
                <p className="text-[11px] text-gray-300">IT Agency</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ================= PRODUCTS ================= */}
        <div>
          <div className="text-center space-y-4 mb-20" data-aos="fade-up">
            <h3 className="text-[#042d4d] text-lg md:text-xl font-bold max-w-3xl mx-auto leading-relaxed">
              We deliver the highest quality digital products, and our clients appreciate us for our modern tech stack.
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#222]">
              Products We Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mt-10">
            {displayedProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="relative group pt-12"
                data-aos="zoom-in-up"
                data-aos-delay={index * 150} 
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center border-[3px] border-white shadow-md z-20 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-[360deg] ${product.iconBg}`}>
                  {product.icon}
                </div>

                <div 
                  className="pt-14 pb-16 px-6 text-center text-white transition-colors duration-300 bg-[#042d4d] group-hover:bg-[#00b0d8] shadow-lg group-hover:-translate-y-3"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)'
                  }}
                >
                  <h4 className="text-xl font-bold mb-3">
                    {product.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="flip-up" data-aos-delay="200">
            <button 
              onClick={() => setShowAllProducts(!showAllProducts)}
              className="inline-block bg-[#042d4d] text-[#fafbfb] font-bold px-10 py-3.5 rounded-full shadow-lg hover:shadow-[#ef7446]/50 hover:bg-[#3172f4] hover:text-white transition-all duration-300 hover:-translate-y-2 cursor-pointer active:scale-95"
            >
              {showAllProducts ? "Show Less" : "Explore All Products"}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeAbout;