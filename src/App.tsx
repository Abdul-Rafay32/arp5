/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Programs from "./components/Programs";
import Courses from "./components/Courses";
import LearningProcess from "./components/LearningProcess";
import SuccessStats from "./components/SuccessStats";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { DemoModal } from "./components/DemoModal";

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>(undefined);

  const handleOpenDemo = (courseId?: string) => {
    setSelectedCourseId(courseId);
    setIsDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
    setSelectedCourseId(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 scroll-smooth" id="brightminds-landing-app">
      {/* Sticky Header Navigation */}
      <Navbar onOpenDemo={() => handleOpenDemo()} />

      <main>
        {/* Hero Banner Section */}
        <Hero onOpenDemo={() => handleOpenDemo()} />

        {/* Feature Cards Grid */}
        <WhyChooseUs />

        {/* Structured Academic Coaching Programs */}
        <Programs onOpenDemo={(programTitle) => handleOpenDemo(programTitle)} />

        {/* Dynamic Courses Catalog */}
        <Courses onOpenDemo={(courseId) => handleOpenDemo(courseId)} />

        {/* Interactive Steps Process */}
        <LearningProcess />

        {/* Success Analytics & Metrics */}
        <SuccessStats />

        {/* Parents and Students Testimonials */}
        <Testimonials />

        {/* Expandable FAQs Accordions */}
        <FAQs />

        {/* Secondary Promo Banner */}
        <CTABanner onOpenDemo={() => handleOpenDemo()} />

        {/* Contact Coordinates & Form */}
        <Contact />
      </main>

      {/* Structured Site Footer */}
      <Footer />

      {/* Global Booking Modal Dialog */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={handleCloseDemo}
        preSelectedCourse={selectedCourseId}
      />
    </div>
  );
}
