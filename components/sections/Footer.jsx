"use client";
import { useState } from "react";
import FadeUp from "../animation/FadeUp";

const SocialLink = ({ icon, label, url }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 border border-[#00D9FF60] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-white hover:shadow-[0_0_20px_#00D9FF] transition-all duration-300"
        title={label}
    >
        {icon}
    </a>
);

export default function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! (Demo)");
        setFormData({ name: "", email: "", message: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const socialLinks = [
        {
            label: "GitHub",
            url: "https://github.com",
            icon: <i className="fab fa-github text-xl"></i>,
        },
        {
            label: "LinkedIn",
            url: "https://linkedin.com",
            icon: <i className="fab fa-linkedin text-xl"></i>,
        },
        {
            label: "Twitter",
            url: "https://twitter.com",
            icon: <i className="fab fa-x-twitter text-xl"></i>,
        },
        {
            label: "Email",
            url: "mailto:your@email.com",
            icon: <i className="fas fa-envelope text-xl"></i>,
        },
    ];

    const contactInfo = [
        { icon: <i className="fas fa-envelope"></i>, label: "Email", value: "your@email.com" },
        { icon: <i className="fas fa-phone"></i>, label: "Phone", value: "+62 812-3456-7890" },
        { icon: <i className="fas fa-map-marker-alt"></i>, label: "Location", value: "Temanggung, Indonesia" },
    ];

    return (
        <footer className="relative overflow-hidden bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D9FF10,transparent_70%)] pointer-events-none"></div>
            {/* Contact Section */}
            <section id="contact" className="relative max-w-6xl mx-auto px-6 py-24 z-10">
                <div className="text-center mb-16">
                    <FadeUp>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_20px_#00D9FF]">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Have a question or want to collaborate? Let’s connect!
                        </p>
                    </FadeUp>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <FadeUp>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-900/60 backdrop-blur-md rounded-3xl border border-[#00D9FF40] p-8 space-y-5 hover:shadow-[0_0_25px_#00D9FF40] transition-all duration-300"
                        >
                            <div>
                                <label className="block text-sm font-semibold text-[#00D9FF] mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-[#00D9FF30] focus:outline-none focus:border-[#00D9FF] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#00D9FF] mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-[#00D9FF30] focus:outline-none focus:border-[#00D9FF] transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-[#00D9FF] mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-[#00D9FF30] focus:outline-none focus:border-[#00D9FF] transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 font-semibold rounded-xl text-white shadow-[0_0_15px_#00D9FF60] hover:shadow-[0_0_25px_#00D9FF] transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #00D9FF, #0099CC)",
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </FadeUp>

                    {/* Contact Info */}
                    <FadeUp delay={0.1}>
                        <div className="space-y-8">
                            {contactInfo.map((info, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4 bg-gray-900/40 p-5 rounded-2xl border border-[#00D9FF20] hover:shadow-[0_0_20px_#00D9FF30] transition-all duration-300"
                                >
                                    <span className="text-2xl text-[#00D9FF]">{info.icon}</span>
                                    <div>
                                        <h3 className="font-semibold text-white">{info.label}</h3>
                                        <p className="text-gray-400">{info.value}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="pt-8 border-t border-gray-800">
                                <p className="text-sm font-semibold text-[#00D9FF] mb-4">
                                    Connect With Me
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((link) => (
                                        <SocialLink
                                            key={link.label}
                                            icon={link.icon}
                                            label={link.label}
                                            url={link.url}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 bg-gray-950/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-400">
                    <p>
                        © {new Date().getFullYear()} <span className="text-[#00D9FF]">Ali Ardiyansyah</span> — All rights reserved.
                    </p>
                    <p className="mt-2">
                        Designed & Built with <span className="text-red-500">❤️</span> using{" "}
                        <span className="text-[#00D9FF] font-semibold">React & Next.js</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
