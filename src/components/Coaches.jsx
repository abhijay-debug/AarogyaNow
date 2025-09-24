import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const coaches = [
  { img: "/images/abhay.jpg", name: "Abhay",Personality:"Empathetic, nurturing, detail-oriented " },
  { img: "/images/Aditya.jpg", name: "Aditya",Personality:"Disciplined, no-nonsense motivator" },
  { img: "/images/Aisha.jpg", name: "Aisha",Personality:"Supportive friend, celebrates small wins" },
  { img: "/images/Ajay.jpg", name: "Ajay",Personality:"Analytical,Scientific,Clam" },
  { img: "/images/Amrita.jpg", name: "Amrita",Personality:"Gentle ,Steady,Reassuring" },
  { img: "/images/Ananya.jpg", name: "Ananya",Personality:"Compassionate, understanding " },
  { img: "/images/Arjun.jpg", name: "Arjun" ,Personality:"Calm, mindful, wise " },
  { img: "/images/Ankita.jpg", name: "Ankita" ,Personality:"Energetic, stylish, hype-person " },
  { img: "/images/Aparna.jpg", name: "Aparna" ,Personality:"Balanced, spiritual-scientific blend " },
  { img: "/images/Avni.jpg", name: "Avni",Personality:"Patient, precise, safety-first " },
];

const ManualCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 3; 
      if (direction === "left") {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div id="coaches" className="relative max-w-6xl mx-auto px-4 py-10">
       <small className="block text-[0.8rem] text-center font-semibold tracking-[3px] uppercase bg-clip-text bg-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 mb-3">
          Meet
        </small>
      <h1 className="text-[2.5rem] text-center md:text-[3rem] max-w-[800px] mx-auto font-semibold leading-[1.2]">
        Meet Your Expert Coaches
      </h1>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="scrollbar-hide flex gap-6 overflow-x-auto py-10 scroll-smooth"
        >
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full md:w-1/3 sm:w-1/2 xs:w-3/4 rounded-xl shadow-lg flex flex-col items-center"
            >
              <img
                src={coach.img}
                alt={coach.name}
                className="w-full h-90 object-cover rounded-xl"
              />
              {/* Name below image */}
              <div className="mt-3 w-full text-center bg-white/80 py-2 rounded-lg shadow-sm font-semibold text-gray-800">
                {coach.name}
                <p>{coach.Personality}</p>
              </div>
               
            </div>
          ))}
        </div>
      </div>

      {/* Buttons below carousel */}
      <div className="flex justify-center gap-6 mt-">
        <button
          onClick={() => scroll("left")}
          className="bg-white/80 hover:bg-white shadow-md p-3 rounded-full"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white/80 hover:bg-white shadow-md p-3 rounded-full"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default ManualCarousel;
