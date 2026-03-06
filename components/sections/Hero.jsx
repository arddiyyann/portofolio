"use client";
import FadeUp from "../animation/FadeUp";
import Magnetic from "../animation/Magnetic";
import SocialIcons from "../animation/SocialIcons";
import CodeBox from "../animation/CodeBox";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center px-6 overflow-hidden
            bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 pt-24 md:pt-0"
        >
            {/* Efek grid tipis di latar belakang */}
            <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center text-white">
                {/* Bagian Teks Hero */}
                <div>
                    <FadeUp>
                        <h1 className="text-5xl md:text-6xl font-space font-bold leading-tight">
                            Halo, Saya{" "}
                            <span className="font-space text-[#2EC4B6] animate-pulse drop-shadow-[0_0_18px_#2EC4B680]">
                                Ali Ardiyansyah
                            </span>
                            <br />
                            Seorang{" "}
                            <span className="font-space text-[#f2ff3a] drop-shadow-[0_0_18px_#3A86FF90] animate-glow">
                                Web Developer
                            </span>
                        </h1>
                    </FadeUp>

                    {/* Ikon Sosial */}
                    <div className="mt-6">
                        <SocialIcons />
                    </div>

                    {/* Tombol Aksi */}
                    <FadeUp delay={0.3}>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <Magnetic>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 rounded-full text-white font-semibold bg-[#2EC4B6]
                                    hover:bg-[#25b7a9] shadow-[0_0_15px_#2EC4B670] transition-all hover:-translate-y-1"
                                >
                                    Hubungi Saya
                                </a>
                            </Magnetic>

                            <Magnetic>
                                <a
                                    href="/cv-ali.pdf"
                                    className="px-6 py-3 rounded-full text-white font-semibold border-2 border-[#3A86FF]
                                    hover:bg-[#3A86FF] hover:shadow-[0_0_15px_#3A86FF80] transition-all hover:-translate-y-1"
                                >
                                    Unduh CV ↓
                                </a>
                            </Magnetic>
                        </div>
                    </FadeUp>
                </div>

                {/* Kotak Kode Animasi */}
                <FadeUp delay={0.4}>
                    <CodeBox />
                </FadeUp>

            </div>
        </section>
    );
}
