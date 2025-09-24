import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const coaches = [
  { img: "/images/abhay.jpg", name: "Abhay",Personality:"Fitness Rehab & Injury Prevention " },
  { img: "/images/Aditya.jpg", name: "Aditya",Personality:"Diabetes & Metabolic" },
  { img: "/images/Aisha.jpg", name: "Aisha",Personality:"Weight Loss Specialist " },
  { img: "/images/Ajay.jpg", name: "Ajay",Personality:"Blood Pressure & Heart " },
  { img: "/images/Amrita.jpg", name: "Amrita",Personality:"Fitness Rehab & Injury Prevention" },
  { img: "/images/Ankita.jpg", name: "Ankita" ,Personality:"Postpartum & Women's Health  " },
  { img: "/images/Ananya.jpg", name: "Ananya",Personality:"Nutritionist (Diet & Nutrition) " },
  { img: "/images/Arjun.jpg", name: "Arjun" ,Personality:"Body Transformation " },
  { img: "/images/Aparna.jpg", name: "Aparna" ,Personality:"Postpartum And Women's Health " },
  { img: "/images/Avni.jpg", name: "Avni",Personality:"Strees & Mental Wellness " },
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
       
      <h1 className="text-[1.8rem] text-center md:text-[2.4rem] max-w-[800px] mx-auto font-semibold leading-[1.2]">
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
                <p className="text-black/60 text-sm">{coach.Personality}</p>
              </div>
               
            </div>
          ))}
        </div>
      </div>

      {/* Buttons below carousel */}
      <div className="flex justify-center gap-6 mt-">
        <button
          onClick={() => scroll("left")}
          className="  shadow-md p-3 rounded-full"
          style={{
                background: "linear-gradient(145deg,#7d37ff,#ffaea5)",
                color: "#ffff",
              }}
        >
          <FaChevronLeft className="" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white/80 hover:bg-white shadow-md p-3 rounded-full"
          style={{
                background: "linear-gradient(145deg,#7d37ff,#ffaea5)",
                color: "#ffff",
              }}
        >
          <FaChevronRight className="" />
        </button>
      </div>
    </div>
  );
};

export default ManualCarousel;
