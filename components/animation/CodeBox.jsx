"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeUp from "./FadeUp";

// 🎨 Palet Warna
const COLORS = {
    red: "#FF6B6B",
    cyan: "#4ECDC4",
    yellow: "#FFE66D",
    green: "#A8E6CF",
    blue: "#3A86FF",
    gray: "#94A3B8",
    bg1: "#0F1419",
    bg2: "#1B2430",
    border: "#28374A",
};

// 🧩 Komponen Warna
const Keyword = ({ children }) => <span style={{ color: COLORS.red }}>{children}</span>;
const String = ({ children }) => <span style={{ color: COLORS.cyan }}>{children}</span>;
const Property = ({ children }) => <span style={{ color: COLORS.yellow }}>{children}</span>;
const FunctionName = ({ children }) => <span style={{ color: COLORS.green }}>{children}</span>;
const Boolean = ({ children }) => <span style={{ color: COLORS.blue }}>{children}</span>;

// 🧾 Baris Kode
const CodeLine = ({ number, children, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay }}
        viewport={{ once: true }}
        className="flex gap-4"
    >
        <span className="select-none w-6 text-right text-gray-600 text-sm">{number}</span>
        <span className="text-gray-200">{children}</span>
    </motion.div>
);

// 🪟 Header Window
const WindowHeader = () => {
    const buttons = ["#FF5F57", "#FEBC2E", "#28C940"];
    return (
        <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{
                background: COLORS.bg2,
                borderColor: COLORS.border,
            }}
        >
            <div className="flex items-center gap-2">
                {buttons.map((color, idx) => (
                    <div
                        key={idx}
                        className="w-3 h-3 rounded-full"
                        style={{
                            backgroundColor: color,
                            boxShadow: `0 0 5px ${color}90`,
                        }}
                    />
                ))}
            </div>
            <span className="text-xs text-gray-400 font-medium tracking-wide">ali.js</span>
        </div>
    );
};

// 💻 Komponen Utama
export default function CodeBox() {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-300, 300], [8, -8]);
    const rotateY = useTransform(x, [-300, 300], [-8, 8]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set(e.clientX - (rect.left + rect.width / 2));
        y.set(e.clientY - (rect.top + rect.height / 2));
    };

    return (
        <FadeUp delay={0.45}>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                style={{
                    rotateX,
                    rotateY,
                    background: `linear-gradient(145deg, ${COLORS.bg1}, ${COLORS.bg2})`,
                    borderColor: COLORS.border,
                    boxShadow:
                        "0 0 25px rgba(78, 205, 196, 0.2), 0 0 60px rgba(255, 230, 109, 0.15)",
                }}
                className="rounded-2xl border overflow-hidden backdrop-blur-sm 
                transition-all duration-300 hover:scale-[1.02]"
            >
                <WindowHeader />

                <div className="p-6 font-mono text-sm leading-relaxed tracking-wide">
                    <CodeLine number="1" delay={0.1}>
                        <Keyword>const</Keyword> <Property>coder</Property> = {"{"}
                    </CodeLine>
                    <CodeLine number="2" delay={0.15}>
                        &nbsp;&nbsp;<Property>name</Property>: <String>"Ali Ardiyansyah"</String>,
                    </CodeLine>
                    <CodeLine number="3" delay={0.2}>
                        &nbsp;&nbsp;<Property>skills</Property>: [<String>"React"</String>,{" "}
                        <String>"Laravel"</String>, <String>"MySQL"</String>,{" "}
                        <String>"JavaScript"</String>],
                    </CodeLine>
                    <CodeLine number="4" delay={0.25}>
                        &nbsp;&nbsp;<Property>hardWorker</Property>: <Boolean>true</Boolean>,
                    </CodeLine>
                    <CodeLine number="5" delay={0.3}>
                        &nbsp;&nbsp;<Property>quickLearner</Property>: <Boolean>true</Boolean>,
                    </CodeLine>
                    <CodeLine number="6" delay={0.35}>
                        &nbsp;&nbsp;<Property>problemSolver</Property>: <Boolean>true</Boolean>,
                    </CodeLine>
                    <CodeLine number="7" delay={0.4}>
                        &nbsp;&nbsp;<FunctionName>hireable</FunctionName>() {"{"}
                    </CodeLine>
                    <CodeLine number="8" delay={0.45}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<Keyword>return</Keyword> (
                    </CodeLine>
                    <CodeLine number="9" delay={0.5}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Keyword>this</Keyword>.
                        <Property>hardWorker</Property> &&
                    </CodeLine>
                    <CodeLine number="10" delay={0.55}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Keyword>this</Keyword>.
                        <Property>problemSolver</Property> &&
                    </CodeLine>
                    <CodeLine number="11" delay={0.6}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Keyword>this</Keyword>.
                        <Property>skills</Property>.length &gt;= <Boolean>5</Boolean>
                    </CodeLine>
                    <CodeLine number="12" delay={0.65}>
                        &nbsp;&nbsp;&nbsp;&nbsp;);
                    </CodeLine>
                    <CodeLine number="13" delay={0.7}>
                        &nbsp;&nbsp;{"}"}
                    </CodeLine>
                    <CodeLine number="14" delay={0.75}>
                        {"};"}
                    </CodeLine>
                </div>
            </motion.div>
        </FadeUp>
    );
}
