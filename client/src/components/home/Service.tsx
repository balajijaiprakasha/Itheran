import { useRef, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import resume from "../../assets/resume.json";
import skills from "../../assets/skills.json";
import interview from "../../assets//interview.json";

// --- Types ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  illustration: object;
}

// --- ServiceCard Component ---
interface ServiceCardProps extends ServiceItem {
  style?: React.CSSProperties;
}

const ServiceCard: FC<ServiceCardProps> = ({
  id,
  title,
  description,
  illustration,
}) => {
  const [isPaused, setIsPaused] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: illustration,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Link
      to={`/features/${id}`}
      onMouseEnter={() => setIsPaused(false)}
      onMouseLeave={() => setIsPaused(true)}
      className="group glass relative rounded-3xl p-8 flex flex-col gap-6 hover:border-secondary/50 hover:shadow-premium transition-all duration-500 overflow-hidden cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <div className="size-16 rounded-2xl bg-secondary/10 flex items-center justify-center p-2">
          {/* Lottie Animation Container */}
          <div className="w-full h-full pointer-events-none">
            <Lottie
              options={defaultOptions}
              isPaused={isPaused}
              height="100%"
              width="100%"
            />
          </div>
        </div>

        {/* Arrow Icon */}
        <div className="bg-white/5 size-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-secondary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-xl font-bold text-light group-hover:text-secondary transition-colors">
          {title}
        </h4>
        <p className="text-muted text-sm leading-relaxed">{description}</p>
      </div>

      <div className="mt-4 pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-muted group-hover:text-light transition-colors">
          Learn More
        </span>
        <div className="size-1 w-0 group-hover:w-12 bg-secondary transition-all duration-500 rounded-full" />
      </div>
    </Link>
  );
};

// --- Main Component ---
export default function Service() {
  const containerRef = useRef<HTMLDivElement>(null);

  const services: ServiceItem[] = [
    {
      id: "ai-interview",
      title: "AI Interview",
      description:
        "Emotion-aware AI that analyzes facial cues and voice data to provide real-time feedback.",
      illustration: interview,
    },
    {
      id: "resume-gen",
      title: "Resume Generator",
      description:
        "AI-powered resume crafting that optimizes for ATS and highlights your impact.",
      illustration: resume,
    },
    {
      id: "skill-training",
      title: "Skill Training",
      description:
        "Personalized roadmaps and curated resources to help you bridge the tech gap.",
      illustration: skills,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      className="section-container bg-primary overflow-hidden"
    >
      <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-20 w-full max-w-6xl mx-auto">
        <h2 className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-xs font-bold uppercase tracking-[0.2em]">
          Our Expertise
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-light">
          Immersive Learning <span className="text-secondary">Solutions</span>
        </h3>
        <p className="text-muted max-w-2xl text-lg leading-relaxed">
          We combine cutting-edge AI with pedagogical excellence to provide a
          suite of tools designed for the modern professional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
