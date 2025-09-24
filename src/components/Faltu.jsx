import React from "react";

const FeatureCard = ({ title, description }) => (
  <div className="bg-[#0c0e1a] border border-[#3b3f5c] rounded-xl p-5 shadow-lg hover:shadow-[#855afc]/50 transition">
    <h3 className="text-xl font-semibold text-[#ffaec5] mb-2">{title}</h3>
    <p className="text-[#d7cce5] text-sm">{description}</p>
  </div>
);

const CoachCard = ({ name, origin, personality, styleDescription }) => (
  <div className="bg-[#0c0e1a] border border-[#3b3f5c] rounded-xl p-5 text-center shadow hover:shadow-[#855afc]/50 transition">
    <h4 className="text-[#ffaec5] font-semibold text-lg">{name} <span className="text-[#d7cce5] text-sm">({origin})</span></h4>
    <p className="text-[#d7cce5] text-sm mt-1 font-medium">{personality}</p>
    <p className="text-[#d7cce5] text-xs mt-2">{styleDescription}</p>
  </div>
);

export default function HealthCoachPage() {
  const features = [
    {
      title: "Instant Meal Feedback via Photo",
      description: "Snap a picture of your meal to get an instant nutrition analysis and a 1–10 quality score, with tips on improving it. It’s like having a nutritionist judge your plate instantly!"
    },
    {
      title: "Meal Planning from Your Fridge",
      description: "Take a photo of your fridge contents and the AI suggests recipes or meal plans using available ingredients, saving time and reducing food waste."
    },
    {
      title: "Workout Plans from an Equipment Snap",
      description: "Send a picture of your gym equipment or home setup, and the AI generates a tailored workout routine optimized for your goals."
    },
    {
      title: "AI Workout Form Check (Video Upload)",
      description: "Upload a short video of an exercise, and the AI provides a score (1–10) with specific feedback on technique, form corrections, and injury prevention."
    },
    {
      title: "Daily Ratings & Weekly Report Cards",
      description: "Receive daily performance ratings and a weekly report highlighting trends, completed workouts, calorie intake, and actionable guidance."
    },
    {
      title: "Accountability & Support via WhatsApp",
      description: "Proactive reminders, motivational messages, and personalized nudges keep you accountable, making your WhatsApp a personal health assistant."
    }
  ];

  const coaches =[
    {
      name: "Ananya",
      origin: "Indian",
      personality: "Empathetic, nurturing, detail-oriented",
      styleDescription: "Speaks warmly and explains the “why” behind food choices. Uses simple analogies to make healthy eating easy."
    },
    {
      name: "Adam",
      origin: "American",
      personality: "Disciplined, no-nonsense motivator",
      styleDescription: "High energy and direct instructions — tough-love style for workout accountability."
    },
    {
      name: "Alexis",
      origin: "American",
      personality: "Supportive friend, celebrates small wins",
      styleDescription: "Conversational, encouraging; cheers progress and maintains momentum."
    },
    {
      name: "Andrew",
      origin: "American",
      personality: "Analytical, scientific",
      styleDescription: "Evidence-driven approach for metabolic & diabetes management."
    },
    {
      name: "Anthony",
      origin: "American",
      personality: "Gentle, steady, reassuring",
      styleDescription: "Heart-health focused, emphasizes consistency and calm guidance."
    },
    {
      name: "Ankita",
      origin: "Indian",
      personality: "Compassionate, understanding",
      styleDescription: "Postpartum-safe guidance prioritizing recovery & gradual strength."
    },
    {
      name: "Avni",
      origin: "Indian",
      personality: "Calm, mindful, wise",
      styleDescription: "Mental wellness guidance: breathing, journaling, micro-mindfulness prompts."
    },
    {
      name: "Amber",
      origin: "American",
      personality: "Energetic, hype-person",
      styleDescription: "Bridal/event prep — timeline-driven workouts, beauty & posture tips."
    },
    {
      name: "Aditya",
      origin: "Indian",
      personality: "Balanced, spiritual-scientific",
      styleDescription: "Ayurveda + modern science; cultural storytelling to explain remedies."
    },
    {
      name: "Arthur",
      origin: "American",
      personality: "Patient, precise, safety-first",
      styleDescription: "Rehab and injury-prevention: form corrections and modifications."
    }
  ] ;

  const comparisonRows = [
    { aspect: "Domain Focus", generic: "Broad knowledge base covering all topics but not health-specific.", coach: "Purpose-built for wellness — nutrition, exercise & health." },
    { aspect: "Context & Memory", generic: "Little to no memory of past conversations.", coach: "Remembers meals, workouts, goals and preferences for continuous personalization." },
    { aspect: "Accuracy", generic: "May provide unreliable answers.", coach: "Evidence-driven guidance aligned with expert principles." },
    { aspect: "Multi-Modal Capabilities", generic: "Primarily text-based.", coach: "Photo/video analysis for meals and workouts with instant feedback." },
    { aspect: "Engagement", generic: "Reactive only.", coach: "Proactive check-ins, nudges, and reminders." },
    { aspect: "Coaching Personality", generic: "One-size-fits-all.", coach: "Multiple AI personas to match your style." },
    { aspect: "Platform", generic: "Separate app or website.", coach: "Runs entirely on WhatsApp; familiar, zero-friction interface." },
    { aspect: "Cost Efficiency", generic: "May require multiple subscriptions.", coach: "All-in-one bundled solution at competitive pricing." }
  ];

  return (
    <div className="bg-[#0a0026] text-white min-h-screen p-6 md:p-12">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ffaec5] mb-4">One-Stop AI Health & Fitness Coaching on WhatsApp</h1>
          <p className="text-[#d7cce5] text-lg leading-relaxed">
            Yes – it’s truly a one-stop shop for wellness delivered via WhatsApp. Our service brings nutrition, fitness, and health coaching together in a single chat-based platform.
            Track meals and workouts, get personalized advice, and receive holistic support — all in one place.
          </p>
        </header>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#ffaec5] mb-6">Core Features & Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, idx) => (
              <FeatureCard key={idx} title={f.title} description={f.description} />
            ))}
          </div>
        </section>

        {/* AI Coaching Personas */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#ffaec5] mb-6">Personalized AI Coaching Personas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coaches.map((c, idx) => (
              <CoachCard 
                key={idx} 
                name={c.name} 
                origin={c.origin} 
                personality={c.personality} 
                styleDescription={c.styleDescription} 
              />
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#ffaec5] mb-6">How Our AI Health Coach Compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-[#3b3f5c] text-sm">
              <thead>
                <tr className="bg-[#1a1d3a]">
                  <th className="border border-[#3b3f5c] px-4 py-2 text-left">Aspect</th>
                  <th className="border border-[#3b3f5c] px-4 py-2 text-left">Generic AI Chatbots</th>
                  <th className="border border-[#3b3f5c] px-4 py-2 text-left">Our WhatsApp AI Coach</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-[#0f1024]" : "bg-[#111236]"}>
                    <td className="border border-[#3b3f5c] px-4 py-2">{row.aspect}</td>
                    <td className="border border-[#3b3f5c] px-4 py-2">{row.generic}</td>
                    <td className="border border-[#3b3f5c] px-4 py-2">{row.coach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <p className="text-[#d7cce5] text-lg leading-relaxed">
            Our WhatsApp-based AI coach is not just another chatbot — it’s a specialized, science-backed health and fitness mentor that remembers you, engages you proactively, and provides holistic guidance. 
            Combining AI convenience with real coaching personalization, everything you need for your health journey is now just a message away.
          </p>
        </section>

      </div>
    </div>
  );
}
