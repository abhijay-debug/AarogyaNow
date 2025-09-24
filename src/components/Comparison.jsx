import React from "react";
import { motion } from "framer-motion";

const ComparisonChart = () => {
  const options = [
    { label: "Domain Focus", green:"Broad knowledge base covering all topics but not health-specific.", blue: "Purpose-built for wellness — nutrition, exercise & health." },
    { label: "Context & Memory", green: "Little to no memory of past conversations.", blue: "Remembers meals, workouts, goals and preferences for continuous personalization." },
    { label: "Accuracy", green: "May provide unreliable answers.", blue: "Evidence-driven guidance aligned with expert principles." },
    { label: "Multi-Modal Capabilities", green:"Primarily text-based.", blue: "Photo/video analysis for meals and workouts with instant feedback." },
    { label: "Engagement", green:"Reactive only.", blue: "Proactive check-ins, nudges, and reminders." },
    { label: "Coach Personality", green: "One-size-fits-all", blue: "Multiple AI personas to match your style." },
    { label: "Platform", green:"Separate app or website.", blue: "Runs entirely on WhatsApp; familiar, zero-friction interface." },
    { label: "Cost Efficiency", green: "May require multiple subscriptions.", blue: "All-in-one bundled solution at competitive pricing." },
  ];

  return (
    <div id="comparison" className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <h2 className="text-[2rem] md:text-[2.4rem] font-bold mb-12 text-center text-black">COMPARISON </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
        {/* Product Green */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-5 rounded-full mb-3 w-16 h-16 grid place-items-center shadow-lg">
            <span className="text-white text-lg font-bold">▼</span>
          </div>
          <p className="font-semibold text-black text-lg">Popular AI Tools</p>
          <p className="text-gray-500 text-center text-sm mt-2">
            Covers general topics but not health-focused.
          </p>
        </motion.div>

        {/* VS */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-700"
        >
          VS
        </motion.div>

        {/* Product Blue */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex flex-col items-center hover:scale-105 transition-transform"
        >
          <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-5 rounded-full mb-3 w-16 h-16 grid place-items-center shadow-lg">
            <span className="text-white text-lg font-bold">▼</span>
          </div>
          <p className="font-semibold text- text-lg">Our Company</p>
          <p className="text-gray-500 text-center text-sm mt-2">
            Personalized, health-focused AI coaching.
          </p>
        </motion.div>
      </div>

      {/* Options */}
      <div className="space-y-6">
        {options.map((opt, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="lg:flex lg:flex-row flex flex-col items-center gap-4 bg-white/10 p-5 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            {/* Green Bar */}
            <div className="flex-1">
              <div className="bg-purple-400 text-center text-white rounded-xl p-4 shadow-inner text-sm font-medium">
                {opt.green}
              </div>
            </div>

            {/* Option Label */}
            <div className="w-32 text-center py-4 font-semibold text-gray-800">{opt.label}</div>

            {/* Blue Bar */}
            <div className="flex-1">
              <div className="bg-blue-400 rounded-xl text-center p-4 shadow-inner text-sm font-medium text-white">
                {opt.blue}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonChart;
