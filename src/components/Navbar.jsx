import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className=" flex justify-between items-center w-full p-4 md:p-6 bg-transparent z-50">
        {/* Left Section */}
        <div className="w-fit md:w-[60vw] shadow gap-6 md:gap-10 items-center bg-white flex px-3 md:px-6 py-2 rounded-2xl md:rounded-3xl md:ml-20">
          {/* Logo */}
          <div className="text-[1.2rem] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 bg-clip-text text-transparent md:text-[1.6rem] font-bold">Healo Fit</div>

          {/* Navbar - hidden in mobile */}
          <nav className="hidden md:flex">
            <ul className="flex gap-6 md:gap-8 list-none text-sm md:text-[0.9rem]">
              {/* <li>
                <a href="#mission" className="hover:text-[#ffaec5]">Mission</a>
              </li> */}
              <li>
                <a href="#how" className="hover:text-[#ffaec5]">How It Works</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#ffaec5]">Features</a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-[#ffaec5]">Coaches</a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-[#ffaec5]">Compare</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#ffaec5]">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#ffaec5]">Reviews</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex bg-white  px-3 md:px-4 py-2 rounded-2xl md:rounded-3xl mr-4 md:mr-20 gap-3 md:gap-4 items-center">
          {/* Button */}
          <a href="#pricing" className="hidden sm:block">
            <button
              type="button"
              className="bg-white shadow text-center w-32 md:w-48 rounded-xl md:rounded-2xl h-12 md:h-14 relative text-black text-base md:text-xl font-semibold border-2 md:border-4 border-white group"
            >
              <div
                className="rounded-lg md:rounded-xl h-10 md:h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500"
                style={{ background: "linear-gradient(145deg,#7d37ff,#ffaea5)" }}
              >
                <svg
                  className="rotate-180"
                  width="20px"
                  height="20px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path>
                  <path
                    fill="#000000"
                    d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  ></path>
                </svg>
              </div>
              <p className="translate-x-4">Get Started</p>
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block text-black z-[1001] md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu size={28} />
          </button>
        </div>
      </header>

      {/* Drawer + Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-[10000]"
              onClick={() => setIsOpen(false)}
            ></motion.div>

            {/* Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-11/12 max-w-[420px] bg-white z-[10001] p-6"
              aria-modal="true"
              role="dialog"
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-black"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <HiX size={28} />
              </button>

              {/* Drawer Menu */}
              <nav className="mt-12">
                <ul className="flex flex-col gap-6">
                  {/* <li>
                    <a href="#mission" onClick={() => setIsOpen(false)} className="text-black text-lg">Mission</a>
                  </li> */}
                  <li>
                    <a href="#how" onClick={() => setIsOpen(false)} className="text-black text-lg">How It Works</a>
                  </li>
                  <li>
                    <a href="#features" onClick={() => setIsOpen(false)} className="text-black text-lg">Features</a>
                  </li>
                  <li>
                    <a href="#coaches" onClick={() => setIsOpen(false)} className="text-black text-lg">Coaches</a>
                  </li>
                  <li>
                    <a href="#comparison" onClick={() => setIsOpen(false)} className="text-black text-lg">Compare</a>
                  </li>
                  <li>
                    <a href="#pricing" onClick={() => setIsOpen(false)} className="text-black text-lg">Pricing</a>
                  </li>
                  <li>
                    <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-black text-lg">Reviews</a>
                  </li>

                  {/* CTA inside drawer */}
                  <li className="mt-4">
                  <a href="#pricing" className="block" onClick={() => setIsOpen(false)} >
          <button
            type="button"
            className="bg-white text-center w-48 sm:w-54 md:w-60 rounded-2xl h-14 relative text-black text-lg sm:text-xl font-semibold border-4 border-white group mx-auto"
          >
            <div
              className="rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300  h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500"
              
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
            <p className="translate-x-5 sm:translate-x-6">Start Free Trial</p>
          </button>
        </a>
                  </li>
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
