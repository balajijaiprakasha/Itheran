

const Team = () => {
    const DARK_PRIMARY = "#191A23";
    // const LIGHT_GRAY = "#F3F3F3";
    const GREEN_ACCENT = "#B9FF66";

    const members = [
        {
            name: "John Smith",
            role: "CEO and Founder",
            desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            img: "/team/member1.png",
        },
        {
            name: "Jane Doe",
            role: "Director of Operations",
            desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            img: "/team/member2.png",
        },
        {
            name: "Michael Brown",
            role: "Senior SEO Specialist",
            desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
            img: "/team/member3.png",
        },
        {
            name: "Emily Johnson",
            role: "PPC Manager",
            desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
            img: "/team/member4.png",
        },
        {
            name: "Brian Williams",
            role: "Social Media Specialist",
            desc: "4+ years of experience in social media marketing. Skilled in content scheduling, analytics, and engagement",
            img: "/team/member5.png",
        },
        {
            name: "Sarah Kim",
            role: "Content Creator",
            desc: "2+ years of experience in writing and editing. Skilled in creating SEO-optimized content",
            img: "/team/member6.png",
        },
    ];

    return (
        <section className="py-24 px-6 lg:px-32 bg-white text-[#191A23]">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-14">
                <h2
                    className="text-3xl md:text-4xl font-semibold rounded-xl px-4 py-2 bg-[#B9FF66] w-fit"
                    style={{ color: DARK_PRIMARY }}
                >
                    Team
                </h2>

                <p className="text-base md:text-lg max-w-3xl text-[#191A23]/80">
                    Meet the skilled and experienced team behind our successful training
                    and career development strategies.
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {members.map((m, i) => (
                    <div
                        key={i}
                        className="rounded-3xl p-8 border-2 flex flex-col gap-5"
                        style={{
                            borderColor: DARK_PRIMARY,
                            backgroundColor: "white",
                            boxShadow: `4px 4px 0 0 ${DARK_PRIMARY}`,
                        }}
                    >
                        {/* Image */}
                        <div className="relative flex justify-center">
                            <div
                                className="absolute w-28 h-28 rounded-full"
                                style={{ backgroundColor: GREEN_ACCENT }}
                            ></div>

                            <img
                                src={m.img}
                                className="relative w-24 h-24 object-cover rounded-full mt-2"
                                alt={m.name}
                            />
                        </div>

                        {/* Name */}
                        <div>
                            <h3 className="text-xl font-semibold">{m.name}</h3>
                            <p className="text-sm text-[#191A23]/70">{m.role}</p>
                        </div>

                        <hr className="border-[#191A23]/40" />

                        {/* Description */}
                        <p className="text-sm leading-relaxed text-[#191A23]/80">{m.desc}</p>

                        {/* LinkedIn Circle */}
                        <div className="flex justify-end">
                            <div
                                className="w-8 h-8 rounded-full flex items-center justify-center font-bold cursor-pointer"
                                style={{
                                    backgroundColor: "black",
                                    color: GREEN_ACCENT,
                                }}
                            >
                                in
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
