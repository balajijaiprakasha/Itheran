export default function AboutUs() {
  return (
    <section
      id="aboutus"
      className="py-24 px-6 lg:px-32  text-DARK-PRIMARY"
    >
      {/* MAIN CARD */}
      <div
        className="w-full rounded-3xl flex flex-col md:flex-row items-center justify-between 
                   px-10 py-16 mb-24 bg-LIGHT-GRAY border-2 border-DARK-PRIMARY 
                   shadow-[4px_4px_0px_0px_#191A23] md:shadow-DARK-PRIMARY"
      >
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-DARK-PRIMARY">
            Who We Are
          </h2>

          <p className="text-lg text-[#191A23]/80 leading-relaxed max-w-md">
            We are a collective of educators, developers, and innovators committed
            to transforming professional growth through intelligent, human-centric
            tools.
          </p>

          <button
            className="px-6 py-3 rounded-xl font-semibold text-lg cursor-pointer transition-all
                       bg-DARK-PRIMARY text-LIGHT-GRAY border-2 border-DARK-PRIMARY 
                       shadow- hover:shadow-GREEN"
          >
            Get your free proposal
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
          <img
            src="/aboutus.png"
            alt="About Us Graphic"
            className="w-[280px] md:w-[360px] object-contain"
          />
        </div>
      </div>

      {/* MISSION + VISION */}
      <div className="grid md:grid-cols-2 gap-14 items-start mb-24">

        {/* Mission Card */}
        <div
          className="rounded-3xl p-10 border-2 bg-LIGHT-GRAY border-DARK-PRIMARY
                     shadow-[4px_4px_0px_0px_#191A23] hover:-translate-y-1 hover:shadow-DARK-PRIMARY transition"
        >
          <h3 className="text-3xl font-semibold mb-4 px-3 py-1 rounded-md w-fit bg-GREEN text-DARK-PRIMARY">
            Our Mission
          </h3>
          <p className="text-[#191A23]/80 text-lg leading-relaxed">
            We democratize skill development through AI-driven simulations,
            empowering everyone to build soft and technical capabilities.
          </p>
        </div>

        {/* Vision Card */}
        <div
          className="rounded-3xl p-10 border-2 bg-LIGHT-GRAY border-DARK-PRIMARY
                     shadow-[4px_4px_0px_0px_#191A23] hover:-translate-y-1 hover:shadow-DARK-PRIMARY transition"
        >
          <h3 className="text-3xl font-semibold mb-4 px-3 py-1 rounded-md w-fit bg-GREEN text-DARK-PRIMARY">
            Our Vision
          </h3>
          <p className="text-[#191A23]/80 text-lg leading-relaxed">
            To be the global standard for immersive career development tools —
            accessible, adaptive, and impactful.
          </p>
        </div>
      </div>

      {/* WHAT DRIVES US */}
      <div>
        <h3 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          What Drives Us
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center ">
          {[
            {
              icon: "🚀",
              title: "Innovation",
              desc: "Always evolving with tech and user needs.",
            },
            {
              icon: "🌍",
              title: "Accessibility",
              desc: "Upskilling that reaches across the globe.",
            },
            {
              icon: "💡",
              title: "Creativity",
              desc: "We build with boldness and imagination.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl border-2 bg-LIGHT-GRAY border-DARK-PRIMARY
                         shadow-[4px_4px_0px_0px_#191A23] hover:-translate-y-1 
                         hover:shadow-DARK-PRIMARY transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-DARK-PRIMARY/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
