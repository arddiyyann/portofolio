"use client";
import FadeUp from "../animation/FadeUp";

const EducationItem = ({ icon, title, institution, duration, gpa, activities }) => (
    <FadeUp>
        <div className="relative pl-8 pb-10 border-l-2 last:pb-0" style={{ borderColor: "#00D9FF" }}>
            <div
                className="absolute w-4 h-4 rounded-full -left-2.5 top-1 shadow-[0_0_10px_#00D9FF]"
                style={{ background: "#00D9FF" }}
            ></div>

            <div className="space-y-2">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-[0_0_10px_#00D9FF60]">
                        {title}
                    </h3>
                </div>

                <p className="text-sm font-semibold text-[#00D9FF]">{duration}</p>
                <p className="text-gray-300 font-medium">{institution}</p>

                {gpa && (
                    <p className="text-sm text-gray-400">
                        GPA: <span className="font-semibold text-white">{gpa}</span>
                    </p>
                )}

                {activities && activities.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-800">
                        <p className="text-xs font-semibold text-[#00D9FF] mb-2">
                            Achievements:
                        </p>
                        <ul className="space-y-1">
                            {activities.map((activity, idx) => (
                                <li
                                    key={idx}
                                    className="text-xs text-gray-400 flex items-center gap-2"
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_#00D9FF]"
                                        style={{ background: "#00D9FF" }}
                                    ></span>
                                    {activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </FadeUp>
);

export default function Education() {
    const educations = [
        {
            icon: "🎓",
            title: "Sarjana Komputer - Teknik Informatika",
            institution: "Universitas Muhammadiyah Magelang",
            duration: "2021 - 2025",
            gpa: "3.7 / 4.0",
            activities: [
                "Dean's List - 2023 & 2024",
                "Developed multiple full-stack web applications",
                "Active in tech clubs and seminars",
            ],
        },
        {
            icon: "💻",
            title: "SMK - Teknik Komputer dan Jaringan",
            institution: "SMK Swadaya Temanggung",
            duration: "2018 - 2021",
            gpa: "3.8 / 4.0",
            activities: [
                "Graduated with distinction",
                "Led IT projects and competitions",
                "Specialized in web development",
            ],
        },
        {
            icon: "📚",
            title: "Sekolah Menengah Pertama",
            institution: "SMP Negeri 1 Kedu",
            duration: "2015 - 2018",
            activities: [
                "Science Olympiad participant",
                "Active in computer club",
            ],
        },
    ];

    const certifications = [
        { title: "React Fundamentals", issuer: "Udemy" },
        { title: "Complete Web Development", issuer: "Coursera" },
        { title: "Database Design", issuer: "LinkedIn Learning" },
    ];

    return (
        <section
            id="education"
            className="w-full min-h-screen px-6 md:px-12 py-24 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
        >
            {/* Efek cahaya latar belakang */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D9FF10,transparent_70)] pointer-events-none"></div>

            {/* Header */}
            <div className="text-center mb-16 relative z-10">
                <FadeUp>
                    <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_20px_#00D9FF] mb-4">
                        Education
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My academic journey and learning path
                    </p>
                </FadeUp>
            </div>

            {/* Timeline Education */}
            <div className="space-y-10 relative z-10 max-w-3xl mx-auto">
                {educations.map((edu, idx) => (
                    <EducationItem key={idx} {...edu} />
                ))}
            </div>

            {/* Certifications */}
            <div className="mt-20 pt-12 border-t border-gray-800 relative z-10 max-w-5xl mx-auto">
                <FadeUp>
                    <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-[0_0_15px_#00D9FF] text-center">
                        Certifications & Courses
                    </h3>
                </FadeUp>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, idx) => (
                        <FadeUp key={idx} delay={idx * 0.1}>
                            <div className="bg-gray-900/70 backdrop-blur-lg rounded-2xl p-6 border border-[#00D9FF50] hover:shadow-[0_0_25px_#00D9FF60] transition-all duration-300">
                                <p className="font-semibold text-white">{cert.title}</p>
                                <p className="text-sm text-gray-400 mt-2">{cert.issuer}</p>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
