import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-[100px] text-center bg-white overflow-hidden">
      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-0 left-[-20%] w-96 h-96 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full filter blur-3xl opacity-70"
        animate={{ x: [0, 200, 0], y: [0, 100, 0], rotate: [0, 180, 0] }}
        transition={{ duration: 5 , repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute bottom-0 right-[-10%] w-80 h-80 bg-gradient-to-r from-blue-400 via-green-400 to-teal-300 rounded-full filter blur-3xl opacity-60"
        animate={{ x: [0, -150, 0], y: [0, -50, 0], rotate: [0, -180, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 rounded-full filter blur-3xl opacity-50"
        animate={{ x: [-50, 50, -50], y: [-50, 50, -50], rotate: [0, 360, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "loop" }}
      />

      {/* Content */}
      <h2 className="text-[2.4rem] mb-[20px] relative z-10 font-bold">Ready to Transform Your Life?</h2>
      <p className="text-[1rem] max-w-[800px] mx-auto mb-[40px] relative z-10">
        Join our community and experience premium AI-powered wellness coaching. Your personal journey starts with a message.
      </p>
      <a href="#pricing" className="block relative z-10">
        <button
          type="button"
          className="bg-white text-center w-44 sm:w-52 md:w-60 rounded-2xl h-14 relative text-black text-lg sm:text-xl font-semibold border-4 border-white group mx-auto overflow-hidden"
        >
          <div
            className="rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500"
            style={{
              background: "linear-gradient(145deg,#7d37ff,#ffaea5)",
              color: "#ffff",
            }}
          >
            <svg
              className="rotate-180"
              width="22px"
              height="22px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              ></path>
              <path
                fill="#000000"
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              ></path>
            </svg>
          </div>
          <p className="translate-x-5 sm:translate-x-6">Get Started </p>
        </button>
      </a>
    </section>
  );
};

export default CTA;
