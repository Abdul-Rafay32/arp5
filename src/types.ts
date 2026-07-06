export interface Course {
  id: string;
  title: string;
  category: string;
  ageGroup: string;
  duration: string;
  level: string;
  description: string;
  longDescription: string;
  features: string[];
  rating: number;
  reviewsCount: number;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  colorClass: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Parent of Aarav (Grade 5)", "Student (Grade 9)"
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Program {
  id: string;
  title: string;
  grade: string;
  description: string;
  features: string[];
  iconName: string;
  colorClass: string;
}

