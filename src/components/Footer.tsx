import React, { useState } from "react";
import { GraduationCap, Mail, ArrowRight, Check, Send } from "lucide-react";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setNewsletterEmail("");
    }, 800);
  };

  const handleFooterLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-800" id="footer-top-grid">
          {/* Column 1: Brand details (Colspan: 4) */}
          <div className="lg:col-span-4 space-y-5" id="footer-col-brand">
            <a href="#home" onClick={(e) => handleFooterLinkClick(e, "#home")} className="flex items-center gap-2 group self-start">
              <div className="w-8.5 h-8.5 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Bright<span className="text-blue-500">Minds</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering local kids and pre-university students with premium academic diagnostics, small interactive classrooms, and expert coaching that makes discovery highly engaging.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2" id="footer-social-links">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social, idx) => (
                <a
                  key={idx}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8.5 h-8.5 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                  aria-label={`Follow BrightMinds on ${social}`}
                >
                  <span className="text-xs font-semibold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Directory (Colspan: 3) */}
          <div className="lg:col-span-3 space-y-4" id="footer-col-links-1">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Explore Directory</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#home" onClick={(e) => handleFooterLinkClick(e, "#home")} className="hover:text-white transition-colors">Home Landing</a>
              <a href="#programs" onClick={(e) => handleFooterLinkClick(e, "#programs")} className="hover:text-white transition-colors">Coaching Programs</a>
              <a href="#courses" onClick={(e) => handleFooterLinkClick(e, "#courses")} className="hover:text-white transition-colors">Popular Courses</a>
              <a href="#why-us" onClick={(e) => handleFooterLinkClick(e, "#why-us")} className="hover:text-white transition-colors">Why Choose Us</a>
              <a href="#process" onClick={(e) => handleFooterLinkClick(e, "#process")} className="hover:text-white transition-colors">Our Process Blueprint</a>
            </div>
          </div>

          {/* Column 3: Contact details (Colspan: 2) */}
          <div className="lg:col-span-2 space-y-4" id="footer-col-links-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Admissions</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#contact" onClick={(e) => handleFooterLinkClick(e, "#contact")} className="hover:text-white transition-colors">Contact Support</a>
              <a href="#faq" onClick={(e) => handleFooterLinkClick(e, "#faq")} className="hover:text-white transition-colors">FAQs & Help</a>
              <a href="#home" className="hover:text-white transition-colors">Placement Testing</a>
              <a href="#home" className="hover:text-white transition-colors font-semibold text-blue-400">Join as Instructor</a>
            </div>
          </div>

          {/* Column 4: Newsletter capture (Colspan: 3) */}
          <div className="lg:col-span-3 space-y-4" id="footer-col-newsletter">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Curriculum News</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to get seasonal placement updates, early admission discounts, and free local experiment guides.
            </p>

            {!isSuccess ? (
              <form onSubmit={handleSubscribe} className="flex gap-2" id="footer-newsletter-form">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="flex-grow px-3 py-2 bg-slate-800 text-slate-100 rounded-xl border border-slate-700/80 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center shrink-0"
                  aria-label="Subscribe"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </form>
            ) : (
              <div className="p-3 bg-blue-950/40 border border-blue-900/30 rounded-xl flex items-center gap-2 text-xs text-blue-300" id="newsletter-success">
                <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom copyright area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500" id="footer-bottom">
          <p>© {new Date().getFullYear()} BrightMinds Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:underline">Privacy Policy</a>
            <a href="#home" className="hover:underline">Terms of Service</a>
            <a href="#home" className="hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
