// src/Layout/MainLayout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer'; // 👈 Ye line add kijiye (Import zaroori hai)

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* children wo content hai jo har page ka alag hota hai */}
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer /> {/* 👈 Yahan use ho raha hai, isliye upar import hona chahiye */}
    </div>
  );
};

export default MainLayout;