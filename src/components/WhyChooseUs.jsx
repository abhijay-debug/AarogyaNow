import { div } from "framer-motion/client";
import React, { useRef, useEffect, useState } from "react";

const PeekCarousel = () => {
  const carouselRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const images = [
    { src: "/images/wta1.png", name: "Snap & Rate Your Meal" },
    { src: "/images/wta2.png", name: "Stress, Work & Consistency" },
    { src: "/images/wta3.png", name: "Anxiety & Sleep Support" },
    { src: "/images/wta9.png", name: "Workout from Available Equipment" },
    { src: "/images/wta5.png", name: "Weekly Progress Report" },
    { src: "/images/wta8.png", name: "Daily Plan : Meals + Workout" },
    { src: "/images/wta4.png", name: "24X7 Coach On Your Phone" },
    { src: "/images/wta7.png", name: "Restaurant Macro Builder" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) setContainerWidth(carouselRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop slideWidth fixed (same as original)
  const desktopSlideWidth = containerWidth * 0.4; // Desktop slide width
  const desktopSidePeek = containerWidth * 0.01;

  // Mobile / tablet slide width
  let slideWidth = desktopSlideWidth;
  let sidePeek = desktopSidePeek;

  if (window.innerWidth < 76) {
    slideWidth = containerWidth * 0.7; // Mobile: increase width so image large
    sidePeek = containerWidth * 0.11; // Peek on sides
  } else if (window.innerWidth < 1024) {
    slideWidth = containerWidth * 0.6; // Tablet
    sidePeek = containerWidth * 0.15;
  }

  return (
    <div>
        <h1 className="text-[1.8rem] mt-6 text-center md:text-[2.4rem] max-w-[800px] mx-auto font-semibold leading-[1.2]">
        Reason to Choose Us
      </h1>
        <div className="overflow-x-auto max-w-4xl mx-auto scrollbar-hide pt-5 lg:py-10 px-0" ref={carouselRef}>
      <div
        className="flex items-center"
        style={{ padding: `0px ${sidePeek}px` }}
      >
        {images.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 relative"
            style={{ width: `${slideWidth}px` }}
            
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-full h-auto md:h-[480px] lg:h-[480px] object-cover rounded-xl"
            />
            {/* Text overlay at top */}
            <div className="absolute top-1 left-1/2  text-center -translate-x-1/2 text-black bg-white/60 shadow-lg px-3 py-1 rounded-md text-[0.7rem] lg:text-sm font-medium">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PeekCarousel;
