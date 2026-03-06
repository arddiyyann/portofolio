"use client";
import { motion } from "framer-motion";
import FadeUp from "../animation/FadeUp";

const SkillCategory = ({ category, skills, icon }) => (
    <FadeUp>
        <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-gray-900/60 rounded-3xl p-8 border border-gray-800 hover:border-[#00D9FF] hover:shadow-[0_0_25px_#00D9FF40] transition-all duration-300"
        >
            {/* Glowing gradient background blur */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-[#00D9FF]/10 to-[#0099CC]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{icon}</span>
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, idx) => (
                        <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 text-sm font-semibold rounded-full border transition-all"
                            style={{
                                background:
                                    "linear-gradient(135deg, #00D9FF20, #0099CC20)",
                                color: "#00D9FF",
                                border: "1px solid #00D9FF50",
                            }}
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    </FadeUp>
);

export default function Skills() {
    const skillCategories = [
        {
            category: "Frontend",
            icon: "🎨",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Bootstrap",
                "SASS",
            ],
        },
        {
            category: "Backend",
            icon: "⚙️",
            skills: [
                "PHP",
                "Laravel",
                "Node.js",
                "Express",
                "TypeScript",
                "RESTful API",
            ],
        },
        {
            category: "Database",
            icon: "🗄️",
            skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
        },
        {
            category: "Tools & Others",
            icon: "🛠️",
            skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS"],
        },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen w-full bg-gray-950 py-24"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20">
                    <FadeUp>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Skills & Expertise
                        </h2>
                        <div className="w-24 h-1 bg-linear-to-r from-[#00D9FF] to-[#0099CC] rounded-full"></div>
                        <p className="text-gray-400 mt-4 text-lg">
                            Technologies and tools I’m experienced with
                        </p>
                    </FadeUp>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {skillCategories.map((category, idx) => (
                        <SkillCategory
                            key={idx}
                            category={category.category}
                            skills={category.skills}
                            icon={category.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
