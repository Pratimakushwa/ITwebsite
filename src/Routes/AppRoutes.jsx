import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import HeroSection from '../Home/HeroSection';
import Projects from '../Home/Projects';

// Aapke exact folder aur file names ke hisaab se imports
import About from '../Pages/About/AboutIT'; 
import Resources from '../Pages/About/Resources'; 
import Process from '../Pages/About/Process'; 

import Tech from '../Pages/Tech/Tech'; 
import AI from '../Pages/Tech/AI'; 
// FIXED: IOT ki jagah IoT (case-sensitivity fix for Linux/Vercel)
import IOT from '../Pages/Tech/IoT'; 
import Blockchain from '../Pages/Tech/Blockchain'; 

import Service from '../Pages/Solution/Service'; 
import Techtraining from '../Pages/Solution/Techtraining'; 
import Networksecurity from '../Pages/Solution/Networksecurity'; 
import Operationscenter from '../Pages/Solution/Operationscenter'; 
import Controlengineering from '../Pages/Solution/Controlengineering'; 
import Gismapping from '../Pages/Solution/Gismapping'; 
import Digitallearning from '../Pages/Solution/Digitallearning'; 

import Contact from '../Pages/Contact'; 
import HomeAbout from '../Home/HomeAbout';
import HomeService from '../Home/HomeService';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route 
        path="/" 
        element={
          <MainLayout>
            <HeroSection />
            <Projects />
            <HomeAbout/>
            <HomeService/>
          </MainLayout>
        } 
      />
      
      {/* About Page */}
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/resources" element={<MainLayout><Resources/></MainLayout>}/>
      <Route path="/process" element={<MainLayout><Process /></MainLayout>} />
      
      {/* Services Main Page */}
      <Route path="/services" element={<MainLayout><Service /></MainLayout>} />
      
      {/* ============================================================== */}
      {/* SOLUTIONS DROPDOWN PAGES (FIXED: Matched exactly with Header)  */}
      {/* ============================================================== */}
      <Route path="/emerging-tech-training" element={<MainLayout><Techtraining /></MainLayout>} />
      <Route path="/network-security" element={<MainLayout><Networksecurity/></MainLayout>} />
      <Route path="/security-operations-center" element={<MainLayout><Operationscenter/></MainLayout>} />
      <Route path="/control-engineering" element={<MainLayout><Controlengineering/></MainLayout>} />
      <Route path="/gis-mapping" element={<MainLayout><Gismapping/></MainLayout>} />
      <Route path="/digital-learning" element={<MainLayout><Digitallearning/></MainLayout>} />
      
      {/* TECH DROPDOWN PAGES (FIXED: Matched exactly with Header) */}
      <Route path="/tech" element={<MainLayout><Tech/></MainLayout>} />
      <Route path="/ai" element={<MainLayout><AI/></MainLayout>} />
      <Route path="/blockchain" element={<MainLayout><Blockchain/></MainLayout>} />
      <Route path="/iot" element={<MainLayout><IOT/></MainLayout>} />
      
      {/* Contact Page */}
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;