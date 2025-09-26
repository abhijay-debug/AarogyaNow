import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative bg-white/70   flex flex-col  items-center justify-center text-center px-5 text-black overflow-hidden">
      {/* Animated Gradient Blobs */}
      <Navbar />
      <motion.div
        className="absolute -top-32 -left-20 w-[350px] h-[350px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 rounded-full blur-3xl opacity-40 -z-10"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-20 w-[450px] h-[450px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 rounded-full blur-3xl opacity-40 -z-10"
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="w-full max-w-[900px] flex flex-col py-4 items-center justify-center text-center mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl text-center md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          One-Stop AI Health & Fitness{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
            Coaching on WhatsApp
          </span>
        </h1>
        <p className="text-base sm:text-lg text-center md:text-xl mb-8">
          Your personal coach for nutrition, workouts & lifestyle — all through
          a simple WhatsApp chat.
        </p>

        {/* Features */}
        {/* <ul className="flex flex-col items-start    justify-center text-center gap-3 mb-10  max-w-md mx-auto">
          <li className="flex items-center text-center gap-2 text-sm sm:text-base">
            <FaCheckCircle className="text-green-400" /> Track meals with photos
          </li>
          <li className="flex items-center gap-2 text-sm sm:text-base">
            <FaCheckCircle className="text-green-400" /> Personalized fitness &
            health guidance
          </li>
          <li className="flex items-center gap-2 text-sm sm:text-base">
            <FaCheckCircle className="text-green-400" /> No new apps, just
            WhatsApp
          </li>
          <li className="flex items-center gap-2 text-sm sm:text-base">
            <FaCheckCircle className="text-green-400" /> Texts, photos & videos
            — everything in one chat
          </li>
        </ul> */}

        {/* CTA Button */}
        <a href="#pricing" className="block">
          <button
            type="button"
            className="bg-white shadow text-center w-44 sm:w-52 md:w-50 rounded-2xl h-14 relative text-black text-lg sm:text-xl font-semibold border-4 border-white group mx-auto"
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
            <p className="translate-x-4 sm:translate-x-4">Get Started </p>
          </button>
        </a>
      </div>
    </section>
  );
}
