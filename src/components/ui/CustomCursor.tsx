import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    document.documentElement.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, input, textarea, [role='button']"));
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ left: sx, top: sy }}
        className="pointer-events-none fixed z-[200] -ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan"
      />
      <motion.div
        style={{ left: sx, top: sy }}
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.5 : 0.3 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed z-[200] -ml-4 -mt-4 h-8 w-8 rounded-full border border-cyan"
      />
    </>
  );
}
