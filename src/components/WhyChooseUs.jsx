import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* Optional: add this CSS in global file if you want hidden scrollbar
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar { display: none; }
*/

const ScrollMarquee = () => {
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
    <div className="overflow-hidden max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-[2.2rem] text-center md:text-[2.6rem] max-w-[800px] mx-auto font-semibold leading-[1.2] mb-6">
        Reason To Choose Us
      </h1>

      <div
        ref={carouselRef}
        className="scrollbar-hide flex items-center overflow-x-auto  scroll-smooth py-"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {/* Image 1 */}
        <div className="flex-shrink-0 w-[80vw] ml-6 sm:w-[60vw] md:w-1/3 scroll-snap-align-center">
          <img
            src="/images/wta1.png"
            alt="wta1"
            className="w-full h-[380px] md:h-[320px] sm:h-[300px] object-cover rounded-xl"
          />
        </div>

        {/* Image 2 */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-1/3 scroll-snap-align-center">
          <img
            src="/images/wta2.png"
            alt="wta2"
            className="w-full h-[420px] md:h-[370px] sm:h-[300px] object-cover rounded-xl"
          />
        </div>

        {/* Image 3 */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-1/3 scroll-snap-align-center">
          <img
            src="/images/wta3.png"
            alt="wta3"
            className="w-full h-[420px] md:h-[370px] sm:h-[300px] object-cover rounded-xl"
          />
        </div>

        {/* Image 4 */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-1/3 scroll-snap-align-center">
          <img
            src="/images/wta5.png"
            alt="wta5"
            className="w-full h-[420px] md:h-[380px] sm:h-[300px] object-cover rounded-xl"
          />
        </div>

        {/* Image 5 */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-1/3 scroll-snap-align-center">
          <img
            src="/images/wta8.png"
            alt="wta8"
            className="w-full h-[420px] md:h-[390px] sm:h-[300px] object-cover rounded-xl"
          />
        </div>

        {/* Image 6 */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-1/3 scroll-snap-align-center">
          <img
            src="/images/wta9.png"
            alt="wta9"
            className="w-full h-[420px] md:h-[390px] sm:h-[350px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Buttons for scroll */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => scroll("left")}
          className="bg-white text-black px-4 py-2 rounded-full shadow"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-white text-black  px-4 py-2 rounded-full shadow"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default ScrollMarquee;
