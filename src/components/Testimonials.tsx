import React, { useState, useEffect, useRef } from "react";
import { testimonialsData } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const length = testimonialsData.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isHovered, activeIndex]);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden"
    >
      {/* Absolute vectors */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="testimonials-heading">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full uppercase tracking-wider">
            Parent & Student Voice
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Loved by 500+ Local Families
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            Read first-hand accounts of students mastering logical concepts and rediscovering active classroom confidence.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          id="testimonials-carousel"
        >
          {/* Main Card Wrapper */}
          <div className="overflow-hidden rounded-[2rem] bg-white dark:bg-slate-850 shadow-xl border border-slate-100 dark:border-slate-800/80 p-8 md:p-12">
            <div className="absolute top-6 right-8 text-slate-100 dark:text-slate-800 pointer-events-none">
              <Quote className="w-24 h-24 stroke-[3]" />
            </div>

            <div className="relative z-10 min-h-[250px] flex flex-col justify-between">
              {/* Star Rating & Content */}
              <div className="space-y-6">
                <div className="flex gap-1" id="stars-row">
                  {Array.from({ length: testimonialsData[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-medium italic">
                  "{testimonialsData[activeIndex].content}"
                </p>
              </div>

              {/* Profile Meta Row */}
              <div className="flex items-center gap-4 pt-8 mt-8 border-t border-slate-50 dark:border-slate-800/60">
                <img
                  src={testimonialsData[activeIndex].avatar}
                  alt={testimonialsData[activeIndex].name}
                  className="w-16 h-16 rounded-2xl object-cover shadow-sm border border-slate-100 dark:border-slate-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {testimonialsData[activeIndex].name}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {testimonialsData[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-30px] z-20">
            <button
              onClick={prevSlide}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous Testimonial"
              id="testimonial-prev-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-30px] z-20">
            <button
              onClick={nextSlide}
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Next Testimonial"
              id="testimonial-next-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots Navigator */}
        <div className="flex items-center justify-center gap-2 mt-8" id="carousel-dots">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 dark:bg-slate-700"
              }`}
              aria-label={`Slide to Testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
