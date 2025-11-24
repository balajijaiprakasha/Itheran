import { Link, useNavigate } from "react-router-dom";
import  { useState } from "react";
 

export default function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Re-establishing the primary color constants
  const DARK_PRIMARY = "#191A23"; // Text/Color (Dark Black)
  const LIGHT_GRAY = "#F3F3F3"; // Background Color (Light Gray)
  const GREEN_ACCENT = "#B9FF66"; // Accent Color (Green)

  // Explicitly define the state to allow number or null
  const [openStep, setOpenStep] = useState<number | null>(0);

  // --- Content from Code 2 ---

  const services = [
    {
      title: "AI Interview",
      description: "Simulate real interviews with our AI avatars — practice, learn, and excel.",
      color: GREEN_ACCENT,
      path: "/session",
    },
    {
      title: "Skill Training",
      description: "Master technical and interpersonal skills through engaging AI-led modules.",
      color: DARK_PRIMARY,
      path: "/skill",
    },
    {
      title: "Resume Generator",
      description: "Generate professional resumes instantly, based on your inputs and AI expertise.",
      color: GREEN_ACCENT,
      path: "/resume",
    },
  ];

  const assistants = [
    {
      title: "Startup Assistant",
      description: "Fuel your entrepreneurial dreams — plan, validate, and grow smarter with AI guidance.",
    },
    {
      title: "Coding Assistant",
      description: "Solve coding problems, debug, and develop faster with your intelligent code partner.",
    },
  ];

  const workSteps = [
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

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  const handleServiceClick = (path: string) => {
    if (token) {
      navigate(path);
    } else {
      navigate("/login");
    }
  };

  // --- Render ---

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: LIGHT_GRAY, color: DARK_PRIMARY }}
    >

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20 px-6 lg:px-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ color: DARK_PRIMARY }}>
          Discover AI Services
        </h1>
        <p className="text-lg mb-10 max-w-2xl" style={{ color: DARK_PRIMARY }}>
          Empowering your journey with futuristic AI solutions tailored to skills, career growth, and entrepreneurship.
        </p>

        {/* Login/Signup Button */}
        <Link
          to={token ? "/" : "/login"}
          className="px-8 py-3 rounded-xl text-xl font-medium transition duration-500"
          style={{ backgroundColor: DARK_PRIMARY, color: LIGHT_GRAY }}
        >
          {token ? "Go to Dashboard" : "Get Started"}
        </Link>
      </section>

      <hr className="w-1/2 mx-auto my-10 border-t-2 border-gray-400" />

      {/* OUR CORE SERVICES SECTION */}
      <section className="px-6 lg:px-32 py-10">
        <h2 className="text-3xl font-bold text-center mb-10 rounded-xl px-4 py-2 w-fit mx-auto" style={{ backgroundColor: GREEN_ACCENT, color: DARK_PRIMARY }}>
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 flex flex-col items-start rounded-xl shadow-lg cursor-pointer transition hover:scale-[1.02] border-2 border-transparent"
              style={{
                backgroundColor: LIGHT_GRAY,
                borderColor: service.color,
                borderLeftWidth: '8px',
                boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
              }}
              onClick={() => handleServiceClick(service.path)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{
                    backgroundColor: service.color === DARK_PRIMARY ? GREEN_ACCENT : service.color,
                    color: DARK_PRIMARY
                  }}
                >
                  {service.title.charAt(0)}
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h3>
              </div>
              <p className="text-base" style={{ color: DARK_PRIMARY }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING ASSISTANTS SECTION */}
      <section className="px-6 lg:px-32 py-10">
        <h2 className="text-3xl font-bold text-center mb-10" style={{ color: DARK_PRIMARY }}>
          Upcoming Assistants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {assistants.map((assistant, index) => (
            <div
              key={index}
              className="border-dotted border-2 p-6 rounded-lg relative shadow-md"
              style={{ borderColor: GREEN_ACCENT, backgroundColor: DARK_PRIMARY, color: LIGHT_GRAY }}
            >
              <span
                className="absolute top-[-10px] right-2 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                style={{ backgroundColor: GREEN_ACCENT }}
              >
                Coming Soon
              </span>
              <h3 className="text-xl font-bold mb-2 text-center" style={{ color: GREEN_ACCENT }}>
                {assistant.title}
              </h3>
              <p className="text-center text-sm">{assistant.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK SECTION (Accordion Style) */}
      <section className="px-6 lg:px-32 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2
              className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-[#B9FF66] w-fit mx-auto"
              style={{ color: DARK_PRIMARY }}
            >
              Our Working Process
            </h2>
          </div>

          {/* Accordion Steps */}
          <div className="space-y-6">
            {workSteps.map((item, index: number) => {
              const isOpen = openStep === index;

              // Determine styles based on open state
              const stepBg = isOpen ? GREEN_ACCENT : LIGHT_GRAY;
              const stepColor = DARK_PRIMARY;
              const buttonBg = isOpen ? DARK_PRIMARY : GREEN_ACCENT;
              const buttonColor = isOpen ? LIGHT_GRAY : DARK_PRIMARY;

              return (
                <div
                  key={index}
                  className="rounded-xl p-6 shadow-xl border-2 cursor-pointer transition duration-300"
                  style={{
                    backgroundColor: stepBg,
                    borderColor: DARK_PRIMARY,
                    boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
                    color: stepColor,
                  }}
                  onClick={() => toggleStep(index)}
                >
                  <div className="flex items-start justify-between">
                    {/* Step Number and Title */}
                    <div className="flex flex-col sm:flex-row items-baseline gap-4">
                      <span className="text-3xl font-light tracking-tight">
                        {item.step}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    {/* Toggle Button */}
                    <button
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#191A23] flex-shrink-0"
                      style={{ backgroundColor: buttonBg, color: buttonColor }}
                      onClick={(e) => { e.stopPropagation(); toggleStep(index); }}
                    >
                      {/* Shows '-' for the active step, '+' for others */}
                      {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Description (Conditionally rendered) */}
                  {isOpen && (
                    <p className="mt-4 pl-14 max-w-2xl text-base" style={{ color: stepColor }}>
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UNLOCK FULL POTENTIAL SECTION (Visible only if not logged in) */}
      {!token && (
        <section className="px-6 lg:px-32 py-20 text-center" style={{ backgroundColor: DARK_PRIMARY, color: LIGHT_GRAY }}>
          <h2 className="text-3xl font-bold mb-4 uppercase" style={{ color: GREEN_ACCENT }}>
            Unlock Full Potential
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-lg">
            Sign up now to access personalized trainings, mock interviews,
            and skill enhancements tailored just for you.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="font-bold py-4 px-10 uppercase tracking-widest rounded-xl shadow-lg transition duration-300 hover:scale-[1.05] border-2 border-transparent"
            style={{ backgroundColor: GREEN_ACCENT, color: DARK_PRIMARY }}
          >
            Create Account
          </button>
        </section>
      )}
    </div>
  );
}