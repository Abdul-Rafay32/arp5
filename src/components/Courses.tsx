import React, { useState } from "react";
import { coursesData } from "../data";
import { Star, Clock, Users, ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import { Course } from "../types";

interface CoursesProps {
  onOpenDemo: (courseId?: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onOpenDemo }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeDetailsCourse, setActiveDetailsCourse] = useState<Course | null>(null);

  const categories = ["All", "Mathematics", "Science", "English", "Physics & Chemistry", "Test Prep", "Technology"];

  const filteredCourses = selectedCategory === "All"
    ? coursesData
    : coursesData.filter(course => {
        if (selectedCategory === "Physics & Chemistry") {
          return course.category === "Physics" || course.category === "Chemistry";
        }
        if (selectedCategory === "English") {
          return course.category === "English" || course.category === "English Language";
        }
        return course.category === selectedCategory;
      });

  return (
    <section
      id="courses"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4" id="courses-heading">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full uppercase tracking-wider">
            Explore Curriculums
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Popular Small-Batch Courses
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
            Highly structured syllabi designed to spark discovery and build concrete problem-solving routines.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="course-category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                  : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="courses-cards-grid">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-slate-850 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/30 transition-all duration-350 overflow-hidden flex flex-col h-full group"
            >
              {/* Card Image Cover */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/20 text-xs font-bold text-blue-600 dark:text-blue-400 shadow-sm">
                  {course.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-xl text-xs font-semibold text-white flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{course.rating}</span>
                  <span className="opacity-70">({course.reviewsCount})</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Badge Row */}
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold rounded-lg flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {course.ageGroup}
                    </span>
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold rounded-lg flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                    <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold rounded-lg">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-50 dark:border-slate-800/80 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveDetailsCourse(course)}
                    className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 group/btn cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onOpenDemo(course.id)}
                    className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Details Modal */}
      {activeDetailsCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in" id="course-details-overlay">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
            {/* Cover and header details */}
            <div className="relative h-48 md:h-56 w-full">
              <img
                src={activeDetailsCourse.image}
                alt={activeDetailsCourse.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <button
                onClick={() => setActiveDetailsCourse(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 border border-white/20 transition-colors"
                aria-label="Close Details"
                id="close-course-details-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="inline-block px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  {activeDetailsCourse.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                  {activeDetailsCourse.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 max-h-[50vh] overflow-y-auto custom-scrollbar space-y-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800/50 text-center">
                <div>
                  <div className="text-xs text-slate-400">Target Group</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{activeDetailsCourse.ageGroup}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Course Duration</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{activeDetailsCourse.duration}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Skill Level</div>
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-0.5">{activeDetailsCourse.level}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Syllabus Rating</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 flex items-center justify-center gap-1">
                    ★ {activeDetailsCourse.rating}
                  </div>
                </div>
              </div>

              {/* Overview Section */}
              <div className="space-y-2">
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  Course Overview
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeDetailsCourse.longDescription}
                </p>
              </div>

              {/* Course Highlights */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  Syllabus Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeDetailsCourse.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Book button */}
            <div className="p-6 md:p-8 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Questions about placement? Call us at <strong className="text-slate-700 dark:text-slate-300">+1 (800) 555-KIDD</strong>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveDetailsCourse(null)}
                  className="flex-1 sm:flex-initial px-5 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors cursor-pointer text-center"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const courseId = activeDetailsCourse.id;
                    setActiveDetailsCourse(null);
                    onOpenDemo(courseId);
                  }}
                  className="flex-1 sm:flex-initial px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all cursor-pointer text-center"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Courses;
