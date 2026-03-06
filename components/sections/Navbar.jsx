"use client";
import FadeUp from "../animation/FadeUp";

export default function Navbar() {
    const tautanNavigasi = [
        { nama: "Tentang", href: "#about" },
        { nama: "Pengalaman", href: "#experience" },
        { nama: "Keahlian", href: "#skills" },
        { nama: "Proyek", href: "#projects" },
        { nama: "Pendidikan", href: "#education" },
        { nama: "Kontak", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-gray-900/60 border-b border-gray-800 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

                {/* Logo / Nama Brand */}
                <FadeUp>
                    <a
                        href="#hero"
                        className="text-2xl font-bold text-white tracking-tight hover:text-[#00D9FF] transition-colors"
                    >
                        Ali Ardiyansyah
                    </a>
                </FadeUp>

                {/* Tautan Navigasi (Desktop) */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    {tautanNavigasi.map((tautan, idx) => (
                        <FadeUp key={tautan.nama} delay={idx * 0.05}>
                            <a
                                href={tautan.href}
                                className="relative text-gray-300 hover:text-[#00D9FF] transition-colors duration-300
                           after:content-[''] after:absolute after:w-0 after:h-[1.5px] after:bg-[#00D9FF]
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300
                           hover:after:w-full"
                            >
                                {tautan.nama}
                            </a>
                        </FadeUp>
                    ))}
                </div>

                {/* Tombol Menu untuk Tampilan Mobile (bisa dikembangkan nanti) */}
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-[#00D9FF] transition-colors">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}
