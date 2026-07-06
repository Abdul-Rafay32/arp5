import React from "react";
import { ArrowRight, Play, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import heroIllustration from "../assets/images/hero_learning_illustration_1783325722975.jpg";

interface HeroProps {
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const handleScrollToCourses = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      window.scrollTo({
        top: coursesSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-radial from-blue-50/70 via-white to-white dark:from-slate-950/40 dark:via-slate-900 dark:to-slate-900"
    >
      {/* Background blobs for subtle depth */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-400/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Area */}
          <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-left" id="hero-content">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/30 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-spin-slow" />
              <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                Premium 1:8 Cohort Coaching for Kids
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] md:leading-[1.15]">
                Where Learning Meets <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                  Joy & Curiosity.
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Empower your child with active problem-solving skills, deep conceptual mastery, and lifelong confidence. BrightMinds Academy offers premium personalized mentorship in school academic subjects, test preparation, digital skills, and spoken English.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer text-base"
                id="hero-primary-cta"
              >
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleScrollToCourses}
                className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-800/80 dark:border-slate-700 dark:text-slate-200 font-bold rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer text-base"
                id="hero-secondary-cta"
              >
                Explore Courses
              </button>
            </div>

            {/* Mini Trust Badges */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-x-6 gap-y-3" id="hero-trust-indicators">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
                <span>Max 8 kids per cohort</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
                <span>1-on-1 progress reviews</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500" />
                <span>Zero-risk free trial</span>
              </div>
            </div>
          </div>

          {/* Graphics Area */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end" id="hero-graphics">
            {/* Ambient decorative glowing frames behind the illustration */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] opacity-20 filter blur-xl animate-pulse-slow" />

            <div className="relative w-full max-w-md lg:max-w-none bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-2xl border border-slate-100/60 dark:border-slate-800/80 transform hover:scale-[1.01] transition-transform duration-500">
              <img
                src={heroIllustration}
                alt="Happy Child Learning - BrightMinds Academy"
                className="rounded-[2rem] w-full object-cover shadow-inner"
                referrerPolicy="no-referrer"
                id="hero-main-illustration"
              />

              {/* Float Badge 1 */}
              <div className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-3.5 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/80 flex items-center gap-3 animate-float duration-3000">
                <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center font-bold">
                  ★ 4.9
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Trusted by Parents</div>
                  <div className="text-[10px] text-slate-400">Highly-rated curriculum</div>
                </div>
              </div>

              {/* Float Badge 2 */}
              <div className="absolute -bottom-6 -right-4 bg-white dark:bg-slate-800 p-3.5 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/80 flex items-center gap-3 animate-float-delay">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Active Classrooms</div>
                  <div className="text-[10px] text-slate-400">Interactive live learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
