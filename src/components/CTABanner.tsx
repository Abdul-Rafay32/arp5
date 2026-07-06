import React from "react";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

interface CTABannerProps {
  onOpenDemo: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenDemo }) => {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900" id="cta-banner-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white py-12 px-8 md:p-16 shadow-2xl shadow-blue-500/10">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 md:space-y-8 flex flex-col items-center">
            {/* Animated badge icon */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-blue-100">
                Limited Slots Remaining for Summer Term
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Unlock Your Child's True Academic Potential
            </h2>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl">
              Don't let them fall behind. Schedule a friendly diagnostic evaluation and visual demo session today. Absolutely free, no commitments.
            </p>

            {/* Trigger Button */}
            <button
              onClick={onOpenDemo}
              className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-50 font-extrabold rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-[-1px] active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer text-base"
              id="banner-cta-demo"
            >
              <Calendar className="w-5 h-5 text-blue-600" />
              Book Free Demo Class
              <ArrowRight className="w-5 h-5 text-slate-700" />
            </button>

            {/* Small note */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-blue-100/70 pt-2">
              <span>✓ 100% Free Consultation</span>
              <span>•</span>
              <span>✓ Personal Cognitive Analysis Report Included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTABanner;
