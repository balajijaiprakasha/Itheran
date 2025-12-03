export default function Service() {
  const services = [
    {
      title: "AI Interview",
      description: "Improve your online visibility with targeted SEO strategies.",
      bg: "bg-LIGHT-GRAY",
      text: "text-DARK-PRIMARY",
      titleBg: "bg-GREEN",
      arrowBg: "bg-GREEN",
      arrowFilter: "green-icon",
      illustration: <img src="/interview.png" className="w-24" />,
    },
    {
      title: "Resume Generator",
      description: "Boost your results quickly with optimized PPC campaigns.",
      bg: "bg-GREEN",
      text: "text-DARK-PRIMARY",
      titleBg: "bg-LIGHT-GRAY",
      arrowBg: "bg-LIGHT-GRAY",
      arrowFilter: "green-icon",
      illustration: <img src="/video-chat.png" className="w-24" />,
    },
    {
      title: "Skill Training",
      description: "Grow your audience with creative social media strategies.",
      bg: "bg-DARK-PRIMARY",
      text: "text-LIGHT-GRAY",
      titleBg: "bg-LIGHT-GRAY",
      arrowBg: "bg-LIGHT-GRAY",
      arrowFilter: "",
      illustration: <img src="/training1.png" className="w-24" />,
    },
  ];

  return (
    <section id="services" className="px-6 lg:px-32 py-24 bg-white">

      {/* TITLE */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-GREEN text-DARK-PRIMARY">
          Services
        </h2>

        <p className="text-base md:text-lg max-w-3xl text-DARK-PRIMARY/80">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className={`relative rounded-3xl p-10 border-2 border-DARK-PRIMARY 
                        flex flex-col justify-between shadow-[4px_4px_0px_0px_#191A23]
                        ${s.bg} ${s.text}`}
          >

            {/* TOP ROW */}
            <div className="flex justify-between items-start">
              <span
                className={`px-2 py-1 text-xl rounded-md w-fit ${s.titleBg} text-DARK-PRIMARY`}
              >
                {s.title}
              </span>

              <div className="w-28 h-28 flex items-center justify-center">
                {s.illustration}
              </div>
            </div>

            {/* LEARN MORE */}
            <div className="mt-10 flex items-center gap-3 cursor-pointer">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${s.arrowBg}`}
              >
                <img
                  src="/right-arrow.png"
                  alt="learn more"
                  className={`w-5 h-5 ${s.arrowFilter}`}
                />
              </div>
              <span className="text-lg font-medium">Learn more</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
