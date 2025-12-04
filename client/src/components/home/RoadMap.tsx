import { useState } from "react";

export default function RoadMap() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  interface WorkStep {
    step: string;
    title: string;
    desc: string;
  }

  const workSteps: WorkStep[] = [
    {
      step: "01",
      title: "Skill Mapping",
      desc: "We assess and recommend the best learning paths.",
    },
    {
      step: "02",
      title: "Interactive Training",
      desc: "Practice with real-time feedback from AI avatars.",
    },
    {
      step: "03",
      title: "Analyse",
      desc: "Get every bit of data, to evaluate your skills through datasets.",
    },
    {
      step: "04",
      title: "Track & Improve",
      desc: "Monitor your progress and sharpen your expertise.",
    },
  ];

  // Function to handle step click
  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section id="roadmap" className="px-6 lg:px-32 py-20 ">
      <div className="w-full">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-[#B9FF66] w-fit text-DARK-PRIMARY">
            Our Working Process
          </h2>
          <p className="mt-2 text-base md:text-lg text-[#191A23]/80">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        {/* Accordion Steps */}
        <div className="space-y-6">
          {workSteps.map((item, index) => {
            const isOpen = openStep === index;

            return (
              <div
                key={index}
                onClick={() => toggleStep(index)}
                className={`
                  rounded-3xl p-6 cursor-pointer border-2 transition duration-300
                  shadow-[4px_4px_0px_0px_#191A23] text-DARK-PRIMARY
                  
                  ${
                    isOpen
                      ? "bg-GREEN border-GREEN"
                      : "bg-LIGHT-GRAY border-LIGHT-GRAY"
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  {/* Step Number and Title */}
                  <div className="flex flex-col sm:flex-row items-baseline gap-4">
                    <span className="text-4xl font-light tracking-tight">
                      {item.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  {/* Toggle Button (simplified icon) */}
                  <button
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center 
                      border-2 border-DARK-PRIMARY transition

                      ${
                        isOpen
                          ? "bg-LIGHT-GRAY text-DARK-PRIMARY"
                          : "bg-DARK-PRIMARY text-LIGHT-GRAY"
                      }
                    `}
                  >
                    {/* Shows '-' for the active step, '+' for others */}
                    {isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Description (Conditionally rendered) */}
                {isOpen && (
                  <p className="mt-4 pl-14 max-w-2xl text-base text-[#191A23] animate-in slide-in-from-top duration-300">
                    {item.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
