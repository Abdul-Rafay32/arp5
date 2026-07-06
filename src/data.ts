import { Course, Feature, Step, Stat, Testimonial, FAQItem, Program } from "./types";

export const featuresData: Feature[] = [
  {
    id: "feat-teachers",
    title: "Experienced Teachers",
    description: "Learn from highly certified educators with decades of combined experience, selected for their warmth and pedagogical expertise.",
    iconName: "GraduationCap",
    colorClass: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30",
  },
  {
    id: "feat-personalized",
    title: "Personalized Learning",
    description: "Every child learns differently. We customize homework, pacing, and visual models to perfectly match each student's current cognitive pace.",
    iconName: "Sparkles",
    colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900/30",
  },
  {
    id: "feat-small-batches",
    title: "Small Batch Sizes",
    description: "With a strict 1:8 teacher-to-student ratio, no child sits silently in the corner. Everyone receives personal attention, mentorship, and speaking time.",
    iconName: "Users",
    colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30",
  },
  {
    id: "feat-tracking",
    title: "Regular Progress Tracking",
    description: "Stay perfectly aligned with detailed progress dashboards, weekly personalized progress insights, and custom visual mastery maps.",
    iconName: "LineChart",
    colorClass: "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30",
  },
];

export const programsData: Program[] = [
  {
    id: "prog-primary",
    title: "Primary School Coaching",
    grade: "Grades 1–5",
    description: "Build robust foundational concepts in core subjects with supportive, interactive mentorship.",
    features: [
      "Fun visual math & logic foundations",
      "Interactive reading comprehension",
      "Creative logic puzzles & projects",
      "Homework and study discipline mapping"
    ],
    iconName: "Baby",
    colorClass: "bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-950/20 dark:text-blue-400 dark:border-blue-900/30",
  },
  {
    id: "prog-middle",
    title: "Middle School Coaching",
    grade: "Grades 6–8",
    description: "Strengthen academic concepts, improve research-based thinking, and prepare for high school sciences.",
    features: [
      "Rigorous pre-algebra & geometry",
      "Conceptual general science labs",
      "English speech & presentation skills",
      "Time management & exam training"
    ],
    iconName: "BookOpen",
    colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100 dark:bg-indigo-950/20 dark:text-indigo-400 dark:border-indigo-900/30",
  },
  {
    id: "prog-secondary",
    title: "Secondary School Coaching",
    grade: "Grades 9–10",
    description: "Complete preparation for board examinations with extensive syllabus coverage and topic mastery guides.",
    features: [
      "Intensive Physics, Chemistry, & Biology",
      "Advanced algebra, calculus & trig foundations",
      "Syllabus-aligned board preparation",
      "Past papers & mock tests analysis"
    ],
    iconName: "Award",
    colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30",
  },
  {
    id: "prog-higher-secondary",
    title: "Higher Secondary Coaching",
    grade: "Grades 11–12",
    description: "Master pre-engineering, pre-medical, or commerce subjects to secure exceptional board grades.",
    features: [
      "Advanced calculus & statistics",
      "Organic, inorganic & physical chemistry",
      "Electromagnetism & thermodynamics",
      "High-yield board examination templates"
    ],
    iconName: "GraduationCap",
    colorClass: "bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-950/20 dark:text-purple-400 dark:border-purple-900/30",
  },
  {
    id: "prog-university-entry",
    title: "University Entry Test Preparation",
    grade: "Pre-University",
    description: "Score-oriented entry prep for top engineering, medical, and general category universities.",
    features: [
      "High-speed analytical shortcut methods",
      "Full-length adaptive simulated mock tests",
      "Extensive MCQ prep & testing",
      "Confidence-building exam guidance"
    ],
    iconName: "Milestone",
    colorClass: "bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30",
  },
  {
    id: "prog-spoken-english",
    title: "Spoken English Program",
    grade: "All Levels",
    description: "Transform public speaking, conversational fluency, and professional presentation posture.",
    features: [
      "Intensive debate battles",
      "Accent refinement & clear phonics",
      "Real-world communication roleplay",
      "Vocal delivery and poise coaching"
    ],
    iconName: "MessageSquare",
    colorClass: "bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/30",
  },
  {
    id: "prog-computer-skills",
    title: "Computer & Digital Skills",
    grade: "All Grades / Ages",
    description: "Acquire high-demand software literacy, basic automation, safety principles, and AI basics.",
    features: [
      "Document processing & spreadsheet formulas",
      "Introduction to coding logic",
      "Digital identity, privacy & safety",
      "Practical productivity AI workflows"
    ],
    iconName: "Cpu",
    colorClass: "bg-teal-50 text-teal-600 border-teal-100 dark:bg-teal-950/20 dark:text-teal-400 dark:border-teal-900/30",
  },
];

export const coursesData: Course[] = [
  {
    id: "course-mathematics",
    title: "Mathematics",
    category: "Mathematics",
    ageGroup: "Grades 1 - 12 (Customized)",
    duration: "3 Months",
    level: "Beginner–Advanced",
    description: "Comprehensive mathematical concepts from mental math foundations to complex calculus and analytical geometry.",
    longDescription: "Our Mathematics course is structured to make students fall in love with logic. We cover everything from primary school numeracy up to higher secondary trigonometry, calculus, and algebra. Through visual explanation, problem-solving workshops, and systematic assignments, we turn anxiety into math mastery.",
    features: [
      "Conceptual visualization models",
      "Regular topic tests & progress trackers",
      "Personalized practice sheets",
      "Olympiad level preparation option"
    ],
    rating: 4.9,
    reviewsCount: 312,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: "course-science",
    title: "Science",
    category: "Science",
    ageGroup: "Grades 1 - 8 (Customized)",
    duration: "3 Months",
    level: "Beginner–Advanced",
    description: "Exploratory general science curriculum covering the wonders of biology, chemistry, physics, and earth sciences.",
    longDescription: "The Science course builds strong scientific curiosity. Young minds investigate physical laws, explore structural biology, learn about environmental systems, and run interactive simulations. We focus on conceptual depth and standard curriculum alignment to set a solid platform for future sciences.",
    features: [
      "Hands-on lab simulations & kits",
      "Inquiry-based thinking methodology",
      "Daily live quiz competitions",
      "Critical thinking worksheets"
    ],
    rating: 4.8,
    reviewsCount: 224,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: "course-english",
    title: "English Language",
    category: "English",
    ageGroup: "All Grades",
    duration: "2 Months",
    level: "All Levels",
    description: "A complete curriculum covering grammar, vocabulary, reading comprehension, writing mechanics, and expression.",
    longDescription: "Our English Language program focuses on structured grammar, rich vocabulary, and smooth written composition. From reading comprehension to creative writing, students learn to convey their thoughts with accuracy and confidence under personalized tutor supervision.",
    features: [
      "Interactive grammar drills",
      "Weekly creative writing prompts",
      "Vocabulary builder projects",
      "Reading comprehension workshops"
    ],
    rating: 4.9,
    reviewsCount: 185,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: "course-physics",
    title: "Physics",
    category: "Physics",
    ageGroup: "Grades 9 - 12",
    duration: "3 Months",
    level: "Intermediate",
    description: "Deep conceptual and mathematical physics covering mechanics, electromagnetism, waves, and thermodynamics.",
    longDescription: "Specifically tailored for secondary and higher secondary students, our Physics curriculum bridges mathematical equations and natural phenomena. We dissect kinematics, Newton's laws, electricity, and wave mechanics using dynamic animations and past paper analyses to ensure top grades.",
    features: [
      "Numerical problem solving masterclass",
      "Interactive physics simulations",
      "Board examination preparation",
      "Formula quick-sheets & guides"
    ],
    rating: 4.7,
    reviewsCount: 142,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: "course-chemistry",
    title: "Chemistry",
    category: "Chemistry",
    ageGroup: "Grades 9 - 12",
    duration: "3 Months",
    level: "Intermediate",
    description: "Explore organic, inorganic, and physical chemistry from atomic structures to stoichiometry and chemical equilibria.",
    longDescription: "Demystify complex chemical formulas and equations. Our Chemistry program guides intermediate students through molecular bonds, stoichiometry, gas laws, and periodic trends. We use virtual 3D molecule viewers and rigorous exercises to prepare students for both high school and college entry standards.",
    features: [
      "3D molecular visualizer models",
      "Detailed reaction walkthroughs",
      "Stoichiometry step-by-step drills",
      "Chapter-wise test modules"
    ],
    rating: 4.8,
    reviewsCount: 136,
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: "course-ielts",
    title: "IELTS Preparation",
    category: "Test Prep",
    ageGroup: "Academic / General Students",
    duration: "8 Weeks",
    level: "Advanced",
    description: "High-scoring targeted strategies for Reading, Writing, Listening, and Speaking modules with intensive mock tests.",
    longDescription: "Get your desired band score with a structured, intensive preparation schedule. Our course includes diagnostic mock tests, detailed essays grading by certified trainers, listening mock reviews, and real-time speaking interviews. Learn the exact templates and strategies for 8.0+ Band achievement.",
    features: [
      "12 Full-length mock exams",
      "Individual writing assessments",
      "Mock Speaking interviews with feedback",
      "Reading & Listening shortcuts manual"
    ],
    rating: 4.9,
    reviewsCount: 204,
    image: "https://images.unsplash.com/photo-1543167118-4762e2175559?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: "course-entry-prep",
    title: "Entry Test Preparation",
    category: "Test Prep",
    ageGroup: "Pre-University Students",
    duration: "4 Months",
    level: "Advanced",
    description: "Rigorous training for top engineering, medical, and general university admission tests.",
    longDescription: "Maximize your admission success rate. This highly exhaustive 4-month program features full-coverage syllabus revision, conceptual shortcut techniques, time-management methodologies, and past exam reviews. Our mock tests emulate true competitive exam environments with strict timing constraints.",
    features: [
      "5,000+ Question bank access",
      "Shortcut formula cheat sheets",
      "Full-length adaptive mock papers",
      "Personal academic counseling"
    ],
    rating: 5.0,
    reviewsCount: 298,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: "course-computer-skills",
    title: "Computer Skills",
    category: "Technology",
    ageGroup: "All Grades / Beginners",
    duration: "2 Months",
    level: "Beginner",
    description: "Essential digital literacy covering basic computer operations, word processing, spreadsheets, internet safety, and AI basics.",
    longDescription: "Become digitally independent. This course introduces the core concepts of operating systems, file managers, professional documentation (Word), spreadsheets (Excel), visual slide creations, digital security, and the productive usage of modern AI assistance tools safely.",
    features: [
      "Hands-on practical challenges",
      "Introduction to spreadsheet formulas",
      "Digital safety & privacy guide",
      "Interactive typing speed labs"
    ],
    rating: 4.6,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1588702547898-8807ab000d11?auto=format&fit=crop&q=80&w=600&h=400",
  },
];

export const processStepsData: Step[] = [
  {
    number: 1,
    title: "Free Assessment Session",
    description: "A friendly, zero-pressure diagnostic session that highlights your child's cognitive strengths, knowledge gaps, and preferred learning styles.",
  },
  {
    number: 2,
    title: "Personalized Roadmap",
    description: "Our academic mentors craft a highly tailored learning curriculum, focusing heavily on targeted concept retention and structured pacing goals.",
  },
  {
    number: 3,
    title: "Active Learning Classes",
    description: "Live, small-group classes loaded with interactive puzzles, logical challenges, and student-led debate discussions to make learning exciting.",
  },
  {
    number: 4,
    title: "Visual Progress Mapping",
    description: "Parents track detailed mastery levels on our online dashboard, receiving concise weekly progress insights from the child's direct mentor.",
  },
];

export const statsData: Stat[] = [
  {
    id: "stat-students",
    value: "2,500+",
    label: "Students Enrolled",
    description: "Happy learners empowered across various schools and academic systems.",
    iconName: "Users",
  },
  {
    id: "stat-success",
    value: "98.4%",
    label: "Success Rate",
    description: "Of our students demonstrate measurable score and confidence improvements.",
    iconName: "TrendingUp",
  },
  {
    id: "stat-teachers",
    value: "45+",
    label: "Expert Mentors",
    description: "Carefully vetted full-time teaching staff with stellar pedagogical credentials.",
    iconName: "Award",
  },
  {
    id: "stat-experience",
    value: "10+",
    label: "Years of Trust",
    description: "A decade of educational innovation, premium standard, and parent reliability.",
    iconName: "Calendar",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Sarah Jenkins",
    role: "Mother of Ryan (Grade 4)",
    content: "BrightMinds Academy has completely transformed Ryan's relationship with math. He used to dread simple assignments and break down in tears. Now, he eagerly logs in for his weekly sessions and views math as a giant riddle game. The instructors are incredibly supportive, warm, and highly professional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: "test-2",
    name: "Marcus Sterling",
    role: "Father of Maya (Grade 7)",
    content: "We tried multiple home tutors and online portals for Maya's English writing without much success. BrightMinds Academy's Spoken English and coaching programs, however, unlocked a confidence we didn't know she had. Her analytical clarity and public speaking poise have vastly improved. It is worth every single penny.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: "test-3",
    name: "Priyah Sharma",
    role: "Mother of Advik (Grade 2)",
    content: "The small batch size of 8 kids is what makes BrightMinds Academy truly excel. The mentor knows exactly where Advik is struggling and tailors the learning pace. The weekly progress reporting dashboard is incredibly clean, keeping me completely aligned without having to schedule constant parent-teacher meetings.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: "test-4",
    name: "Ethan Thorne",
    role: "Student (Grade 8, Digital Literacy)",
    content: "I always liked playing computer games, but the Computer Skills program here helped me build my own spreadsheets and understand how computers actually work. My mentor helped me understand actual coding logic behind loop functions and variables. I built three mini-projects, and we got to showcase them! It was the best project ever.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    id: "test-5",
    name: "Clarissa Zhang",
    role: "Mother of Chloe (Grade 5)",
    content: "Chloe took the Primary School Coaching science track, and she's been absolutely hooked. She is constantly bringing safe experiments to the kitchen table and explaining chemical reactions and biology terms to us! The lesson structure is brilliant because it prioritizes tactile experience over passive screen watching.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is the typical class size for each batch?",
    answer: "We believe in active participation, not passive listening. To ensure high focus, we strictly limit our standard classes to a maximum of 8 students per mentor. This allows every child to speak, share visual models, and receive personalized constructive feedback.",
  },
  {
    id: "faq-2",
    question: "Are your teachers qualified for professional and school education?",
    answer: "Absolutely. Every BrightMinds Academy mentor goes through a rigorous vetting process. They hold specialized degrees in educational pedagogy or their respective scientific/language disciplines, have a minimum of 3 years of school classroom teaching experience, and pass comprehensive child safety clearances.",
  },
  {
    id: "faq-3",
    question: "Can we schedule a trial class before officially registering?",
    answer: "Yes, in fact, we highly recommend it! We provide a free comprehensive assessment and diagnostic class. Our academic coordinator will assess your child's current cognitive levels, share a personalized improvement path, and guide you on the best course options.",
  },
  {
    id: "faq-4",
    question: "What if my child misses a scheduled weekly class?",
    answer: "No child gets left behind. All our interactive classes are fully recorded for review. In addition, we host weekly, free remedial sessions where students can sync up directly with their mentors to clear up any confusing topics.",
  },
  {
    id: "faq-5",
    question: "How do you track and share learning progress with parents?",
    answer: "We keep parents fully aligned. After every unit, you will receive a visual dashboard update mapping your child's conceptual masteries. Every weekend, your child's direct mentor uploads a progress insight showing what was mastered and what is next.",
  },
  {
    id: "faq-6",
    question: "Do you provide customized homework or extra study material?",
    answer: "Yes, we send out physical 'Discovery Kits' containing tactile visual aids, physical study guides, and customized workbooks designed for the active course syllabus. Homework is fully dynamic, automatically adjusting difficulty based on daily class performance.",
  },
];
