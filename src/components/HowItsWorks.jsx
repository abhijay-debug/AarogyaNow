import React from 'react';
import { motion } from 'framer-motion';

const stepVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

const Step = ({ num, title, children, index }) => (
  <motion.div
    className="flex-1 min-w-[260px] p-[40px] text-center shadow rounded-xl glass"
    variants={stepVariant}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    whileHover="hover"
  >
    <div className="text-[2rem] w-[56px] h-[56px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 text-white mx-auto flex items-center justify-center font-bold mb-5">
      {num}
    </div>
    <h4 className="text-black font-semibold text-[1.2rem] mb-2">{title}</h4>
    <p className="text-black/70 font-semibold text-[0.9rem]">{children}</p>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section id="how" className="mt-10 px-5  section">
      <div className="text-center mb-[60px]">
        <small className="block text-[0.8rem] font-semibold tracking-[3px] uppercase bg-clip-text bg-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 mb-3">
          Steps
        </small>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[2.5rem] font-semibold max-w-[800px] mx-auto leading-[1.3]"
        >
          How It Works
        </motion.h2>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <Step index={0} num={1} title="Connect on WhatsApp">
          Say hello to your AI coach. You don't need to install or learn any new app – just start chatting.
        </Step>

        <Step index={1} num={2} title="Share Photos &amp; Data">
          Send meal pictures, fridge shots, exercise videos and other metrics. Our AI understands your lifestyle.
        </Step>

        <Step index={2} num={3} title="Get Tailored Plans">
          Receive personalised meal, workout, sleep and stress strategies based on science and your goals.
        </Step>

        <Step index={3} num={4} title="Track &amp; Improve">
          Enjoy daily scores and weekly insights. Your coach adapts recommendations to keep you motivated.
        </Step>
      </div>
    </section>
  );
}
