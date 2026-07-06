import React from "react";
import { featuresData } from "../data";
import { LucideIcon } from "./LucideIcon";

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="why-us-heading">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full uppercase tracking-wider">
            Why Choose BrightMinds Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            An Education Experience Crafted for Your Child
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            We move away from mass assembly-line lecturing to prioritize genuine interest, interactive dialogue, and detailed personal guidance.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="features-grid">
          {featuresData.map((feature, idx) => (
            <div
              key={feature.id}
              className="relative group bg-white dark:bg-slate-850 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/40 transition-all duration-350 flex flex-col items-start hover:translate-y-[-4px]"
              id={`feature-card-${idx}`}
            >
              {/* Card top decorative accent line */}
              <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${feature.colorClass}`}>
                <LucideIcon name={feature.iconName} className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Arrow Indicator */}
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-4px] group-hover:translate-x-0">
                <span>Learn more</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
