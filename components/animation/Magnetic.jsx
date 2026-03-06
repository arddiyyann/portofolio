"use client";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

const Magnetic = ({ children }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    function handleMouseMove(e) {
        const rect = ref.current.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        x.set(dx * 0.2);
        y.set(dy * 0.2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="inline-block"
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
