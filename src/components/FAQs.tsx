import React, { useState } from "react";
import { faqsData } from "../data";
import { ChevronDown, HelpCircle, ThumbsUp } from "lucide-react";

export const FAQs: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="faq-heading">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full uppercase tracking-wider">
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Everything you need to know about our visual pedagogy, batch structures, and parent-mentor feedback loops.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqsData.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-blue-50/30 border-blue-100 dark:bg-blue-950/10 dark:border-blue-900/40 shadow-sm"
                    : "bg-white border-slate-100 hover:border-slate-200 dark:bg-slate-850 dark:border-slate-800 dark:hover:border-slate-700"
                }`}
                id={`faq-item-${idx}`}
              >
                {/* Header / Button */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className={`w-5.5 h-5.5 mt-0.5 shrink-0 transition-colors ${isOpen ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
                    <span className="text-base font-bold text-slate-900 dark:text-white pr-4 leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-blue-600 dark:text-blue-400" : ""
                    }`}
                  />
                </button>

                {/* Answer Content Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-slate-100 dark:border-slate-800/60" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-white/50 dark:bg-slate-900/20 rounded-b-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support CTA Callout */}
        <div className="mt-12 text-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Have more specific questions?</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Our academic admissions experts are online to help you.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 text-xs font-bold rounded-xl transition-all text-center block"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
};
export default FAQs;
