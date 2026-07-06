import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { programsData } from "../data";
import { LucideIcon } from "./LucideIcon";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProgramsProps {
  onOpenDemo: (programTitle?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: "All", label: "All Programs" },
    { id: "School", label: "School Coaching (Grades 1-12)" },
    { id: "Prep", label: "Test Preparation" },
    { id: "Skills", label: "Language & Digital" }
  ];

  const getCategory = (id: string) => {
    if (id.includes("primary") || id.includes("middle") || id.includes("secondary") || id.includes("higher-secondary")) {
      return "School";
    }
    if (id.includes("entry")) {
      return "Prep";
    }
    return "Skills";
  };

  const filteredPrograms = selectedCategory === "All"
    ? programsData
    : programsData.filter(program => getCategory(program.id) === selectedCategory);

  return (
    <section id="programs" className="py-20 md:py-28 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/50 dark:bg-blue-950/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-50/50 dark:bg-indigo-950/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="programs-heading">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full uppercase tracking-wider">
            Academic Paths
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Structured Coaching Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            Engineered to guide students across all major academic stages, from early primary basics to elite university test thresholds.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14" id="programs-category-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer duration-250 ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/15 scale-[1.02]"
                  : "bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" 
          id="programs-cards-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.map((program) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                key={program.id}
                className="relative flex flex-col justify-between group bg-white dark:bg-slate-850 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/40 transition-all duration-300 hover:-translate-y-1.5"
                id={`program-card-${program.id}`}
              >
                {/* Accent colored top bar */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${program.colorClass}`}>
                      <LucideIcon name={program.iconName} className="w-6 h-6" />
                    </div>
                    {/* Grade indicator tag */}
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                      {program.grade}
                    </span>
                  </div>

                  {/* Program Title & description */}
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Program key features list */}
                  <div className="border-t border-slate-100 dark:border-slate-800/60 pt-5 mb-8">
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                      Core focus points:
                    </p>
                    <ul className="space-y-2.5">
                      {program.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action trigger */}
                <button
                  onClick={() => onOpenDemo(program.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white dark:bg-slate-800 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white transition-all cursor-pointer group/btn"
                >
                  <span>Inquire Program</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
