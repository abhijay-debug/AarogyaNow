import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {/* Shining Black Gradient Background */}
      {/* <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-black via-gray-black to-black opacity-90"
        animate={{ x: [-1000, 0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      /> */}

      {/* Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo / Brand */}
          <div className="text-[1.2rem] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 bg-clip-text text-transparent md:text-[1.6rem] font-bold">AarogyaNow</div>
        

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-300">
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="relative z-10 text-center text-gray-400 mt-6 pb-4">
        &copy; {new Date().getFullYear()} WellnessAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
