import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Pricing = () => {
  const plans = [
    ["1 Month", "₹2,999 / $35", "Full access to our AI coaching for 30 days."],
    ["3 Months", "₹6,000 / $70", "Save more and see measurable progress."],
    ["6 Months", "₹10,000 / $120", "Commit to lasting change with our best value."],
    [
      "12 Months",
      "₹18,000 / $200",
      "Unlock full transformation and biggest savings.",
    ],
  ];

  const gradientControls = useAnimation();

  useEffect(() => {
    gradientControls.start({
      backgroundPositionX: ["0%", "100%", "0%"],
      backgroundPositionY: ["0%", "100%", "0%"],
      transition: { duration: 1, repeat: Infinity, ease: "linear" },
    });
  }, [gradientControls]);

  return (
    <section id="pricing" className="py-[60px] section px-[20px] relative">
      <div className="text-center mb-[10px]">
        <small className="block text-[0.8rem] tracking-[3px] uppercase text-black font-semibold mb-[12px]">
          Plans
        </small>
        <h2 className="text-[2.5rem] max-w-[800px] font-semibold mx-auto leading-[1.3]">
          Invest in Your Well-Being
        </h2>
      </div>

      <div className="grid gap-[40px] mt-20 md:grid-cols-2 lg:grid-cols-4 pricing-grid relative">
        {plans.map((p, i) => (
          <div
            key={i}
            className="p-[50px] shadow rounded text-center glass plan relative overflow-hidden"
          >
            {/* Animated gradient blob */}
            <motion.div
              animate={gradientControls}
              className="absolute -top-10 -left-10 w-[300px] h-[300px] rounded-full opacity-60"
              style={{
                background: "linear-gradient(45deg, #7d37ff, #ffaea5, #37ffb0, #ffaec5)",
                backgroundSize: "400% 400%",
                filter: "blur(100px)",
              }}
            />
            <motion.div
              animate={gradientControls}
              className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full opacity-60"
              style={{
                background: "linear-gradient(45deg, #ff9a9e, #fad0c4, #a18cd1, #fbc2eb)",
                backgroundSize: "400% 400%",
                filter: "blur(100px)",
              }}
            />

            <h4 className="text-black font-semibold text-[1.4rem] mb-[10px]">{p[0]}</h4>
            <div className="text-[2.4rem] text-black font-bold mb-[10px]">{p[1]}</div>
            <p className="text-black font-semibold text-[0.85rem] mb-[30px]">{p[2]}</p>
            <a href="#pricing" className="block">
              <button
                type="button"
                className="bg-white text-center shadow w-44 sm:w-42 md:w-40 rounded-2xl h-14 relative text-black text-lg sm:text-xl font-semibold border-4 border-white group mx-auto"
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
                <p className="translate-x-5 sm:translate-x-4">Choose</p>
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
