"use client";

import { motion } from "framer-motion";
import FadeUp from "../animation/FadeUp";

const ProjectCard = ({ title, description, technologies, liveUrl, githubUrl, index }) => (
    <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <FadeUp delay={index * 0.1}>
            <div
                className="group bg-gray-900/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-cyan-400 hover:shadow-[0_0_25px_#00D9FF80] transition-all duration-500"
            >
                {/* Header Project */}
                <div
                    className="h-48 relative overflow-hidden animate-gradient-x"
                    style={{
                        background: 'linear-gradient(270deg, #00D9FF, #0066FF, #00D9FF)',
                        backgroundSize: '400% 400%',
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-40 text-white drop-shadow-[0_0_25px_#00D9FF]">
                            💻
                        </div>
                    </div>
                </div>

                {/* Konten Project */}
                <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#00D9FF] transition-all">
                        {title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
                        {description}
                    </p>

                    {/* Teknologi */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-xs md:text-sm rounded-full border border-cyan-400/50 text-[#00D9FF] bg-[#00D9FF10] backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex gap-3">
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-[0_0_15px_#00D9FF] hover:-translate-y-0.5"
                            style={{
                                background: 'linear-gradient(135deg, #00D9FF, #0099CC)',
                            }}
                        >
                            Live Demo
                        </a>
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 rounded-xl font-semibold border-2 border-cyan-400 text-[#00D9FF] transition-all hover:bg-[#00D9FF10] hover:shadow-[0_0_15px_#00D9FF]"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </FadeUp>
    </motion.div>
);

export default function Projects() {
    const projects = [
        {
            title: "Aplikasi POS Terpadu",
            description: "Sistem Point of Sale berbasis PWA dengan fitur inventory management, laporan penjualan real-time, dan integrasi pembayaran digital.",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
        },
        {
            title: "Platform Rekrutmen Gamifikasi",
            description: "Platform rekrutmen dengan elemen gamifikasi seperti poin, leaderboard, dan tantangan coding berbasis platformer game.",
            technologies: ["Next.js", "Laravel", "MySQL", "Firebase"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
        },
        {
            title: "E-Learning Management System",
            description: "LMS modern dengan fitur live class, submission tugas, progress tracking, dan dashboard analytics untuk guru dan siswa.",
            technologies: ["React", "Express", "MongoDB", "Socket.io"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
        },
        {
            title: "Real Estate Marketplace",
            description: "Platform marketplace properti dengan fitur pencarian canggih, virtual tour, dan rekomendasi AI.",
            technologies: ["Next.js", "Stripe", "Google Maps API", "Prisma"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com",
        },
    ];

    return (
        <section
            id="projects"
            className="w-full min-h-screen px-6 md:px-12 py-24 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D9FF10,transparent_70%)] pointer-events-none"></div>
            <div className="text-center mb-16 relative z-10">
                <FadeUp>
                    <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_20px_#00D9FF] mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Beberapa proyek unggulan yang saya kerjakan menggunakan teknologi modern
                    </p>
                </FadeUp>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 relative z-10">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} index={idx} />
                ))}
            </div>

            <div className="text-center mt-20 relative z-10">
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-3 text-lg font-semibold rounded-xl text-white bg-linear-to-b from-[#00D9FF] to-[#0099CC] hover:shadow-[0_0_25px_#00D9FF] hover:-translate-y-1 transition-all"
                >
                    View All Projects on GitHub
                </a>
            </div>
        </section>
    );
}
