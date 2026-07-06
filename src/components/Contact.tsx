import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Check, ShieldAlert } from "lucide-react";

export const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("Grades 1-3");
  const [interest, setInterest] = useState("Mathematics");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="contact-heading">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            We'd Love to Hear From You
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400">
            Have questions about academic plans, placement tests, or custom scheduling? Reach out below.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-grid">
          {/* Column 1: Contact coordinates & Vector Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="contact-info-panel">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Our administrative coordinators respond to all email messages and callback requests within one business day.
              </p>

              {/* Coordinates List */}
              <div className="space-y-4" id="coordinates-list">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-850 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:border-blue-100 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Admissions Hotline</h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">+1 (800) 555-KIDD</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Toll-free, Mon - Sat 9am - 7pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-850 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:border-blue-100 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">admissions@brightmindsacademy.com</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Checked continuously, 24h response</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-850 rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow-sm hover:border-blue-100 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Main Campus</h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">452 Innovation Way, Tech City</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Suite 100, Silicon Valley Core, CA 94016</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Vector Map Placeholder */}
            <div className="relative h-56 bg-white dark:bg-slate-850 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-inner overflow-hidden flex flex-col items-center justify-center p-4">
              {/* Decorative map elements */}
              <div className="absolute inset-0 opacity-25 dark:opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              {/* Simulated streets and river */}
              <div className="absolute top-1/3 left-0 right-0 h-4 bg-slate-100 dark:bg-slate-800/60 transform rotate-12" />
              <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-slate-100 dark:bg-slate-800/60 transform -rotate-45" />
              <div className="absolute top-2/3 right-10 left-10 h-12 bg-blue-100/40 dark:bg-blue-950/10 rounded-full filter blur-sm transform -rotate-12" />

              {/* Pin Indicator */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg shadow-md mt-1 border border-slate-800/50">
                  BrightMinds Academy
                </div>
              </div>

              {/* Map footer navigation */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-2 rounded-xl border border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
                <span>📍 Located opposite Tech City Central Park</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7" id="contact-form-panel">
            <div className="bg-white dark:bg-slate-850 p-6 md:p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-md h-full flex flex-col justify-between">
              {!isSuccess ? (
                <form onSubmit={handleSendMessage} className="space-y-4" id="contact-feedback-form">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Our curriculum coordinators are standing by to guide your educational choices.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Emily Watson"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Grid of Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 555 123 4567"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Grid of Child Grade & Subject Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                        Child's Grade Level
                      </label>
                      <select
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      >
                        <option value="Grades 1-5">Grades 1 - 5 (Primary)</option>
                        <option value="Grades 6-8">Grades 6 - 8 (Middle)</option>
                        <option value="Grades 9-10">Grades 9 - 10 (Secondary)</option>
                        <option value="Grades 11-12">Grades 11 - 12 (Higher Sec)</option>
                        <option value="Pre-University">Pre-University</option>
                        <option value="Language & Digital">Language & Digital Skills</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                        Curriculum Interest
                      </label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      >
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science (Primary/Middle)</option>
                        <option value="Physics & Chemistry">Physics & Chemistry (Grades 9-12)</option>
                        <option value="Test Prep">Test Preparation (IELTS/Entry)</option>
                        <option value="English">English Language & Spoken English</option>
                        <option value="Technology">Computer & Digital Skills</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us a bit about your child's learning goals or challenges..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl text-sm shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                    id="contact-form-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Transmitting message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex-grow flex flex-col items-center justify-center text-center p-8 animate-scale-in" id="contact-success-panel">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mt-3 leading-relaxed">
                    Thank you for reaching out to BrightMinds Academy! We've received your inquiry regarding our <strong className="text-slate-800 dark:text-white">{interest}</strong> curriculum, and an admissions officer will respond back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
                    id="contact-success-reset"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
