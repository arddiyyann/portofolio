"use client";
import { motion } from "framer-motion";
import FadeUp from "../animation/FadeUp";

const ExperienceItem = ({ title, company, period, location, description, skills }) => (
    <FadeUp>
        <motion.div
            className="relative bg-gray-900/40 border border-gray-800 rounded-2xl p-6 hover:shadow-[0_0_20px_#00D9FF30] transition-all duration-300"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200 }}
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-sm text-[#00D9FF] font-semibold">{period}</p>
            </div>

            <p className="text-gray-400 font-medium mb-1">
                {company} • <span className="italic">Magang</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">{location}</p>

            <p className="text-gray-300 leading-relaxed mb-4">{description}</p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-[#00D9FF10] text-[#00D9FF] border border-[#00D9FF30]"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    </FadeUp>
);

export default function Experience() {
    const experiences = [
        {
            title: "Mahasiswa Pengembangan",
            company: "Gamelab Indonesia",
            period: "Des 2024 - Mar 2025 • 4 bulan",
            location: "Salatiga, Jawa Tengah, Indonesia • Jarak Jauh",
            description: `Selama pelatihan, saya mempelajari dan mengembangkan kemampuan sebagai Fullstack Web Developer,
      mencakup perancangan tampilan antarmuka (Front-End) menggunakan HTML, CSS, JavaScript, serta pengelolaan
      logika dan database (Back-End) dengan PHP dan MySQL.
      Saya juga memahami penerapan framework modern untuk meningkatkan efisiensi pengembangan, sekaligus memperkuat kemampuan problem solving, kolaborasi tim, dan manajemen proyek berbasis web.`,
            skills: ["PHP", "MySQL", "+7 keahlian"],
        },
    ];

    return (
        <section id="experience" className="min-h-screen w-full bg-gray-950 py-24">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <FadeUp>
                        <h2 className="text-5xl font-bold text-white mb-4">Pengalaman</h2>
                        <div className="w-24 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#0099CC] mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-400 text-lg">
                            Beberapa pengalaman profesional dan pelatihan saya di bidang pengembangan perangkat lunak.
                        </p>
                    </FadeUp>
                </div>

                {/* Timeline Single (LinkedIn style) */}
                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <ExperienceItem key={idx} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}
