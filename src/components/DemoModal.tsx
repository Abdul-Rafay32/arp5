import React, { useState } from "react";
import { X, Check, Calendar, Clock, GraduationCap } from "lucide-react";
import { coursesData } from "../data";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, preSelectedCourse }) => {
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("Grades 1-3");
  const [selectedCourse, setSelectedCourse] = useState(preSelectedCourse || "course-mathematics");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Set today's date as minimum for selection
  const todayStr = new Date().toISOString().split("T")[0];

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !childName || !email || !phone || !preferredDate || !preferredTime) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const selectedCourseDetails = coursesData.find((c) => c.id === selectedCourse);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" id="demo-modal-overlay">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800"
        id="demo-modal-container"
      >
        {/* Header decoration */}
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
          aria-label="Close Modal"
          id="close-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-8" id="demo-booking-form">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                Interactive Learning
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Book a Free Demo Class
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Experience BrightMinds Academy's premium interactive coaching first-hand.
              </p>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {/* Parent Name */}
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                />
              </div>

              {/* Child's Name & Grade Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Child's Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="e.g. Liam"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Child's Grade *
                  </label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                  >
                    <option value="Grades 1-5">Grades 1 - 5 (Primary)</option>
                    <option value="Grades 6-8">Grades 6 - 8 (Middle)</option>
                    <option value="Grades 9-10">Grades 9 - 10 (Secondary)</option>
                    <option value="Grades 11-12">Grades 11 - 12 (Higher Sec)</option>
                    <option value="Pre-University">Pre-University</option>
                    <option value="Language & Digital">Language & Digital Skills</option>
                  </select>
                </div>
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Parent Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Parent Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 555 123 4567"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Course of Interest *
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                >
                  {coursesData.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.ageGroup})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                    />
                    <Calendar className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                    >
                      <option value="">Select slot</option>
                      <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                      <option value="02:00 PM - 03:00 PM">02:00 PM - 03:00 PM</option>
                      <option value="04:00 PM - 05:00 PM">04:00 PM - 05:00 PM</option>
                      <option value="06:00 PM - 07:00 PM">06:00 PM - 07:00 PM</option>
                    </select>
                    <Clock className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Submission */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl text-sm shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                id="submit-demo-booking"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Reviewing slots...
                  </>
                ) : (
                  <>Book My Free Session</>
                )}
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-2">
                No credit card required. Cancel or reschedule anytime.
              </p>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center animate-scale-in" id="demo-success-screen">
            <div className="mx-auto w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Demo Reserved Successfully!
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
              Wonderful choice! We've booked <strong className="text-slate-900 dark:text-white">{childName}</strong>'s demo class for <strong className="text-slate-900 dark:text-white">{selectedCourseDetails?.title}</strong> on <strong className="text-slate-900 dark:text-white">{preferredDate}</strong> at <strong className="text-slate-900 dark:text-white">{preferredTime}</strong>.
            </p>
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl text-left border border-slate-100 dark:border-slate-800/50 text-xs text-slate-500 dark:text-slate-400 space-y-2">
              <div className="flex gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Confirmation Sent:</span>
                <span>{email}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Instruction Format:</span>
                <span>1:8 Interactive Live Video Classroom link is attached.</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Support Line:</span>
                <span>An academic expert will call you at {phone} within 2 hours.</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsSuccess(false);
                setParentName("");
                setChildName("");
                setEmail("");
                setPhone("");
                setPreferredDate("");
                setPreferredTime("");
                onClose();
              }}
              className="mt-8 px-6 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
              id="success-dismiss-btn"
            >
              Great, thank you!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
