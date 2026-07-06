import React from "react";
import { processStepsData } from "../data";
import { CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

export const LearningProcess: React.FC = () => {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Decorative background vectors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 dark:bg-indigo-950/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4" id="process-heading">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full uppercase tracking-wider">
            Our Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How Learning Happens at LearnKid
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            A simple, scientifically grounded onboarding process designed to set your child up for immediate academic comfort.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" id="process-steps-container">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-dashed bg-slate-200 dark:bg-slate-800 z-0" />

          {processStepsData.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center group z-10"
              id={`process-step-${idx}`}
            >
              {/* Step Number Badge */}
              <div className="w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center text-xl font-black text-blue-600 dark:text-blue-400 shadow-sm group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:shadow-md transition-all duration-300 mb-6">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="space-y-3 px-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Mobile Separator Indicator */}
              {idx < processStepsData.length - 1 && (
                <div className="lg:hidden my-6 text-slate-300 dark:text-slate-700">
                  <ChevronRight className="w-6 h-6 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Supporting onboarding guarantee statement */}
        <div className="mt-16 text-center max-w-xl mx-auto p-5 bg-blue-50/50 dark:bg-blue-950/20 rounded-2xl border border-blue-100/40 dark:border-blue-900/30 text-xs text-slate-500 dark:text-slate-400">
          <p className="leading-relaxed">
            💡 <strong>Our Satisfaction Guarantee:</strong> If you are not fully satisfied with your child's assigned mentor or curriculum mapping within the first 14 days, we will re-assign another mentor immediately or issue a full, hassle-free refund.
          </p>
        </div>
      </div>
    </section>
  );
};
export default LearningProcess;
