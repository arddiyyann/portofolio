"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Magnetic from "./Magnetic";
import FadeUp from "./FadeUp";

export default function SocialIcons() {
    const icons = [FaGithub, FaLinkedin, FaInstagram, FaEnvelope];
    return (
        <FadeUp delay={0.25}>
            <div className="flex gap-5 mt-6 text-2xl">
                {icons.map((Icon, i) => (
                    <Magnetic key={i}>
                        <a href="#" className="hover:text-[#2EC4B6] transition">
                            <Icon />
                        </a>
                    </Magnetic>
                ))}
            </div>
        </FadeUp>
    );
}
