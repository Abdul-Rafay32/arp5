import React from "react";
import { statsData } from "../data";
import { LucideIcon } from "./LucideIcon";

export const SuccessStats: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-950 text-white relative overflow-hidden"
      id="success-stats"
    >
      {/* Decorative vector overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Mini Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/50 border border-blue-800/60 rounded-full uppercase tracking-wider">
            Trust & Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Our Record Speaks for Itself
          </h2>
          <p className="text-sm sm:text-base text-blue-200/80">
            Backed by quantitative score improvements, parent recommendation surveys, and stellar academic evaluations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="stats-grid-container">
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              className="relative p-6 md:p-8 bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800/80 shadow-lg text-center flex flex-col items-center justify-between h-full hover:border-slate-700/80 transition-all group"
              id={`stat-card-${idx}`}
            >
              {/* Card top gradient indicator */}
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <LucideIcon name={stat.iconName} className="w-6 h-6" />
              </div>

              <div className="space-y-2 flex-grow">
                {/* Big Metric Value */}
                <div className="text-4xl md:text-5xl font-black tracking-tight text-white bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text">
                  {stat.value}
                </div>

                {/* Metric Label */}
                <div className="text-sm font-bold text-blue-300">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SuccessStats;
