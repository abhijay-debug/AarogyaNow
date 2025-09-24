import React from 'react';
import { motion } from 'framer-motion';

const featuresData = [
  { icon: "📸", title: "Meal Snap Feedback", desc: "Snap a picture of your meal for instant nutrition analysis and tips." },
  { icon: "🥕", title: "Fridge Meal Planner", desc: "AI suggests recipes from your fridge ingredients, reducing waste." },
  { icon: "💪", title: "Smart Workouts", desc: "Tailored workout routines based on your equipment." },
  { icon: "🎥", title: "Technique Review", desc: "Upload exercise videos for AI feedback on form and safety." },
  { icon: "📊", title: "Daily & Weekly Insights", desc: "Daily performance ratings and weekly actionable guidance." },
  { icon: "🔔", title: "24/7 Check-ins", desc: "Motivational nudges and reminders to keep you on track." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, type: "spring" },
  }),
};

const Features = () => {
  return (
    <section id="features" className="relative py-20 px-6 z-10 overflow-hidden">
      
      {/* Background Gradient Blobs */}
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

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <small className="block text-[0.8rem] tracking-[3px] uppercase text-black font-semibold mb-3">
          Features
        </small>
        <h2 className="text-[2.5rem] md:text-[3rem] max-w-[800px] mx-auto font-semibold leading-[1.2]">
          Everything You Need in One Platform
        </h2>
      </div>

      {/* Features Grid */}
      <div className="lg:flex w-full flex-wrap items-center justify-center gap-4">
        {/* First Row: 2 large boxes */}
        {featuresData.slice(0,2).map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true }}
            className="col-span-1 md:col-span-2 mb-4 lg:w-1/4 lg:col-span-2 p-6 rounded-3xl bg-white/10 backdrop-blur-md shadow-xl hover:shadow-pink-400/40 transition-all duration-500 group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 flex items-center justify-center text-2xl mb-5">
              {feature.icon}
            </div>
            <h4 className="text-black font-semibold text-xl mb-3">{feature.title}</h4>
            <p className="text-black/80 font-medium text-sm">{feature.desc}</p>
          </motion.div>
        ))}

        {/* Second Row: 3 smaller boxes */}
        {featuresData.slice(2).map((feature, i) => (
          <motion.div
            key={i+2}
            custom={i+2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true }}
            className="col-span-1 p-6 lg:w-1/3 z mb-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-pink-400/30 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 flex items-center justify-center text-2xl mb-4">
              {feature.icon}
            </div>
            <h4 className="text-black font-semibold text-xl mb-2">{feature.title}</h4>
            <p className="text-black/80 font-medium text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features;
