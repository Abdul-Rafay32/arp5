import React from "react";
import {
  GraduationCap,
  Sparkles,
  Users,
  LineChart,
  TrendingUp,
  Award,
  Calendar,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ArrowRight,
  Check,
  CheckCircle2,
  BookOpen,
  Send,
  ThumbsUp,
  Search,
  ShieldCheck,
  Play,
  Baby,
  Milestone,
  MessageSquare,
  Cpu,
  LucideProps
} from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
  GraduationCap,
  Sparkles,
  Users,
  LineChart,
  TrendingUp,
  Award,
  Calendar,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  ArrowRight,
  Check,
  CheckCircle2,
  BookOpen,
  Send,
  ThumbsUp,
  Search,
  ShieldCheck,
  Play,
  Baby,
  Milestone,
  MessageSquare,
  Cpu,
};

interface LucideIconProps extends LucideProps {
  name: string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Return a fallback icon (e.g., Sparkles) if not found
    return <Sparkles {...props} />;
  }
  return <IconComponent {...props} />;
};

export default LucideIcon;
