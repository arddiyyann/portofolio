"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeUp from "../animation/FadeUp";

export default function About() {
    const [isHoveringSkills, setIsHoveringSkills] = useState(false);
    const [imageExists, setImageExists] = useState(true);
    const [failedIcons, setFailedIcons] = useState({});

    useEffect(() => {
        const img = new Image();
        img.src = "/profile.png";
        img.onload = () => setImageExists(true);
        img.onerror = () => setImageExists(false);
    }, []);

    const skills = [
        { slug: "html5", name: "HTML", level: "Lanjut", fa: "fa-brands fa-html5" },
        { slug: "javascript", name: "JavaScript", level: "Lanjut", fa: "fa-brands fa-js" },
        { slug: "jquery", name: "jQuery", level: "Menengah", fa: "fa-brands fa-jquery" },
        { slug: "bootstrap", name: "Bootstrap", level: "Menengah", fa: "fa-brands fa-bootstrap" },
        { slug: "sass", name: "Sass", level: "Menengah", fa: "fa-brands fa-sass" },
        { slug: "flutter", name: "Flutter", level: "Menengah", fa: "fa-brands fa-flutter" },
        { slug: "php", name: "PHP", level: "Menengah", fa: "fa-brands fa-php" },
        { slug: "mysql", name: "MySQL", level: "Menengah", fa: "fa-solid fa-database" },
        { slug: "laravel", name: "Laravel", level: "Menengah", fa: "fa-brands fa-laravel" },
        { slug: "xampp", name: "XAMPP", level: "Menengah", fa: "fa-solid fa-server" },
        { slug: "postgresql", name: "SQL", level: "Menengah", fa: "fa-solid fa-database" },
        { slug: "figma", name: "Figma", level: "Menengah", fa: "fa-brands fa-figma" },
    ];


    const statVariant = {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hover: { y: -6 },
    };

    return (
        <section id="about" className="min-h-screen w-full bg-gray-950 py-24 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00D9FF10,_transparent_70%)] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Judul */}
                <div className="mb-20 text-center">
                    <FadeUp>
                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Tentang <span className="text-[#00D9FF]">Saya</span>
                        </h2>
                        <div className="w-28 h-[3px] bg-gradient-to-r from-[#00D9FF] to-[#0099CC] mx-auto rounded-full"></div>
                    </FadeUp>
                </div>

                {/* Isi Utama */}
                <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
                    {/* Foto Profil */}
                    <FadeUp>
                        <div className="space-y-8">
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 220 }}
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-3xl blur-xl"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    style={{
                                        background: "linear-gradient(90deg, #00D9FF, #0099CC)",
                                    }}
                                ></motion.div>
                                <div
                                    className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-900 shadow-2xl border border-gray-800"
                                    style={{
                                        backgroundImage: 'url(/profile.png)',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    {!imageExists && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-800 to-gray-900">
                                            <div className="text-9xl mb-4">👨‍💻</div>
                                            <p className="text-2xl font-bold text-white">Ali Ardiyansyah</p>
                                            <p className="text-[#00D9FF] mt-2 text-lg">Web Developer</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Statistik */}
                            <motion.div
                                className="grid grid-cols-3 gap-4"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    variants={statVariant}
                                    whileHover="hover"
                                    className="bg-gray-900 rounded-2xl p-4 border border-gray-800 text-center"
                                >
                                    <p className="text-3xl font-bold text-[#00D9FF]"> 1 </p>
                                    <p className="text-sm text-gray-400 mt-1">Tahun Pengalaman</p>
                                </motion.div>
                                <motion.div
                                    variants={statVariant}
                                    whileHover="hover"
                                    className="bg-gray-900 rounded-2xl p-4 border border-gray-800 text-center"
                                >
                                    <p className="text-3xl font-bold text-[#00D9FF]">12+</p>
                                    <p className="text-sm text-gray-400 mt-1">Teknologi Dikuasai</p>
                                </motion.div>
                                <motion.div
                                    variants={statVariant}
                                    whileHover="hover"
                                    className="bg-gray-900 rounded-2xl p-4 border border-gray-800 text-center"
                                >
                                    <p className="text-3xl font-bold text-[#00D9FF]">∞</p>
                                    <p className="text-sm text-gray-400 mt-1">Semangat Berkarya</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </FadeUp>

                    {/* Deskripsi */}
                    <FadeUp delay={0.1}>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-4">Sedikit Tentang Saya</h3>
                            <div className="text-gray-300 text-lg leading-relaxed space-y-5">
                                <p>
                                    Halo! Saya <span className="text-[#00D9FF] font-semibold">Ali Ardiyansyah</span>,
                                    seorang lulusan <span className="font-semibold">Teknik Informatika Universitas Muhammadiyah Magelang</span> dengan fokus pada{" "}
                                    <span className="text-[#00D9FF] font-semibold">Software Engineering</span>.
                                </p>
                                <p>
                                    Saya memiliki minat besar dalam dunia <span className="text-[#00D9FF] font-medium">Web dan Mobile Development</span>, terutama dalam menciptakan aplikasi yang intuitif, efisien, dan berorientasi pada pengalaman pengguna.
                                </p>
                                <p>
                                    Bagi saya, menulis kode bukan hanya membuat sistem bekerja, tetapi juga menciptakan pengalaman yang menyenangkan dan mudah digunakan.
                                </p>
                                <p>
                                    Selama perjalanan akademik dan proyek yang saya kerjakan, saya telah mempelajari berbagai teknologi seperti{" "}
                                    <span className="text-[#00D9FF]">HTML, CSS, JavaScript, PHP, Laravel, MySQL,</span> hingga{" "}
                                    <span className="text-[#00D9FF]">Flutter</span>. Saya juga memiliki pemahaman dasar tentang{" "}
                                    <span className="text-[#00D9FF]">desain UI/UX menggunakan Figma</span>, yang membantu saya menggabungkan sisi teknis dan estetika dalam setiap pengembangan.
                                </p>
                            </div>

                            <a
                                href="#contact"
                                className="inline-block mt-8 px-8 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#00D9FF]/50"
                                style={{ background: "linear-gradient(135deg, #00D9FF, #0099CC)" }}
                            >
                                Hubungi Saya
                            </a>
                        </div>
                    </FadeUp>
                </div>

                {/* Skill Section */}
                <div>
                    <FadeUp>
                        <h3 className="text-3xl font-bold text-white mb-16">Kemampuan & Teknologi</h3>
                    </FadeUp>

                    <div className="overflow-hidden">
                        <div
                            className={`skills-carousel ${isHoveringSkills ? "paused" : ""}`}
                            onMouseEnter={() => setIsHoveringSkills(true)}
                            onMouseLeave={() => setIsHoveringSkills(false)}
                            style={{
                                "--scroll-duration": `${skills.length * 3.5}s`,
                                display: "flex",
                                gap: "3rem",
                                width: "fit-content",
                                paddingBottom: "1rem",
                            }}
                        >
                            {[...skills, ...skills].map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="group shrink-0 flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    style={{ minWidth: "100px" }}
                                >
                                    <div className="relative">
                                        <div
                                            className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00D9FF]/20 to-[#0099CC]/20 blur-lg group-hover:from-[#00D9FF]/40 group-hover:to-[#0099CC]/40 transition-all duration-300"
                                            style={{ width: "80px", height: "80px" }}
                                        ></div>
                                        <div className="relative flex items-center justify-center w-20 h-20 rounded-full border border-[#00D9FF]/30 group-hover:border-[#00D9FF] transition-all duration-300 bg-gray-900/50">
                                            {!failedIcons[skill.slug] ? (
                                                <img
                                                    src={`https://cdn.simpleicons.org/${skill.slug}/00D9FF`}
                                                    alt={`${skill.name} icon`}
                                                    className="w-10 h-10 group-hover:scale-125 transition-transform duration-300"
                                                    onError={() =>
                                                        setFailedIcons((prev) => ({
                                                            ...prev,
                                                            [skill.slug]: true,
                                                        }))
                                                    }
                                                />
                                            ) : (
                                                <i
                                                    className={`${skill.fa ?? "fa-solid fa-code"} text-3xl text-[#00D9FF] group-hover:scale-125 transition-transform duration-300`}
                                                    aria-hidden="true"
                                                ></i>
                                            )}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white font-semibold text-sm">
                                            {skill.name}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">{skill.level}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
